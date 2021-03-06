import React, { Component, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/modules/Login/LoginActions";
import * as ChatActions from '../../store/modules/Chat/ChatAction';
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import styles from './style';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: null,
            password: null,
        }
    }
    login = () => {
        const { email, password } = this.state;
        const { loadRequestLogin } = this.props;
        if (email != null) {
            if (password != null) {
                loadRequestLogin(email, password);
            } else {
                Alert.alert('Preencha o campo senha!')
            }
        } else {
            Alert.alert('Preencha o campo email!')
        }
    }
    render() {
        const { email, password } = this.state;
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
                        <Text style={styles.title}>Bem vindo de volta</Text>
                        <Text style={styles.description}>Logue para continuar</Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.formLabel}>E-mail</Text>
                        <TextInput style={styles.formInput} autoCapitalize='none' keyboardType='email-address' placeholder="Digite o seu email" value={email} onChangeText={(email) => this.setState({ email: email })} />
                        <Text style={[styles.formLabel, { marginTop: 40 }]}>Senha</Text>
                        <TextInput style={styles.formInput} keyboardType='default' secureTextEntry={true} placeholder="Digite a sua senha" value={password} onChangeText={(password) => this.setState({ password: password })} />
                    </View>
                    <View style={styles.containerButtons}>
                        <TouchableScale
                            friction={90} //
                            tension={100} //
                            activeScale={0.95}
                            style={styles.buttonForgetPass}
                            onPress={() => this.props.navigation.navigate('ForgetPassword')}
                        >
                            <Text style={styles.forgetPassText}>Esqueceu ?</Text>
                        </TouchableScale>
                        <TouchableScale
                            friction={90} //
                            tension={100} //
                            activeScale={0.95}
                            style={styles.buttonLogin}
                            onPress={() => this.login()}
                        >
                            <Text style={styles.buttonLoginText}>Logar</Text>
                        </TouchableScale>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login,
    chat: state.chat
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ ...LoginActions, ...ChatActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);