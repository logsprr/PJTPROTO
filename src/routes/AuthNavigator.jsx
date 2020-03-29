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
class AuthNavigator extends React.Component {
    constructor(props) {
        super(props);
    }
    login = () => {
        const { login } = this.props;
        console.log(login);
        login.isLogged == true ? this.props.navigation.navigate('Message') : this.props.navigation.navigate('Home')
    }
    componentDidMount() {
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