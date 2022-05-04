import { getColonies, getGovernors, getColonyMinerals, getMinerals, getTransientState } from "./database.js"

let colonies = getColonies()
let governors = getGovernors()


export const colonyHTML = (state) => { 
    let html = ''
    let transientState = getTransientState()
    if (typeof transientState.colonyName === 'undefined') {
        html += `Colony Minerals`
    } else {
        html += `${transientState.colonyName} Minerals`
    }
    return html
}





//if governors.id === transientstate.governorId (populated by choosing governor)
//display the colony name (governor.colonyid ==== colony.id, display colony.name)

