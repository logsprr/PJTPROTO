import React, { Component, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import loginStyles from '../Login/style';

export default class ForgetPassword extends Component {
    render() {
        return (
            <SafeAreaView style={loginStyles.container}>
                <View>
                    <Text style={loginStyles.title}>Esqueceu sua senha ?</Text>
                    <Text style={loginStyles.description}>Digite seu e-mail para continuar.</Text>
                </View>
                <View style={loginStyles.form}>
                    <Text style={loginStyles.formLabel}>E-mail</Text>
                    <TextInput style={loginStyles.formInput} placeholder="Digite o seu email" />
                </View>
                <View style={loginStyles.containerButtons}>
                        <TouchableScale
                            friction={90} //
                            tension={100} //
                            activeScale={0.95}
                            style={loginStyles.buttonLogin}
                            onPress={() => this.props.navigation.navigate('ResetPassword')}
                        >
                            <Text style={loginStyles.buttonLoginText}>Enviar código</Text>
                        </TouchableScale>
                    </View>
            </SafeAreaView>
        );
    }
}
