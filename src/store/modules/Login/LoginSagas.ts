import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { ListTypesRequest } from '../../../config/types';
import {
    loadFailureLogin, loadSuccessLogin, loadSuccessResetPassword,
    loadFailureResetPassword, loadSuccessCodeSuccess, loadFailureCodeFailure
} from './LoginActions';
import { loadSuccessUsers } from '../Users/UserActions';
import firebase from 'firebase'
import { Alert } from 'react-native';
import NavigationService from '../../../routes/RootNavigation';


export function* loadLogin(action) {
    try {
        const response = yield call(api.post, 'user/authenticate', action.payload);
        if (response.data.status == true) {
            yield put(loadSuccessLogin(response.data));
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
        console.log(action.payload)
        const response = yield call(api.post, 'user/sendcode', action.payload);
        console.log(response);
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
        console.log(action.payload)
        const response = yield call(api.post, 'user/resetpassword', action.payload);
        console.log(response);
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

export default all([
    takeLatest(ListTypesRequest.LOAD_LOGIN, loadLogin),
    takeLatest(ListTypesRequest.LOAD_REQUEST_PASS, resetPassWord),
    takeLatest(ListTypesRequest.LOAD_CODE, sendCode)
]);