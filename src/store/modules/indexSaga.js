import { all, spawn } from 'redux-saga/effects';
import users from './Users/UserSagas';
import { startWatchingNetworkConnectivity } from './onlineOffline/onofSagas';
import login from './Login/LoginSagas';
import chat from './Chat/ChatSaga';
import listchat from './ListChat/ListChatSaga';
export default function* rootSaga() {
    return yield all([
        users,
        login,
        chat,
        listchat
        // adicione mais sagas
    ]);
}