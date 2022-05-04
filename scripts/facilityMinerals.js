import { getMiningFacilities, getTransientState } from "./database.js"

let facilities = getMiningFacilities()


export const miningHTML = () => { 
    let html = ''
    let transientState = getTransientState()
    if (typeof transientState.facilityName === 'undefined') {
        html += `<h2 name="facilitybox">Facility Minerals</h2>`
    } else {
        html += `<h2 name="facilitybox">Facility Minerals for ${transientState.facilityName}</h2>`
    }
    return html
}
