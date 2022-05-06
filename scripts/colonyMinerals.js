import { getColonyMinerals, getMinerals, getColonies, getTransientState } from "./database.js";



export const colonyMineralsHTML = () => {
    let transientState = getTransientState()
    if (typeof transientState.colonyName === 'undefined') {
        return ''
    } else {
        let colonies = getColonies()
        let minerals = getMinerals()
        let colonyMinerals = getColonyMinerals()
        //returns an array of objects meeting the criteria (all that return true)
        const filterColonyMineral = colonyMinerals.filter(colonyMineral => colonyMineral.colonyId === transientState.colonyId)
        return `
        <ul>
        ${filterColonyMineral.map(colonyMineralObj => {
            if (colonyMineralObj.quantity !== 0) {
                const foundMineral = minerals.find((mineral) => {
                    return mineral.id === colonyMineralObj.mineralId
                })
                return `<li class="mineral-list">${colonyMineralObj.quantity} tons of ${foundMineral.name}</li>`
            }
        }).join("")}
        </ul>
        `
        /*  line 17 - map will be running the rest of the code on EVERY element from the filter in line 14
            (map will iterate the array)
            for every colonyMineralObj, if the quanitity is not 0
            find the mineral with the id that matches the colonyMineralObj.mineralId
            returns the whole object with this ^
            now return html using the colonyMineralObj.quantity and .name from the foundMineral in line 19
        */
    }
}

