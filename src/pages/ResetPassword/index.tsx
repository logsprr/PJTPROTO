import React, { Component, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import loginStyles from '../Login/style';

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
        }
    }
    render() {
        return (
            <SafeAreaView style={loginStyles.container}>
                <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior='position' keyboardVerticalOffset={100} >
                    <View>
                        <Text style={loginStyles.title}>Reconfigurar senha</Text>
                        <Text style={loginStyles.description}>Digite os dados abaixo para o reset de senha</Text>
                    </View>
                    <View style={loginStyles.form}>
                        <Text style={loginStyles.formLabel}>Código</Text>
                        <TextInput style={loginStyles.formInput} placeholder="Digite o código enviado ao seu e-mail" />
                        <Text style={[loginStyles.formLabel, { marginTop: 40 }]}>Senha</Text>
                        <TextInput secureTextEntry={true} style={loginStyles.formInput} placeholder="Digite sua senha" />
                        <Text style={[loginStyles.formLabel, { marginTop: 40 }]}>Confirmar senha</Text>
                        <TextInput secureTextEntry={true} style={loginStyles.formInput} placeholder="Digite novamente a senha" />
                    </View>
                    <View style={loginStyles.containerButtons}>
                        <TouchableScale
                            friction={90} //
                            tension={100} //
                            activeScale={0.95}
                            style={loginStyles.buttonLogin}
                            onPress={() => this.props.navigation.navigate('ResetSuccess')}
                        >
                            <Text style={loginStyles.buttonLoginText}>Resetar senha</Text>
                        </TouchableScale>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
