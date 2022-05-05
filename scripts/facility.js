import { getMiningFacilities, setFacility, getTransientState, setFacilityName } from "./database.js"


const facilities = getMiningFacilities()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setFacility(parseInt(event.target.value))
            let transientState = getTransientState()
            const foundFacility = facilities.find((facility) => {
                return facility.id === transientState.facilityId
            })
            setFacilityName(foundFacility.name)
            transientState = getTransientState()
        }
    }
)

export const facilityHTML = () => {
    let state = getTransientState()
    let html = `Choose a facility: `
    html += '<select name="facility">' 
    
    if (typeof state.colonyName === 'undefined') {
        html += '<option value="0">Choose one...</option>'

        const listFacilities = facilities.map((facility) => {
            if (facility.status === "active") {
                return `<option value="${facility.id}">${facility.name}</option>`
            }
        })
        html += listFacilities.join("")
    }
    else {
 
        for (let facility of facilities) {
            if (facility.id === state.facilityId) {
                html += `<option value="0">${facility.name}</option> `
            }
        }
        
        const listFacilities = facilities.map((facility) => {
            if (facility.status === "active") {
                return `<option value="${facility.id}">${facility.name}</option>`
            }
        })
        html += listFacilities.join("")
    }

    html += '</select>'
    return html
}
