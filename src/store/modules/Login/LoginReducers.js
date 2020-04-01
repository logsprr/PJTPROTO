import { ListTypesRequest } from '../../../config/types';
const INITIAL_STATE = {
    loading: false,
    isLogged: false,
    isRead: false,
    error: false,
    result: []
}
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ListTypesRequest.LOAD_LOGIN:
            return { ...state, loading: true, isRead: true };
        case ListTypesRequest.LOAD_SUCCESS_LOGIN:
            return { ...state, result: action.payload.data, isRead: false, message: 'Logado com sucesso', token: action.payload.data.token, error: false, loading: false, isLogged: true };
        case ListTypesRequest.LOAD_FAILURE_LOGIN:
            return { ...state, loading: false, message: 'Erro no login', isRead: false, error: true, isLogged: false }
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
        case ListTypesRequest.LOAD_REQUEST_CREATE_USER:
            return { ...state, loading: true, isRead: true };
        case ListTypesRequest.LOAD_REQUEST_CREATE_SUCCESS:
            return { ...state, loading: false, isRead: false, message: 'Usuário criado com sucesso', result: action.payload.data };
        case ListTypesRequest.LOAD_REQUEST_CREATE_FAILURE:
            return { ...state, loading: false, isRead: false, message: 'Não foi possivel criar o usuário', error: true };
        default:
            return state;
    }
}
