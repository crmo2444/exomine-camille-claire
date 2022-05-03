import { getColonies, getGovernors, getColonyMinerals, getMinerals } from "./database.js"

let colonies = getColonies()
let governors = getGovernors()
let colonyMinerals = getColonyMinerals()
let minerals = getMinerals()


export const colonyHTML = () => {
    let html = ''
    for (const governor of governors) {
        for (const colony of colonies) {
            if (governor.colonyId === colony.id) {
                html += `<h2>Available Resources in ${colony.name}</h2>`
            }
        }
        return html
    }
}