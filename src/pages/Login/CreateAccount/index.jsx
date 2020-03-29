import React, { Component, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../../store/modules/Login/LoginActions";
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator, Alert } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import loginStyles from '../style';
class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            name: null,
            idEnterprise: null,
            phone: null
        }
    }
    create = () => {
        const { email, password, name, idEnterprise, phone } = this.state;
        const { loadRequestCreateUser } = this.props;
        if (email != null && password != null && name != null && idEnterprise != null && phone != null) {
            loadRequestCreateUser(password, idEnterprise, email, name, phone);
        } else {
            Alert.alert("Há lagum campo vazio");
        }
    }
    render() {
        const { email, password, name, idEnterprise } = this.state;
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
                <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={100} >
                    <View>
                        <Text style={loginStyles.title}>Seja bem vindo !</Text>
                        <Text style={loginStyles.description}>Digite os dados abaixo para o cadastro</Text>
                    </View>
                    <View style={loginStyles.form}>
                        <Text style={loginStyles.formLabel}>Empresa</Text>
                        <TextInput style={loginStyles.formInput} placeholder="Digite o id de identificação" onChangeText={(id) => this.setState({ idEnterprise: id })} />

                        <Text style={[loginStyles.formLabel, { marginTop: 30 }]}>Nome</Text>
                        <TextInput style={loginStyles.formInput} placeholder="Digite seu nome" onChangeText={(name) => this.setState({ name: name })} />

                        <Text style={[loginStyles.formLabel, { marginTop: 30 }]}>Email</Text>
                        <TextInput style={loginStyles.formInput} placeholder="Digite seu email" onChangeText={(email) => this.setState({ email: email })} />

                        <Text style={[loginStyles.formLabel, { marginTop: 30 }]}>Telefone</Text>
                        <TextInput style={loginStyles.formInput} placeholder="Digite seu número de telefone" onChangeText={(phone) => this.setState({ phone: phone })} />

                        <Text style={[loginStyles.formLabel, { marginTop: 30 }]}>Senha</Text>
                        <TextInput secureTextEntry={true} style={loginStyles.formInput} placeholder="Digite sua senha" onChangeText={(password) => this.setState({ password: password })} />
                    </View>
                    <View style={loginStyles.containerButtons}>
                        <TouchableScale
                            friction={90} //
                            tension={100} //
                            activeScale={0.95}
                            style={loginStyles.buttonLogin}
                            onPress={() => this.create()}
                        >
                            <Text style={loginStyles.buttonLoginText}>Criar conta</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);