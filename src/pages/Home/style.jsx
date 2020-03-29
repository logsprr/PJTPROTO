import React from 'react';
import { StyleSheet } from 'react-native';

import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginTop: Constants.statusBarHeight
    },
    backgroundImage: {
        width: '100%',
        height: 'auto',
        resizeMode: 'contain'
    },
    title: {
        marginTop: '10%',
        width: '100%',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerImage: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 250
    },
    containerButtons: {
        paddingTop: '20%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonCreate: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 15,
    },
    buttonCreateText: {
        color: '#707070',
        fontSize: 16
    },
    buttonLogin: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 25
    },
    buttonLoginText: {
        color: '#FFFFFF',
        fontSize: 16
    }
})

export default styles;