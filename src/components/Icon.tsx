import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

interface Icon {
    name: string,
    isFocused: boolean,
    type: string
}
const Icon = ({ name, isFocused, type }: Icon) => {
    let iconName;
    if (name === 'Mensagens') {
        iconName = 'ios-chatbubbles'
    } else if (name === 'Atividades') {
        iconName = 'ios-list'
    }
    else if (name === 'Perfil') {
        iconName = 'ios-person';
    }
    else if (name === 'Notificações') {
        iconName = 'ios-notifications';
    }
    else if (name === 'Config..') {
        iconName = 'ios-settings';
    }
    return (
        <View>
            {type == 'icon' ? <Ionicons name={iconName} size={24} color={isFocused ? 'white' : 'black'} /> : <View />}
        </View>

    )
}

export default Icon;