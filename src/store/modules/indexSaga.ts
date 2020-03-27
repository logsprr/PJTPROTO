import { all, spawn } from 'redux-saga/effects';

import users from './Users/UserSagas';
import onof from './onlineOffline/onofSagas';
export default function* rootSaga() {
    return yield all([
        users,
        onof
        // adicione mais sagas
    ]);
}