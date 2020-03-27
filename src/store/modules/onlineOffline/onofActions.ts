import { action } from 'typesafe-actions';
export const online = (data) => action('@online', data);
export const offline = (data) => action('@offline', data);


