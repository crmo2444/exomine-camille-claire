import { getMineralFacilities, getMinerals, getMiningFacilities, getTransientState, setCustomOrderObj, setMineralId, setMineralName } from "./database.js";


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
    console.log(state)
    let html = ""

    if (typeof state.mineralName !== 'undefined') {

        html += `1 ton of ${state.mineralName} from ${state.facilityName}`
    }

    return html
}