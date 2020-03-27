import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { ListTypesRequest } from '../../../config/types';
import startWatchingNetworkConnectivity from '../../../services/onof';
import { loadSuccessUsers, loadRequestUsers, loadFailureUsers, addUsers } from './UserActions';
import { online, offline } from '../onlineOffline/onofActions';
export function* load() {
    let net: boolean;
    startWatchingNetworkConnectivity().then(res => {
        net = res
    });
    setTimeout(() => { return })
    if (net) {
        const response = yield call(api.get, '/users/logsprr/followers');
        yield put(loadSuccessUsers(response.data));
        yield put(online(response.data));
    } else {
        yield put(loadFailureUsers())
        yield put(offline(net));
    }

}

export default all([takeLatest(ListTypesRequest.LOAD_REQUESTGETUSERS, load)]);