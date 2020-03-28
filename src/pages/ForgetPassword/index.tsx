import React, { Component, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/modules/Login/LoginActions";
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import loginStyles from '../Login/style';
import styles from '../../themes/constants/styles';
import firebase from 'firebase';
class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
        }
    }

    reset = async () => {
        const { loadRequestCode, login } = this.props;
        const { email } = this.state;
        if (email != null) {
            loadRequestCode(email);
        } else {
            Alert.alert('Preencha o campo email')
        }
    }
    render() {
        const { login } = this.props;
        if (login.isRead) {
            return (
                <View style={loginStyles.indicator}>
                    <ActivityIndicator size='large' animating style={{ backgroundColor: "white", width: 200, height: 200, borderRadius: 20 }} />
                </View>
            )
        }
        return (
            <SafeAreaView style={loginStyles.container}>
                <View>
                    <Text style={loginStyles.title}>Esqueceu sua senha ?</Text>
                    <Text style={loginStyles.description}>Digite seu e-mail para continuar.</Text>
                </View>
                <View style={loginStyles.form}>
                    <Text style={loginStyles.formLabel}>E-mail</Text>
                    <TextInput style={loginStyles.formInput} placeholder="Digite o seu email" onChangeText={(email) => this.setState({ email: email })} />
                </View>
                <View style={loginStyles.containerButtons}>
                    <TouchableScale
                        friction={90} //
                        tension={100} //
                        activeScale={0.95}
                        style={loginStyles.buttonLogin}
                        onPress={() => this.reset()}
                    >
                        <Text style={loginStyles.buttonLoginText}>Enviar código</Text>
                    </TouchableScale>
                </View>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => ({
    login: state.login
});
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ ...LoginActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);