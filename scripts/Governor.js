import { getGovernors } from "./database.js"
import { colonyHTML } from "./colony.js"

const governors = getGovernors()


export const governorHTML = () => {
    let html = `Choose a governor: `
    html += '<select name="governor" value="${governor.id}">'

    const listGovernors = governors.map((governor) => {
        return `<option>${governor.name}</option>`
    })
    html += listGovernors.join("")
    html += '</select>'
    return html
}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governor") {
            setGovernor(parseInt(event.target.value))
        }
    }
)