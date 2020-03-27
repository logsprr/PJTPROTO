import './src/config/reactotron/reactotron';
import React, { Component } from 'react';
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './src/routes/AppNavigator';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
