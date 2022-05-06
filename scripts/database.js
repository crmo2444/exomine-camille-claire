import { mineralColonyQuantities, mineralFacilityQuantities, spaceCart } from "./facilityMineralsList.js"

const database = {
    governors: [
        { id: 1, name: "Bob Jones", status: "active", colonyId: 1 },
        { id: 2, name: "Erika Greer", status: "active", colonyId: 2 },
        { id: 3, name: "Alice Edwards", status: "inactive", colonyId: 3 },
        { id: 4, name: "Tobey Burch", status: "active", colonyId: 4 },
        { id: 5, name: "Maryam Chapman", status: "inactive", colonyId: 5 },
        { id: 6, name: "Carlton Conley", status: "active", colonyId: 1 },
        { id: 7, name: "Grover Stanton", status: "active", colonyId: 2 },
        { id: 8, name: "Danielle Fowler", status: "active", colonyId: 3 },
        { id: 9, name: "Jared Soto", status: "inactive", colonyId: 4 },
        { id: 10, name: "Jody Floyd", status: "active", colonyId: 5 }
    ],
    colonies: [
        { id: 1, name: "Earth" },
        { id: 2, name: "Mars" },
        { id: 3, name: "Venus" },
        { id: 4, name: "Jupiter" },
        { id: 5, name: "Saturn" }
    ],
    miningFacilities: [
        { id: 1, name: "Lucent", status: "inactive" },
        { id: 2, name: "Visage", status: "active" },
        { id: 3, name: "Reverie", status: "active" },
        { id: 4, name: "Lumina", status: "active" },
        { id: 5, name: "Ark", status: "active" },
    ],
    minerals: [
        { id: 1, name: "Diamond" },
        { id: 2, name: "Emerald" },
        { id: 3, name: "Sapphire" },
        { id: 4, name: "Quartz" },
    ],
    //shows inventory quantity of minerals per colony
    colonyMinerals: [
        { id: 1, colonyId: 1, mineralId: 1, quantity: 0 },
        { id: 2, colonyId: 1, mineralId: 2, quantity: 3 },
        { id: 3, colonyId: 1, mineralId: 3, quantity: 1 },
        { id: 4, colonyId: 1, mineralId: 4, quantity: 8 },
        { id: 5, colonyId: 2, mineralId: 1, quantity: 2 },
        { id: 6, colonyId: 2, mineralId: 2, quantity: 7 },
        { id: 7, colonyId: 2, mineralId: 3, quantity: 0 },
        { id: 8, colonyId: 2, mineralId: 4, quantity: 7 },
        { id: 9, colonyId: 3, mineralId: 1, quantity: 4 },
        { id: 10, colonyId: 3, mineralId: 2, quantity: 1 },
        { id: 11, colonyId: 3, mineralId: 3, quantity: 1 },
        { id: 12, colonyId: 3, mineralId: 4, quantity: 0 },
        { id: 13, colonyId: 4, mineralId: 1, quantity: 6 },
        { id: 14, colonyId: 4, mineralId: 2, quantity: 0 },
        { id: 15, colonyId: 4, mineralId: 3, quantity: 3 },
        { id: 16, colonyId: 4, mineralId: 4, quantity: 5 },
        { id: 17, colonyId: 5, mineralId: 1, quantity: 0 },
        { id: 18, colonyId: 5, mineralId: 2, quantity: 6 },
        { id: 19, colonyId: 5, mineralId: 3, quantity: 3 },
        { id: 20, colonyId: 5, mineralId: 4, quantity: 4 },
    ],
    //shows stock quantity of minerals per facility
    mineralFacilities: [
        { id: 1, facilityId: 1, mineralId: 1, quantity: 4 },
        { id: 2, facilityId: 2, mineralId: 2, quantity: 11 },
        { id: 3, facilityId: 3, mineralId: 3, quantity: 7 },
        { id: 4, facilityId: 4, mineralId: 4, quantity: 5 },
        { id: 5, facilityId: 5, mineralId: 1, quantity: 4 },
    ],
    //customOrder: [],
    transientState: { chosenMinerals: new Set(), chosenFacilities: new Set() } //not just one mineral
}

export const setFacility = (id) => {
    database.transientState.facilityId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFacilityName = (name) => {
    database.transientState.facilityName = name
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setFacilitySet = (name) => {
    database.transientState.chosenFacilities.add(name)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setColony = (name) => {
    database.transientState.colonyName = name
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setColonyId = (id) => {
    database.transientState.colonyId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setGovernor = (id) => {
    database.transientState.governorId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setMineralId = (id) => {
    database.transientState.mineralId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setMineralName = (name) => {
    database.transientState.mineralName = name
    database.transientState.chosenMinerals.add(name)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setCustomOrderObj = (obj) => {
    database.transientState.customOrderObj = obj
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


export const purchaseFeature = () => {
    let state = getTransientState()
    let mineralFacilities = database.mineralFacilities
    let colonyMinerals = database.colonyMinerals
    let newMineralFacilities = mineralFacilityQuantities()
    let newMineralColonies = mineralColonyQuantities()



    // ${filterColonyMineral.map(colonyMineralObj => {
    //     if (colonyMineralObj.quantity !== 0) {
    //         const foundMineral = minerals.find((mineral) => {
    //             return mineral.id === colonyMineralObj.mineralId
    //         })
    //         return `<li class="mineral-list">${colonyMineralObj.quantity} tons of ${foundMineral.name}</li>`
    //     }


    // for (let newMineralFacility of newMineralFacilities) {
    //     for (let mineralFacility of mineralFacilities) {
    //         if (newMineralFacility.facilityId === mineralFacility.facilityId && newMineralFacility.mineralId === mineralFacility.mineralId) {
    //             mineralFacility.quantity = newMineralFacility.quantity
    //         }
    //     }
    // }

    newMineralFacilities.map(newMineralFacility => {
        mineralFacilities.find((mineralFacility) => {
            return newMineralFacility.facilityId === mineralFacility.facilityId && newMineralFacility.mineralId === mineralFacility.mineralId
        })
        mineralFacility.quantity = newMineralFacility.quantity
    })

    newMineralColonies.map(newMineralColony => {
        colonyMinerals.find((colonyMineral) => {
            return newMineralColony.facilityId === colonyMineral.facilityId && newMineralColony.mineralId === colonyMineral.mineralId
        })
        colonyMineral.quantity = newMineralColony.quantity
    })

    // for (let newMineralColony of newMineralColonies) {
    //     for (let colonyMineral of colonyMinerals) {
    //         if (newMineralColony.facilityId === colonyMineral.facilityId && newMineralColony.mineralId === colonyMineral.mineralId) {
    //             colonyMineral.quantity = newMineralColony.quantity
    //         }
    //     }
    // }
    spaceCart("")
}



export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

export const getMiningFacilities = () => {
    return database.miningFacilities.map(miningFacility => ({ ...miningFacility }))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({ ...colonyMineral }))
}

export const getMineralFacilities = () => {
    return database.mineralFacilities.map(mineralFacility => ({ ...mineralFacility }))
}

export const getTransientState = () => {
    return { ...database.transientState }
}