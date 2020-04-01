import { action } from 'typesafe-actions';
import { markActionsOffline } from 'redux-offline-queue';
import { ListTypesRequest } from '../../../config/types';
//login

export const loadRequestListChat = (data) => action(ListTypesRequest.LOAD_REQUEST_LIST_CHAT, { data });
export const loadRequestListChatUpdate = (data) => action(ListTypesRequest.LOAD_REQUEST_CHAT_LIST_UPDATE, { data });
export const loadSuccessListChat = (data) => action(ListTypesRequest.LOAD_REQUEST_CHAT_LIST_SUCCESS, { data });
export const loadFailureListChat = () => action(ListTypesRequest.LOAD_REQUEST_CHAT_LIST_FAILURE)

// markActionsOffline(Creators, ['loadRequestChat'])