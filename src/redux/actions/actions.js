import { GET_VODKA_DRINKS, GET_DRINK_BY_ID, GET_ALL_DRINKS_AL } from '../constants/constats';

export const getAllAlcolicDrinks = () => ({
    type: GET_ALL_DRINKS_AL,
});

export const getVodkaDrinks = () => ({
    type: GET_VODKA_DRINKS,
});

export const getDrinkDescription = (value) => ({
    type: GET_DRINK_BY_ID, drinkId: value
});
