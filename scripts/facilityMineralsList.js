import { getMineralFacilities, getMinerals, getMiningFacilities, getTransientState, setCustomOrderObj, setFacilitySet, setMineralId, setMineralName } from "./database.js";

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
            setMineralId(foundMineral.name)
            setFacilitySet(foundFacility.name)
            spaceCart()
        }
    }
    
)

export const spaceCart = () => {
    
    let state = getTransientState()
    let html = ""
    let chosenMinerals = state.chosenMinerals
    let chosenFacilities = state.chosenFacilities
    //let mineralList = state.chosenMinerals.forEach((object1) => {
    //    let facilityList = state.chosenFacilities.forEach((object) => {
     //       html += `<li>1 ton of ${object1} from ${object}</li>`
     //   })
   // })

    for (let chosenMineral of chosenMinerals) {
        for (let chosenFacility of chosenFacilities) {
            html += `<li>1 ton of ${chosenMineral} from ${chosenFacility}</li>`
        }
    }

    return html
}