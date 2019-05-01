import { combineReducers } from 'redux';
import artistInfoReducer from './Reducer/artistInfoReducer';
export default combineReducers({ artistInfo: artistInfoReducer });
