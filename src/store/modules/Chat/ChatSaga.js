import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { ListTypesRequest } from '../../../config/types';
import { loadFailureChat, loadSuccessChat } from './ChatAction';
import firebase from 'firebase'
import { Alert } from 'react-native';
import NavigationService from '../../../routes/RootNavigation';


export function* loadChat(action) {
    yield put(loadSuccessChat(action.payload.data))
}

export default all([
]);