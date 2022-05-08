import { getColonyMinerals, getMineralFacilities, getMinerals, getMiningFacilities, getTransientState, setCustomOrderObj, setFacilitySet, setMineralId, setMineralName } from "./database.js";

export const mineralsListHTML = () => {
    let html = '<ul>'
    let transientState = getTransientState()
    if (typeof transientState.facilityName === 'undefined') {
        html = ''
        return html
    } else {
    let mineralFacilities = getMineralFacilities()
    let minerals = getMinerals()
    const filterMineralFacilities = mineralFacilities.filter(mineralFacilities => mineralFacilities.facilityId === transientState.facilityId)
    return `
    <ul>
    ${filterMineralFacilities.map(mineralFacilitiesObj => {
        if (mineralFacilitiesObj.quantity !== 0) {
            const foundMineral = minerals.find((mineral) => {
                return mineral.id === mineralFacilitiesObj.mineralId
            })
            return `<li class="radiobutton"><input type="radio" name="mineralitem" value="${foundMineral.name}"/>${mineralFacilitiesObj.quantity} tons of ${foundMineral.name}</li>`
        }
    }).join("")}
    </ul>
    `
    }
}

document.addEventListener(
    "change",
    (event) => {
        let minerals = getMinerals()
        let facilities = getMiningFacilities()
        
        if (event.target.name === "mineralitem") {
            setMineralName(event.target.value)
            let state = getTransientState()
            const foundMineral = minerals.find((mineral) => {
                return mineral.name === state.mineralName
            })
            const foundFacility = facilities.find((facility) => {
                return facility.id === state.facilityId
            })
            setMineralId(foundMineral.id)
            mineralFacilityQuantities(foundMineral.id)
            mineralColonyQuantities(foundMineral.id, state.colonyId)
            setFacilitySet(foundFacility.name)
            spaceCart("")
        }
    }
    
)

let newMineralFacilitiesArr = []
let newMineralColoniesArr = []

export const mineralFacilityQuantities = (mineralId) => {
    let mineralFacilities = getMineralFacilities()
    let newObject = {}
    //if mineralId is chosen, mineralFacilities quantity with this mineralId - 1
    mineralFacilities.map(mineralFacilityObj => {
        if (mineralFacilityObj.mineralId === mineralId) {
            mineralFacilityObj.quantity = mineralFacilityObj.quantity - 1
            newObject = {...mineralFacilityObj}
            newMineralFacilitiesArr.push(newObject)
        }
    })
    return newMineralFacilitiesArr
}

export const mineralColonyQuantities = (mineralId, colonyId) => {
    let colonyMinerals = getColonyMinerals()
    let newObject = {}
    //if mineralId is chosen AND colonyId matches, mineralFacilities quantity with this mineralId + 1

    colonyMinerals.map(colonyMineralObj => {
        if (colonyMineralObj.mineralId === mineralId && colonyMineralObj.colonyId === colonyId) {
            colonyMineralObj.quantity = colonyMineralObj.quantity + 1
            newObject = {...colonyMineralObj}
            newMineralColoniesArr.push(newObject)
        }
    })
    return newMineralColoniesArr
}


export const spaceCart = (string) => {
    
    let state = getTransientState()
    let html = string
    let chosenMinerals = [...state.chosenMinerals]
    let chosenFacilities = [...state.chosenFacilities]

    for (let i = 0; i<chosenMinerals.length; i++) {
            html += `<li>1 ton of ${chosenMinerals[i]} from ${chosenFacilities[i]}</li>`
    }
    return html
}