import { Reducer } from 'redux';

export default function oNoF(state = [], action) {
    switch (action.type) {
        case '@online':

            return { ...state, type: 'online' };
        case '@offline':
            return { ...state, type: 'offline' }
        default:
            return state;
    }
}
