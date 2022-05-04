import { getColonyMinerals, getMinerals, getMiningFacilities, getTransientState } from "./database.js";

let colonyMinerals = getColonyMinerals()
let miningFacilities = getMiningFacilities()
let minerals = getMinerals()

export const mineralsListHTML = () => {
    let html = '<ul>'
    let transientState = getTransientState()
    if (typeof transientState.facilityName === 'undefined') {
        html = ''
        return html
    } else {
        for (const miningFacility of miningFacilities) {
            if (transientState.facilityName === miningFacility.name) {
                for (const colonyMineral of colonyMinerals) {
                    for (const mineral of minerals) {
                        if (colonyMineral.colonyId === colony.id && mineralFacility.mineralId === mineral.id) {
                            html += `<li><input type="radio" name="mineralitem"/>${mineralFacility.quantity} tons of ${mineral.name}</li>`
                        }
                    }
                }
                html += '</ul>'
                return html
            }
        }
    }
}