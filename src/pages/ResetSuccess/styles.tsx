import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%'
    },

    title: {
        marginTop: '15%',
        fontSize: 27,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)'
    },

    description: {
        marginTop: '5%',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.75)',
        fontSize: 17
    }


})

export default styles