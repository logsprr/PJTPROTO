import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../store/modules/Login/LoginActions";
import firebase from 'firebase';
import io from "socket.io-client";
import api from '../services/api';
import NetInfo from '@react-native-community/netinfo';
import { showMessage, hideMessage } from "react-native-flash-message";
class AuthNavigator extends React.Component {
    constructor(props) {
        super(props);
    }
    login = () => {
        const { login } = this.props;
        login.isLogged == true ? this.props.navigation.navigate('Message') : this.props.navigation.navigate('Home')
    }
    startSocket = () => {
        const { login } = this.props;
        if (login.isLogged == true) {
            const socket = io('http://localhost:3000/', {
                query: {
                    userLogin: login.result._id,
                    enterpriseId: login.result.idEnterprise
                }
            });
            return new Promise(resolve => {
                socket.on('connect', () => {
                    resolve(socket);
                });
            });
        }
    }
    componentDidMount() {
        NetInfo.addEventListener(state => {
            state.isConnected != true ? showMessage({
                message: "Você está sem acesso a internet",
                type: "danger",
                duration: 10000
            }) : null
        })
        const config = {
            apiKey: "AIzaSyDb-8HAjGxahK-dq6mokIVa8Hb2J31rwnY",
            authDomain: "nativetodo-12412.firebaseapp.com",
            databaseURL: "https://nativetodo-12412.firebaseio.com",
            projectId: "nativetodo-12412",
            storageBucket: "nativetodo-12412.appspot.com",
            messagingSenderId: "204666161034",
            appId: "1:204666161034:web:60c045eedfc2b711da6a73"
        };
        firebase.initializeApp(config);
        this.startSocket();
        this.login()
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="default" backgroundColor="white" />
                <ActivityIndicator />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ ...LoginActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavigator);
