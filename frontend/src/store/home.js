import csrfFetch from './csrf';

export const RECEIVE_HOMES = 'homes/RECEIVE_HOMES'
export const RECEIVE_HOME = 'homes/RECEIVE_HOME'

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

export const getHomes = state => {
    return state.homes ? Object.values(state.homes) : []
}

export const getHome = homeId => state => {
    return state.homes ? state.homes[homeId] : null
}



export const  fetchHomes = () => async dispatch =>{
    const response = await csrfFetch('/api/homes')

    if(response.ok){
        const homes = await response.json()
        dispatch(loadAll(homes))
    }
}
export const  fetchHome = (homeId) => async dispatch =>{
    const response = await csrfFetch(`/api/homes/${homeId}`)
    if(response.ok){
        const home = await response.json()
        dispatch(load(home))
    }
}

const homesReducer = (state={}, action)=>{
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_HOMES:
            return {...action.homes}
        case RECEIVE_HOME:
            nextState[action.home.id] = action.home
            return nextState
        default:
            return state
    }
}

export default homesReducer