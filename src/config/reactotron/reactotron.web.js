import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from 'reactotron-redux-saga'

let tron;
if (__DEV__) {
    tron = Reactotron.configure()
        .useReactNative()
        .use(reactotronRedux())
        .use(sagaPlugin({}))
        .connect();

    console.tron = tron;
    tron.clear();
}

export default tron;