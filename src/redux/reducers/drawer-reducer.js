import { DRAWER_STATE } from '../constants/constats'

const INITIAL_STATE = { drawerState: false }

const drawerReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case DRAWER_STATE:
            return  { ...state, drawerState: action.drawerState };
        default:
            return state
    }
}

export default drawerReducer;