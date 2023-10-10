
export const RECEIVE_HOMES = 'homes/RECEIVE_HOMES'
export const RECEIVE_HOME = 'homes/RECEIVE_HOMES'

const loadAll = (homes) =>{
    return({
        type: RECEIVE_HOMES,
        homes
    })
}

const load = (home) =>{
    return ({
        type: RECEIVE_HOME,
        home
    })
}

export const gethomes = state => {
    return state.homes ? Object.values(state.homes) : []
}

export const getHome = homeId => state => {
    return state.homes ? state.homes[homeId] : null
}

