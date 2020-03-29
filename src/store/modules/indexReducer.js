import { combineReducers } from "redux";
import { reducer as offline } from 'redux-offline-queue';
import users from './Users/UserReducers';
import login from './Login/LoginReducers';
export default combineReducers({
    offline,
    users,
    login
});