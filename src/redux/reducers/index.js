import { DRAWER_STATE, GET_VODKA_DRINKS, VODKA_DRINKS_RECEIVED } from '../constants/constats'

const INITIAL_STATE = { drawerState: false, loading: false }

const reducers = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case DRAWER_STATE:
            return  { ...state, drawerState: action.drawerState };
        case GET_VODKA_DRINKS:
            return { ...state, loading: true };
        case VODKA_DRINKS_RECEIVED:
            return { ...state, vodkaDrinks: action.json, loading: false };
        default:
            return state
    }
}

export default reducers;