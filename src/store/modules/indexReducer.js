import { combineReducers } from "redux";
import { reducer as offline } from 'redux-offline-queue';
import users from './Users/UserReducers';
import login from './Login/LoginReducers';
import chat from './Chat/ChatReducer';
import listChat from "./ListChat/ListChatReducer";
export default combineReducers({
    offline,
    users,
    login,
    chat,
    listChat
});