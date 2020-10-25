import { DRAWER_STATE } from '../constants/constats';

export const updateDrawerState = (value) => {
    return { type: DRAWER_STATE, drawerState: value }
};
