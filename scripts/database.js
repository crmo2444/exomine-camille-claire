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
    //shows inventory quanitity of minerals per colony
    colonyMinerals: [
        { id: 1, colonyId: 1, mineralId: 1, quantity: 0 },
        { id: 2, colonyId: 1, mineralId: 2, quantity: 0 },
        { id: 3, colonyId: 1, mineralId: 3, quantity: 0 },
        { id: 4, colonyId: 1, mineralId: 4, quantity: 0 },
        { id: 5, colonyId: 2, mineralId: 1, quantity: 0 },
        { id: 6, colonyId: 2, mineralId: 2, quantity: 0 },
        { id: 7, colonyId: 2, mineralId: 3, quantity: 0 },
        { id: 8, colonyId: 2, mineralId: 4, quantity: 0 },
        { id: 9, colonyId: 3, mineralId: 1, quantity: 0 },
        { id: 10, colonyId: 3, mineralId: 2, quantity: 0 },
        { id: 11, colonyId: 3, mineralId: 3, quantity: 0 },
        { id: 12, colonyId: 3, mineralId: 4, quantity: 0 },
        { id: 13, colonyId: 4, mineralId: 1, quantity: 0 },
        { id: 14, colonyId: 4, mineralId: 2, quantity: 0 },
        { id: 15, colonyId: 4, mineralId: 3, quantity: 0 },
        { id: 16, colonyId: 4, mineralId: 4, quantity: 0 },
        { id: 17, colonyId: 5, mineralId: 1, quantity: 0 },
        { id: 18, colonyId: 5, mineralId: 2, quantity: 0 },
        { id: 19, colonyId: 5, mineralId: 3, quantity: 0 },
        { id: 20, colonyId: 5, mineralId: 4, quantity: 0 },
    ],
    //shows stock quantity of minerals per facility
    mineralFacilities: [
        { id: 1, facilityId: 1, mineralId: 1, quantity: 4 },
        { id: 2, facilityId: 1, mineralId: 2, quantity: 2 },
        { id: 3, facilityId: 1, mineralId: 3, quantity: 10 },
        { id: 4, facilityId: 1, mineralId: 4, quantity: 6 },
        { id: 5, facilityId: 2, mineralId: 1, quantity: 0 },
        { id: 6, facilityId: 2, mineralId: 2, quantity: 11 },
        { id: 7, facilityId: 2, mineralId: 3, quantity: 3 },
        { id: 8, facilityId: 2, mineralId: 4, quantity: 9 },
        { id: 9, facilityId: 3, mineralId: 1, quantity: 8 },
        { id: 10, facilityId: 3, mineralId: 2, quantity: 0 },
        { id: 11, facilityId: 3, mineralId: 3, quantity: 1 },
        { id: 12, facilityId: 3, mineralId: 4, quantity: 4 },
        { id: 13, facilityId: 4, mineralId: 1, quantity: 6 },
        { id: 14, facilityId: 4, mineralId: 2, quantity: 5 },
        { id: 15, facilityId: 4, mineralId: 3, quantity: 12 },
        { id: 16, facilityId: 4, mineralId: 4, quantity: 1 },
        { id: 17, facilityId: 5, mineralId: 1, quantity: 4 },
        { id: 18, facilityId: 5, mineralId: 2, quantity: 7 },
        { id: 19, facilityId: 5, mineralId: 3, quantity: 0 },
        { id: 20, facilityId: 5, mineralId: 4, quantity: 0 },
    ],
    governorOrder: {},
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setGovernor = (id) => {
    database.transientState.governorId = id
    document.dispatchEvent( new CustomEvent("stateChanged"))
}

export const purchaseMineral = () => {
        // Copy the current state of user choices
        const newOrder = {...database.transientState}
    
        // Add a new primary key to the object
        if (database.governorOrder.length === 0) {
            newOrder.id = 1
        }
        else {
        const lastIndex = database.governorOrder.length - 1
        newOrder.id = database.governorOrder[lastIndex].id + 1
        }
    
        // Add a timestamp to the order
        newOrder.timestamp = Date.now()
    
        // Add the new order object to custom orders state
        database.governorOrder.push(newOrder)
    
        // Reset the temporary state for user choices
        database.transientState = {}

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}


export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}

export const getMiningFacilities = () => {
    return database.miningFacilities.map(miningFacility => ({...miningFacility}))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}

export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}

export const getMineralFacilities = () => {
    return database.mineralFacilities.map(mineralFacility => ({...mineralFacility}))
}

export const getTransientState = () => {
    return database.governorOrder.map(governorOrder => ({...governorOrder}))
}