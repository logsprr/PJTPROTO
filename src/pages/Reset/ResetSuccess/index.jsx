import React, { Component, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { View, SafeAreaView, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

import styles from './styles';
import resetSuccessImage from '../../../assets/ResetSuccess/ResetSuccessImage.png'

export default class ResetPassword extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <Image source={resetSuccessImage} />
                <Text style={styles.title}>
                    Parabéns senha alterada com sucesso!
                    </Text>
                <Text style={styles.description}>
                    Sua senha foi alterada , agora você já pode voltar a usar nossos serviços
                    </Text>


                <View style={styles.containerButtons}>
                    <TouchableScale
                        friction={90} //
                        tension={100} //
                        activeScale={0.95}
                        style={styles.buttonLogin}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.buttonLoginText}>Ir para o menu</Text>
                    </TouchableScale>
                </View>
            </SafeAreaView>
        );
    }
}
