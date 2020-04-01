import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { ListTypesRequest } from '../../../config/types';
import {
    loadFailureLogin, loadSuccessLogin, loadSuccessResetPassword,
    loadFailureResetPassword, loadSuccessCodeSuccess, loadFailureCodeFailure,
    loadSuccessCreateUser, loadFailureCreateUser
} from './LoginActions';
import { loadSuccessUsers } from '../Users/UserActions';
import firebase from 'firebase'
import { Alert } from 'react-native';
import NavigationService from '../../../routes/RootNavigation';


export function* loadLogin(action) {
    try {
        const response = yield call(api.post, 'user/authenticate', action.payload);
        if (response.data.status == true) {
            yield put(loadSuccessLogin(response.data.data));
            NavigationService('Message');
        } else {
            yield put(loadFailureLogin());
            Alert.alert("Falha ao logar");
        }
    } catch (error) {
        yield put(loadFailureLogin());
        Alert.alert("Falha ao logar");
    }
}

export function* sendCode(action) {
    try {

        const response = yield call(api.post, 'user/sendcode', action.payload);

        if (response.data.status == true) {
            yield put(loadSuccessCodeSuccess(response.data.email));
            NavigationService('ResetPassword');
        } else {
            yield put(loadFailureCodeFailure())
            Alert.alert("Código não enviado");
        }
    } catch (error) {
        yield put(loadFailureCodeFailure())
        Alert.alert("Código não enviado");
    }
}
export function* resetPassWord(action) {
    try {

        const response = yield call(api.post, 'user/resetpassword', action.payload);

        if (response.data.status == true) {
            yield put(loadSuccessResetPassword());
            NavigationService('ResetSuccess');
        } else {
            yield put(loadFailureResetPassword());
            Alert.alert("Falha ao recriar senha");
        }
    } catch (error) {
        yield put(loadFailureResetPassword());
        Alert.alert("Falha ao recriar senha");
    }
}
export function* createUser(action) {
    try {

        const response = yield call(api.post, 'user/create', action.payload);

        if (response.data.status == true) {
            yield put(loadSuccessCreateUser(response.data.data));
            NavigationService('ResetSuccess');
        } else {
            yield put(loadFailureCreateUser());
            Alert.alert("Falha ao se cadastrar");
        }
    } catch (error) {
        yield put(loadFailureCreateUser());
        Alert.alert("Falha ao se cadastrar");
    }
}

export default all([
    takeLatest(ListTypesRequest.LOAD_LOGIN, loadLogin),
    takeLatest(ListTypesRequest.LOAD_REQUEST_PASS, resetPassWord),
    takeLatest(ListTypesRequest.LOAD_CODE, sendCode),
    takeLatest(ListTypesRequest.LOAD_REQUEST_CREATE_USER, createUser)
]);