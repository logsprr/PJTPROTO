import { all, spawn } from 'redux-saga/effects';

import users from './Users/UserSagas';
import onof from './onlineOffline/onofSagas';
import login from './Login/LoginSagas';
export default function* rootSaga() {
    return yield all([
        users,
        onof,
        login
        // adicione mais sagas
    ]);
}