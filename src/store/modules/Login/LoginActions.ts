import { action } from 'typesafe-actions';
import { ListTypesRequest } from '../../../config/types';
export const loadRequestLogin = (email, password) => action(ListTypesRequest.LOAD_LOGIN, { email, password })
export const loadSuccessLogin = (data) => action(ListTypesRequest.LOAD_SUCCESS_LOGIN, { data })
export const loadFailureLogin = () => action(ListTypesRequest.LOAD_FAILURE_LOGIN)

