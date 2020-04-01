import { action } from 'typesafe-actions';
import { markActionsOffline } from 'redux-offline-queue';
import { ListTypesRequest } from '../../../config/types';
//login

export const loadRequestChat = (data) => action(ListTypesRequest.LOAD_REQUEST_CHAT, { data });
export const loadRequestChatUpdate = (id, data) => action(ListTypesRequest.LOAD_REQUEST_CHAT_UPDATE, { id, data });
export const loadSuccessChat = (data) => action(ListTypesRequest.LOAD_REQUEST_CHAT_SUCCESS, { data });
export const loadFailureChat = () => action(ListTypesRequest.LOAD_REQUEST_CHAT_FAILURE)

// markActionsOffline(Creators, ['loadRequestChat'])