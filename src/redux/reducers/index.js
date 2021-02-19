import { DRAWER_STATE, GET_NEWS, NEWS_RECEIVED } from '../constants/constats'

const INITIAL_STATE = { drawerState: false, loading: false, news: {} }

const reducers = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case DRAWER_STATE:
            return  { ...state, drawerState: action.drawerState };
        case GET_NEWS:
            return { ...state, loading: true };
        case NEWS_RECEIVED:
            return { ...state, news: action.json[0], loading: false };
        default:
            return state
    }
}

export default reducers;