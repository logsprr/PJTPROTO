import { createStore, Store, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { offlineMiddleware, suspendSaga, consumeActionMiddleware } from 'redux-offline-queue';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import rootReducer from "./modules/indexReducer";
import rootSaga from './modules/indexSaga';
import reactotron from "reactotron-react-native";
import { REHYDRATE } from 'redux-persist'
//
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['offline']
}
//
const middlewares = [];
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

//
let sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const persistedReducer = persistReducer(persistConfig, rootReducer);

//

middlewares.push(offlineMiddleware({
    additionalTriggers: REHYDRATE,
}));
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());
//


const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(
    persistedReducer,
    enhancer,


);


//
reactotron.setReduxStore(store)
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export { store, persistor };