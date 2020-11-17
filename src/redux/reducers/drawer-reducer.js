import { DRAWER_STATE } from '../constants/constats'
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({ drawerState: false })

const drawerReducer = ( state = INITIAL_STATE, action ) => {
    const { type, drawerState } = action
    switch (type) {
        case DRAWER_STATE:
            return state.setIn(['drawerState'], fromJS(drawerState));
        default:
            return state
    }
}

export default drawerReducer;