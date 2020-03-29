import React, { Component, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../../store/modules/Login/LoginActions";
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import styles from './styles';

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
                <View style={styles.indicator}>
                    <ActivityIndicator size='large' animating style={{ backgroundColor: "white", width: 200, height: 200, borderRadius: 20 }} />
                </View>
            )
        }
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior='position' keyboardVerticalOffset={100} >
                    <View>
                        <Text style={styles.title}>Reconfigurar senha</Text>
                        <Text style={styles.description}>Digite os dados abaixo para o reset de senha</Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.formLabel}>Código</Text>
                        <TextInput style={styles.formInput} placeholder="Digite o código enviado ao seu telefone" onChangeText={(code) => this.setState({ code: code })} />
                        <Text style={[styles.formLabel, { marginTop: 40 }]}>Senha</Text>
                        <TextInput secureTextEntry={true} style={styles.formInput} placeholder="Digite sua senha" onChangeText={(passsword) => this.setState({ passsword: passsword })} />
                        <Text style={[styles.formLabel, { marginTop: 40 }]}>Confirmar senha</Text>
                        <TextInput secureTextEntry={true} style={styles.formInput} placeholder="Digite novamente a senha" onChangeText={(repeatPassword) => this.setState({ repeatPassword: repeatPassword })} />
                    </View>
                    <View style={styles.containerButtons}>
                        <TouchableScale
                            friction={90} //
                            tension={100} //
                            activeScale={0.95}
                            style={styles.buttonLogin}
                            onPress={() => this.resetPassword()}
                        >
                            <Text style={styles.buttonLoginText}>Resetar senha</Text>
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
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ ...LoginActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);