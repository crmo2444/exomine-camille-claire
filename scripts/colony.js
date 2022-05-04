import { getColonies, getGovernors, getColonyMinerals, getMinerals, getTransientState } from "./database.js"

let colonies = getColonies()
let governors = getGovernors()


export const colonyHTML = () => { 
    let html = ''
    let transientState = getTransientState()
    if (typeof transientState.colonyName === 'undefined') {
        html += `<h2 name="mineralList">Colony Minerals</h2>`
    } else {
        html += `<h2 name="mineralList">${transientState.colonyName} Minerals</h2>`
    }
    return html
}





//if governors.id === transientstate.governorId (populated by choosing governor)
//display the colony name (governor.colonyid ==== colony.id, display colony.name)

