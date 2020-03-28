import React, { Component } from 'react';
import { View, SafeAreaView, Text, Image, ImageBackground } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import logoHome from '../../assets/Home/logoHome.png';
import backgroundHome from '../../assets/Home/background.png';
import styles from './style';
export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}> Bem vindo ao WAKA </Text>
                <View style={styles.containerImage}>
                    <Image source={logoHome} style={styles.image} />
                </View>
                <ImageBackground source={backgroundHome} style={styles.backgroundImage} >

                <View style={styles.containerButtons}>
                    <TouchableScale
                        friction={90} //
                        tension={100} //
                        activeScale={0.95}
                        style={styles.buttonCreate}
                        >
                        <Text style={styles.buttonCreateText}>Criar conta</Text>
                    </TouchableScale>
                    <TouchableScale
                        friction={90} //
                        tension={100} //
                        activeScale={0.95}
                        style={styles.buttonLogin}
                        onPress={() => this.props.navigation.navigate('Login')}
                        >
                        <Text style={styles.buttonLoginText}>Login</Text>
                    </TouchableScale>
                </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}