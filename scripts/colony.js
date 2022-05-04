import { getColonies, getGovernors, getColonyMinerals, getMinerals, getTransientState } from "./database.js"

let colonies = getColonies()
let governors = getGovernors()


export const colonyHTML = () => { 
    let html = ''
    let transientState = getTransientState()
    if (typeof transientState.colonyName === 'undefined') {
        html += `<div class="colony-name">Colony Minerals</div>`
    } else {
        html += `<div class="colony-name">${transientState.colonyName} Minerals</div>`
    }
    return html
}





//if governors.id === transientstate.governorId (populated by choosing governor)
//display the colony name (governor.colonyid ==== colony.id, display colony.name)

