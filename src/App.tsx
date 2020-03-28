import React, { Component } from 'react';
import AppNavigator from './routes/AppNavigator';
import { connect } from 'react-redux';
import { View } from 'react-native';
import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDb-8HAjGxahK-dq6mokIVa8Hb2J31rwnY",
    authDomain: "nativetodo-12412.firebaseapp.com",
    databaseURL: "https://nativetodo-12412.firebaseio.com",
    projectId: "nativetodo-12412",
    storageBucket: "nativetodo-12412.appspot.com",
    messagingSenderId: "204666161034",
    appId: "1:204666161034:web:60c045eedfc2b711da6a73"
};
class AppHome extends Component {
    render() {
        firebase.initializeApp(config);
        const { login } = this.props;
        return <AppNavigator isSigned={login.login} />;
    }
}

const mapStateToProps = state => ({
    login: state.login,
});
export default connect(mapStateToProps, null)(AppHome);