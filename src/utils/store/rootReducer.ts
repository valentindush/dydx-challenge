import {combineReducers} from 'redux';
import { roomInfoReducer } from './reducers';

export const rootReducer = combineReducers({
    roomInfo: roomInfoReducer
})