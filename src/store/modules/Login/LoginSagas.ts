import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { ListTypesRequest } from '../../../config/types';
import { loadFailureLogin, loadSuccessLogin } from './LoginActions';
import { loadSuccessUsers } from '../Users/UserActions';
export function* loadLogin(action) {
    console.log("to aqui")
    const response = yield call(api.post, 'user/authenticate', action.payload);
    console.log(response);
    console.log("to aqui 2")
    if (response.data.status == true) {
        console.log("to aqui 3")
        yield put(loadSuccessUsers(response.data));
        yield put(loadSuccessLogin(response.data));
    } else {
        console.log("to aqui 4")
        yield put(loadFailureLogin())
    }

}

export default all([takeLatest(ListTypesRequest.LOAD_LOGIN, loadLogin)]);