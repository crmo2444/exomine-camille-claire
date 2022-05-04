import { colonyHTML } from "./colony.js"
import { getGovernors, getTransientState, setGovernor, getColonies, setColony, setGovernorName } from "./database.js"

const governors = getGovernors()
const colonies = getColonies()


export const governorHTML = () => {
    let html = `Choose a governor: `
    html += `<select name="governor">
    <option value="0">Choose one... </option> `
    
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
            let transientState = getTransientState()
            //find governorObject
            const foundGovernor = governors.find((governor)=> {
                return governor.id === transientState.governorId
            })
            //find the colony whose pk matches governor fk
            const foundColony = colonies.find((colony)=> {
                return colony.id === foundGovernor.colonyId
            })
            setColony(foundColony.name)
            transientState = getTransientState()
            
        }
    }
    )
    
export const governorHTMLTwo = () => {
    let state = getTransientState()
    let html = `Choose a governor: `
    html += `<select name="governor">`

    for (let governor of governors){
        if (governor.id === state.governorId)
        {
            html += `<option value="0">${governor.name}</option> `
        }
    }
        
    const listGovernors = governors.map((governor) => {
            return `<option value="${governor.id}">${governor.name}</option>`
    })
    html += listGovernors.join("")
    html += '</select>'
        return html
    }
