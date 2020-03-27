import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';
import firebase from 'firebase';
class AuthNavigator extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
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
    }
    _bootstrapAsync = async () => {
        const { navigation } = this.props;
        navigation.navigate('Message');
    };
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthNavigator;