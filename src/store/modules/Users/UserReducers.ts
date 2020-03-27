import { Reducer } from 'redux';

import { UserListState, ListTypesRequest, User } from '../../../config/types';
const INITIAL_STATE: UserListState = {
    data: [],
    error: false,
    message: 'normal',
    loading: false
};


export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ListTypesRequest.LOAD_REQUESTGETUSERS:
            return { ...state, loading: true };
        case ListTypesRequest.LOAD_SUCCESS:
            return { ...state, data: action.payload.data, message: 'Carregou', error: false, loading: false };
        case ListTypesRequest.LOAD_REQUESTCREATE:

            return { ...state, data: action.payload.data, message: 'Carregou', error: false, loading: false };
        case ListTypesRequest.LOAD_FAILURE:
            return { ...state, loading: false, message: 'Error', error: true }
        default:
            return state;
    }
}
