import { combineReducers } from "redux";
import { reducer as offline } from 'redux-offline-queue';
import users from './Users/UserReducers';

export default combineReducers({
    offline,
    users
});