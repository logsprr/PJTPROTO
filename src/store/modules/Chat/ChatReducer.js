import { ListTypesRequest } from '../../../config/types';
const INITIAL_STATE = {
    loading: false,
    isLogged: false,
    isRead: false,
    error: false,
    result: []
}
export default function chat(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ListTypesRequest.LOAD_REQUEST_CHAT:
            return {
                ...state, loading: true, isRead: true, result: action.payload.data
            };
        // case ListTypesRequest.LOAD_REQUEST_CHAT_UPDATE:
        //     return {
        //         ...state, loading: true, isRead: true, result: {
        //             ...state.result,
        //             [state.result[action.payload.id].result]: action.payload.data,
        //         }
        //     };
        case ListTypesRequest.LOAD_REQUEST_CHAT_SUCCESS:
            return { ...state, loading: false, isRead: false, result: action.payload.data };
        case ListTypesRequest.LOAD_REQUEST_CHAT:
            return { ...state, loading: false, isRead: false, result: [], error: 'Falha na comunicação' };
        default:
            return state;
    }
}


