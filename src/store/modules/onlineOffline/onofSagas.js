import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { ListTypesRequest } from '../../../config/types';

export function* Add() { }


export default all([takeLatest('@requestNetwork', Add)]);