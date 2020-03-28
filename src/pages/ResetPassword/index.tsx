import React, { Component, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/modules/Login/LoginActions";
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import loginStyles from '../Login/style';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null,
            passsword: null,
            repeatPassword: null,
        }
    }
    resetPassword = () => {
        const { loadRequestResetPassword, login } = this.props;
        const { passsword, repeatPassword, code } = this.state;
        if (passsword != null && repeatPassword != null) {
            if (passsword == repeatPassword) {
                loadRequestResetPassword(passsword, code, login.email);
            } else {
                Alert.alert("Senhas não correspondem")
            }
        } else {
            Alert.alert("Campos vazios")
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
                <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior='position' keyboardVerticalOffset={100} >
                    <View>
                        <Text style={loginStyles.title}>Reconfigurar senha</Text>
                        <Text style={loginStyles.description}>Digite os dados abaixo para o reset de senha</Text>
                    </View>
                    <View style={loginStyles.form}>
                        <Text style={loginStyles.formLabel}>Código</Text>
                        <TextInput style={loginStyles.formInput} placeholder="Digite o código enviado ao seu telefone" onChangeText={(code) => this.setState({ code: code })} />
                        <Text style={[loginStyles.formLabel, { marginTop: 40 }]}>Senha</Text>
                        <TextInput secureTextEntry={true} style={loginStyles.formInput} placeholder="Digite sua senha" onChangeText={(passsword) => this.setState({ passsword: passsword })} />
                        <Text style={[loginStyles.formLabel, { marginTop: 40 }]}>Confirmar senha</Text>
                        <TextInput secureTextEntry={true} style={loginStyles.formInput} placeholder="Digite novamente a senha" onChangeText={(repeatPassword) => this.setState({ repeatPassword: repeatPassword })} />
                    </View>
                    <View style={loginStyles.containerButtons}>
                        <TouchableScale
                            friction={90} //
                            tension={100} //
                            activeScale={0.95}
                            style={loginStyles.buttonLogin}
                            onPress={() => this.resetPassword()}
                        >
                            <Text style={loginStyles.buttonLoginText}>Resetar senha</Text>
                        </TouchableScale>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => ({
    login: state.login
});
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ ...LoginActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);