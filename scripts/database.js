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
        {
            id: 1,
            name: "Earth"
        },
        {
            id: 2,
            name: "Mars"
        },
        {
            id: 3,
            name: "Venus"
        },
        {
            id: 4,
            name: "Jupiter"
        },
        {
            id: 5,
            name: "Saturn"
        }
    ],
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
}
