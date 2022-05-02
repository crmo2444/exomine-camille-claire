import { getGovernors } from "./database.js"

const governors = getGovernors()


export const governorHTML = () => {
    let html = '<select>'

    const listGovernors = governors.map((governor) => {
        return `<option id=governor--${governor.id}>${governor.name}</option>`
    })
    html += listGovernors.join("")
    html += '</select>'
    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("governor")) {
            const [, governorId] = itemClicked.id.split("--")
            for (const governor of governors) {
                if (governor.id = parseInt(governorId)) {
                    let newGovernorId = governor.colonyId
                    colonyHTML(newGovernorId)
                }
            }
        }
    }
)