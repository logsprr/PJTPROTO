import React, { Component } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import logologin from '../../assets/images/logologin.png';
import styles from './style';
export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.containerImage}>
                    <Image source={logologin} style={styles.image} />
                </View>
                <View style={styles.containerButtons}>
                    <TouchableScale
                        friction={90} //
                        tension={100} //
                        activeScale={0.95}
                        style={styles.buttonCreate}
                        onPress={() => this.props.navigation.navigate('CreateAccount')}
                    >
                        <Text>Criar conta</Text>
                    </TouchableScale>
                    <TouchableScale
                        friction={90} //
                        tension={100} //
                        activeScale={0.95}
                        style={styles.buttonLogin}>
                        <Text>Login</Text>
                    </TouchableScale>
                </View>
            </SafeAreaView>
        );
    }
}
