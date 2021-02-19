import { DRAWER_STATE, GET_VODKA_DRINKS } from '../constants/constats';

export const updateDrawerState = (value) => {
    return { type: DRAWER_STATE, drawerState: value }
};

export const getVodkaDrinks = () => ({
    type: GET_VODKA_DRINKS,
});