import { combineReducers } from 'redux';
import drawerReducer from './reducers/drawer-reducer';

const MyStore = combineReducers({ drawerReducer })

export default MyStore