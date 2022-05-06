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
    for (let mineralFacility of mineralFacilities)
        if (mineralFacility.mineralId === mineralId)
        {
            mineralFacility.quantity = mineralFacility.quantity - 1
            newObject.quantity = mineralFacility.quantity
            newObject.facilityId = mineralFacility.facilityId
            newObject.mineralId = mineralFacility.mineralId
            newMineralFacilitiesArr.push(newObject)
        }
    return newMineralFacilitiesArr
}

export const mineralColonyQuantities = (mineralId, colonyId) => {
    let colonyMinerals = getColonyMinerals()
    let newObject = {}
    //if mineralId is chosen, mineralFacilities quantity with this mineralId - 1
    for (let colonyMineral of colonyMinerals)
        if (colonyMineral.mineralId === mineralId && colonyMineral.colonyId === colonyId)
        {
            colonyMineral.quantity = colonyMineral.quantity + 1
            newObject.quantity = colonyMineral.quantity
            newObject.facilityId = colonyMineral.facilityId
            newObject.mineralId = colonyMineral.mineralId
            newMineralColoniesArr.push(newObject)
        }
    return newMineralColoniesArr
}


export const spaceCart = (string) => {
    
    let state = getTransientState()
    let html = string
    let chosenMinerals = [...state.chosenMinerals]
    let chosenFacilities = [...state.chosenFacilities]
    

    //let mineralList = state.chosenMinerals.forEach((object1) => {
    //    let facilityList = state.chosenFacilities.forEach((object) => {
     //       html += `<li>1 ton of ${object1} from ${object}</li>`
     //   })
   // })

    //for (let chosenMineral of chosenMinerals) {
     //   for (let chosenFacility of chosenFacilities) {
    //        html += `<li>1 ton of ${chosenMineral} from ${chosenFacility}</li>`
    //    }
   // }

    for (let i = 0; i<chosenMinerals.length; i++) {
            html += `<li>1 ton of ${chosenMinerals[i]} from ${chosenFacilities[i]}</li>`
    }
    
    return html
}