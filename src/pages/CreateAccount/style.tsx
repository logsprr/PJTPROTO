import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
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
    buttonLogin: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 25
    }
})

export default styles;