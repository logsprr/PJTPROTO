import React, { Component } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import styles from './style';
export default class CreateAccount extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.containerImage}>
                </View>
                <View style={styles.containerButtons}>
                </View>
            </SafeAreaView>
        );
    }
}
