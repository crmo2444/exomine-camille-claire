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
        }
    }
)

export const facilityHTML = () => {
    let state = getTransientState()
    let html = `Choose a facility: `
    html += '<select name="facility">'

    if (typeof state.governorId === "undefined") {
        html += '<option value="0">Please pick a governor...</option>'
    }

    else if (typeof state.facilityName === 'undefined') {
        html += '<option value="0">Choose one...</option>'

        const listFacilities = facilities.map((facility) => {
            if (facility.status === "active") {
                return `<option value="${facility.id}">${facility.name}</option>`
            }
        })
        html += listFacilities.join("")
    } else {

        const foundFacility = facilities.find((facility) => {
            return facility.id === state.facilityId
        })
        html += `<option value="0">${foundFacility.name}</option>`

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
