import { getGovernors } from "./database.js"

const governors = getGovernors()


export const governorHTML = () => {
    let html = '<select>'

    const listGovernors = governors.map((governor) => {
        return `<option value=${governor.id}>${governor.name}</option>`
    })
    html += listGovernors.join("")
    html += '</select>'
    return html
}
