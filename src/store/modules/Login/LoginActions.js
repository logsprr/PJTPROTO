import { action } from 'typesafe-actions';
import { ListTypesRequest } from '../../../config/types';
//login
export const loadRequestLogin = (email, password) => action(ListTypesRequest.LOAD_LOGIN, { email, password })
export const loadSuccessLogin = (data) => action(ListTypesRequest.LOAD_SUCCESS_LOGIN, { data })
export const loadFailureLogin = () => action(ListTypesRequest.LOAD_FAILURE_LOGIN)

//sendCode
export const loadRequestCode = (email) => action(ListTypesRequest.LOAD_CODE, { email })
export const loadSuccessCodeSuccess = (data) => action(ListTypesRequest.LOAD_CODE_SUCCESS, { data })
export const loadFailureCodeFailure = () => action(ListTypesRequest.LOAD_CODE_FAILURE)

//resetPass
export const loadRequestResetPassword = (password, code, email) => action(ListTypesRequest.LOAD_REQUEST_PASS, { password, code, email })
export const loadSuccessResetPassword = () => action(ListTypesRequest.LOAD_REQUEST_PASS_SUCCESS)
export const loadFailureResetPassword = () => action(ListTypesRequest.LOAD_REQUEST_PASS_FAILURE)

//create
export const loadRequestCreateUser = (password, idEnterprise, email, name, phone) => action(ListTypesRequest.LOAD_REQUEST_CREATE_USER, { password, idEnterprise, email, name, phone })
export const loadSuccessCreateUser = (data) => action(ListTypesRequest.LOAD_REQUEST_CREATE_SUCCESS, { data })
export const loadFailureCreateUser = () => action(ListTypesRequest.LOAD_REQUEST_CREATE_FAILURE)