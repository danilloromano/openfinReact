import { DRAWER_STATE, GET_NEWS } from '../constants/constats';

export const updateDrawerState = (value) => {
    return { type: DRAWER_STATE, drawerState: value }
};

export const getNews = () => ({
    type: GET_NEWS,
});