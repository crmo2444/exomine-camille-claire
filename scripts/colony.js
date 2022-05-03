import { getColonies, getGovernors, getColonyMinerals, getMinerals, getTransientState } from "./database.js"

let colonies = getColonies()
let transientState = getTransientState()
let governors = getGovernors()


export const colonyHTML = () => { 
    let html = ``

    return html
}





//if governors.id === transientstate.governorId (populated by choosing governor)
//display the colony name (governor.colonyid ==== colony.id, display colony.name)

