import { getColonyMinerals, getMinerals, getColonies, getTransientState } from "./database.js";



export const colonyMineralsHTML = () => {
    let transientState = getTransientState()
    if (typeof transientState.colonyName === 'undefined') {
        return ''
    } else {
        let colonies = getColonies()
        let minerals = getMinerals()
        let colonyMinerals = getColonyMinerals()
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
    }
}

