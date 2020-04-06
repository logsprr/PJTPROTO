import './src/config/reactotron/reactotron';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from "react-redux";
import { Provider as PaperProvider } from 'react-native-paper';
import { store, persistor } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react';
import LootieView from 'lottie-react-native';
import splash from './src/assets/json/splash.json';
import AppHome from './src/App';
import FlashMessage from "react-native-flash-message";
export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <PersistGate loading={(
          <LootieView source={splash} />
        )} persistor={persistor}>
          <PaperProvider>
            <AppHome />
          </PaperProvider>
          <FlashMessage position="top" />
        </PersistGate>
      </Provider>
    );
  }
}
