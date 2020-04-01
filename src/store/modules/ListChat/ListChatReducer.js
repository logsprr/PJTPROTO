import { ListTypesRequest } from '../../../config/types';
const INITIAL_STATE = {
    loading: false,
    isLogged: false,
    isRead: false,
    error: false,
    result: []
}
export default function listChat(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ListTypesRequest.LOAD_REQUEST_LIST_CHAT:
            return { ...state, loading: true, isRead: true, result: action.payload.data };
        case ListTypesRequest.LOAD_REQUEST_CHAT_LIST_SUCCESS:
            return { ...state, loading: false, isRead: false, result: action.payload.data };
        case ListTypesRequest.LOAD_REQUEST_CHAT_LIST_FAILURE:
            return { ...state, loading: false, isRead: false, result: [], error: 'Falha na comunicação' };
        default:
            return state;
    }
}
