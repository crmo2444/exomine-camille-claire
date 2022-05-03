import { getGovernors, setGovernor } from "./database.js"

const governors = getGovernors()


export const governorHTML = () => {
    let html = `Choose a governor: `
    html += '<select name="governor">'

    const listGovernors = governors.map((governor) => {
        return `<option value="${governor.id}">${governor.name}</option>`
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