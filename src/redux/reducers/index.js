import {
    GET_VODKA_DRINKS,
    VODKA_DRINKS_RECEIVED,
    GET_DRINK_BY_ID,
    GET_DRINK_BY_ID_RECEIVED,
    GET_ALL_DRINKS_AL,
    GET_ALL_DRINKS_AL_RECEIVED,
} from '../constants/constats'

const INITIAL_STATE = { loading: false }

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_VODKA_DRINKS:
            return { ...state, loading: true };
        case VODKA_DRINKS_RECEIVED:
            return { ...state, vodkaDrinks: action.json, loading: false };

        case GET_DRINK_BY_ID:
            return { ...state, loading: true };
        case GET_DRINK_BY_ID_RECEIVED:
            return { ...state, drinkDetail: action.json, loading: false };

        case GET_ALL_DRINKS_AL:
            return { ...state, loading: true };
        case GET_ALL_DRINKS_AL_RECEIVED:
            return { ...state, allAlcolicDrinks: action.json, loading: false };

        default:
            return state
    }
}

export default reducers;