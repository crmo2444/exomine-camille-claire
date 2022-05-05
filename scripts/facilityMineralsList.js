import { getMineralFacilities, getMinerals, getMiningFacilities, getTransientState, setMineralId, setMineralName } from "./database.js";


export const mineralsListHTML = () => {
    let html = '<ul>'
    let transientState = getTransientState()
    if (typeof transientState.facilityName === 'undefined') {
        html = ''
        return html
    } else {
        let mineralFacilities = getMineralFacilities()
        let minerals = getMinerals()
        let miningFacilities = getMiningFacilities()
        for (const miningFacility of miningFacilities) {
            if (transientState.facilityName === miningFacility.name) {
                for (const mineralFacility of mineralFacilities) {
                    for (const mineral of minerals) {
                        if (mineralFacility.facilityId === miningFacility.id && mineralFacility.mineralId === mineral.id) {
                            if (mineralFacility.quantity !== 0) {
                                html += `<li class="radiobutton"><input type="radio" name="mineralitem" value="${mineral.name}"/>${mineralFacility.quantity} tons of ${mineral.name}</li>`
                            }
                        }
                    }
                }
                html += '</ul>'
                return html
            }
        }
    }
}

document.addEventListener(
    "change",
    (event) => {
        let minerals = getMinerals()
        if (event.target.name === "mineralitem") {
            setMineralName(event.target.value)
            let state = getTransientState()
            const foundMineral = minerals.find((mineral) => {
                return mineral.name === state.mineralName
            })
            setMineralId(foundMineral.id)
            spaceCart()
        }
    }
    
)

export const spaceCart = () => {
    
    let state = getTransientState()
    let html = ""

    if (typeof state.mineralName !== 'undefined') {

        html += `1 ton of ${state.mineralName} from ${state.facilityName}`
    }

    return html
}