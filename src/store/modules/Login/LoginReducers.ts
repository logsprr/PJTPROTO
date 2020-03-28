import { ListTypesRequest } from '../../../config/types';
const INITIAL_STATE = [];
export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ListTypesRequest.LOAD_LOGIN:
            return { ...state, loading: true, isRead: true };
        case ListTypesRequest.LOAD_SUCCESS_LOGIN:
            return { ...state, login: action.payload.data.status, isRead: false, message: 'Logado com sucesso', token: action.payload.data.token, error: false, loading: false };
        case ListTypesRequest.LOAD_FAILURE_LOGIN:
            return { ...state, loading: false, message: 'Erro no login', isRead: false, error: true }
        case ListTypesRequest.LOAD_CODE:
            return { ...state, loading: true, resetCode: null, isRead: true };
        case ListTypesRequest.LOAD_CODE_SUCCESS:
            return { ...state, email: action.payload.data, loading: false, resetCode: true, isRead: false, message: 'Código enviado com sucesso' };
        case ListTypesRequest.LOAD_CODE_FAILURE:
            return { ...state, loading: false, resetCode: false, isRead: false, message: 'Código não enviado', error: true };
        case ListTypesRequest.LOAD_REQUEST_PASS:
            return { ...state, loading: true, resetPass: null, isRead: true };
        case ListTypesRequest.LOAD_REQUEST_PASS_SUCCESS:
            return { ...state, loading: false, resetPass: true, isRead: false, message: 'Senha resetada com sucesso' };
        case ListTypesRequest.LOAD_REQUEST_PASS_FAILURE:
            return { ...state, loading: false, resetPass: false, isRead: false, message: 'Erro ao resetar senha', error: true };
        default:
            return state;
    }
}
