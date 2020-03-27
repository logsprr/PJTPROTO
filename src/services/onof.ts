import * as NetInfo from '@react-native-community/netinfo';
import { put, take } from 'redux-saga/effects';
import { online, offline } from '../store/modules/onlineOffline/onofActions';

export default async function startWatchingNetworkConnectivity() {
    const netinfo = await NetInfo.fetch();

    return netinfo.isConnected;
}