import { purchaseMineral, getTransientState, getColonyMinerals, getMineralFacilities } from "./database.js";

let colonyMinerals = getColonyMinerals()
let mineralFacilities = getMineralFacilities()


export const purchaseFeature = () => {
    let state = getTransientState()
    console.log(state)
    for (const mineralFacility of mineralFacilities) {
        if (mineralFacility.facilityId === state.facilityId && mineralFacility.mineralId === state.mineralId) {
            mineralFacility.quantity = mineralFacility.quantity - 1
            console.log(mineralFacility.quantity)
        }
    }
    for (const colonyMineral of colonyMinerals) {
        if (colonyMineral.colonyId === state.colonyId && colonyMineral.mineralId === state.mineralId) {
            colonyMineral.quantity = colonyMineral.quantity + 1
            console.log(colonyMineral.quantity)
        }
    }
}

    //lower quantity by 1

