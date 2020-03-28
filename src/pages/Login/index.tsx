import React, { Component, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import styles from './style';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior='position' keyboardVerticalOffset={100} >
                    <View>
                        <Text style={styles.title}>Bem vindo de volta</Text>
                        <Text style={styles.description}>Logue para continuar</Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.formLabel}>E-mail</Text>
                        <TextInput style={styles.formInput} placeholder="Digite o seu email" />
                        <Text style={[styles.formLabel, { marginTop: 40 }]}>Senha</Text>
                        <TextInput secureTextEntry={true} style={styles.formInput} placeholder="Digite a sua senha" />
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
                            onPress={() => { }}
                        >
                            <Text style={styles.buttonLoginText}>Logar</Text>
                        </TouchableScale>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
