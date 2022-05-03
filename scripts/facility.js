import { getMiningFacilities, setFacility } from "./database.js"


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
        }
    }
)