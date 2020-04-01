import React, { useState, useEffect } from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

const Icon = ({ name, isFocused, type }) => {
    let iconName;
    if (name === 'Mensagens') {
        iconName = 'ios-chatbubbles'
    } else if (name === 'Atividades') {
        iconName = 'ios-list'
    }
    else if (name === 'Agenda') {
        iconName = 'ios-calendar';
    }
    else if (name === 'Notificações') {
        iconName = 'ios-notifications';
    }
    else if (name === 'Relatórios') {
        iconName = 'barschart';
    }
    return (
        <View>
            {type == 'icon' ? <View>
                {name == 'Relatórios' && <AntDesign name={iconName} size={24} color={isFocused ? 'white' : 'black'} />}
                {name != 'Relatórios' && <Ionicons name={iconName} size={24} color={isFocused ? 'white' : 'black'} />}
            </View> :
                <View />}
        </View>

    )
}

export default Icon;