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
    },
    form: {
        flexDirection: 'column',
        marginTop: 25,
        marginHorizontal: 10
    },
    formLabel: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    formInput: {
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: '#95a5a6'
    },

    containerButtons: {
        //marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonForgetPass: {
        fontSize: 16,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    forgetPassText: {
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 16
    },

    buttonLogin: {
        marginTop: 60,
        paddingHorizontal: '15%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#95a5a6'
    },
    buttonLoginText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    textTime: {
        justifyContent: "center",
        marginTop: 50,
        textAlign: "center"
    },
    indicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }


})

export default styles