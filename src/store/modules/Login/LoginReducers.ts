import { ListTypesRequest } from '../../../config/types';
const INITIAL_STATE = [];
export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ListTypesRequest.LOAD_LOGIN:
            return { ...state, loading: true, };
        case ListTypesRequest.LOAD_SUCCESS_LOGIN:
            return { ...state, login: action.payload.data.status, message: 'Logado com sucesso', token: action.payload.data.token, error: false, loading: false };
        case ListTypesRequest.LOAD_FAILURE_LOGIN:
            return { ...state, loading: false, message: 'Erro no login', error: true }
        default:
            return state;
    }
}
