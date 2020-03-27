import Reactotron from "reactotron-react-native";
import Tron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from 'reactotron-redux-saga'

declare global {
    interface Console {
        tron: typeof Tron
    }
}

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