import { action } from 'typesafe-actions';
import { markActionsOffline } from 'redux-offline-queue';
import { UserListState, ListTypesRequest } from '../../../config/types';
import { OFFLINE, ONLINE } from 'redux-offline-queue';
export const loadRequestUsers = () => action(ListTypesRequest.LOAD_REQUESTGETUSERS)
export const loadSuccessUsers = (data) => action(ListTypesRequest.LOAD_SUCCESS, { data })
export const loadFailureUsers = () => action(ListTypesRequest.LOAD_FAILURE)
export const addUsers = (data) => action(ListTypesRequest.LOAD_REQUESTCREATE, { data })
export const online = () => action(ONLINE);
export const offline = () => action(OFFLINE);
