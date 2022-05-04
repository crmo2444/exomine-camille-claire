import { getMiningFacilities, setFacility, getTransientState, setFacilityName } from "./database.js"


const facilities = getMiningFacilities()


export const facilityHTML = () => {
    let html = `Choose a facility: `
    html += '<select name="facility">'

    const listFacilities = facilities.map((facility) => {
        return `<option value="${facility.id}">${facility.name}</option>`
    })
    html += listFacilities.join("")
    html += '</select>'
    return html
}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setFacility(parseInt(event.target.value))
            let transientState = getTransientState()
            const foundFacility = facilities.find((facility)=> {
                return facility.id === transientState.facilityId
            })
            setFacilityName(foundFacility.name)
            transientState = getTransientState()
        }
    }
)

export const facilityHTMLTwo = () => {
    let state = getTransientState()
    let html = `Choose a facility: `
    html += `<select name="facility">`

    for (let facility of facilities){
        if (facility.id === state.facilityId)
        {
            html += `<option value="0">${facility.name}</option> `
        }
    }
        
    const listfacilities = facilities.map((facility) => {
            return `<option value="${facility.id}" name="${facility.name}">${facility.name}</option>`
    })
    html += listfacilities.join("")
    html += '</select>'
        return html
    }
