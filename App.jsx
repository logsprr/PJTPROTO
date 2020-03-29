import './src/config/reactotron/reactotron';
import React, { Component } from 'react';
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react';
import LootieView from 'lottie-react-native';
import splash from './src/assets/json/splash.json';
import AppHome from './src/App';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={(
          <LootieView source={splash} />
        )} persistor={persistor}>
          <AppHome />
        </PersistGate>
      </Provider>
    );
  }
}
