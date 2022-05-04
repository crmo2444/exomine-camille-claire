import { getColonyMinerals, getMinerals, getColonies, getTransientState } from "./database.js";

let colonyMinerals = getColonyMinerals()
let colonies = getColonies()
let minerals = getMinerals()

export const colonyMineralsHTML = () => {
    let html = '<ul>'
    let transientState = getTransientState()
    if (typeof transientState.colonyName === 'undefined') {
        html = ''
        return html
    } else {
        for (const colony of colonies) {
            if (transientState.colonyName === colony.name) {
                for (const colonyMineral of colonyMinerals) {
                    for (const mineral of minerals) {
                        if (colonyMineral.colonyId === colony.id && colonyMineral.mineralId === mineral.id) {
                            if(colonyMineral.quantity !== 0) {
                                html += `<li>${colonyMineral.quantity} tons of ${mineral.name}</li>`
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