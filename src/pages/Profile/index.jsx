import React, { Component } from 'react';
import { Animated, ScrollView, View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons'

import styles from './style'


import cover from '../../assets/images/test_static/capa.png'
import profilePicture from '../../assets/images/test_static/profilePicture.jpeg'

import MessageIconSvg from '../../assets/icons/svg/messageIcon.svg'
import TelephoneIcon from '../../assets/icons/svg/telephoneIcon.svg'
import PlusIcon from '../../assets/icons/svg/plusIcon.svg'
import OptionsIcon from '../../assets/icons/svg/optionsIcon.svg'

import AppIcon from '../../assets/icons/svg/appIcon.svg'
import LinkedinIcon from '../../assets/icons/svg/linkedinIcon.svg'
import GithubIcon from '../../assets/icons/svg/githubIcon.svg'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0)
        };
    }

    
    render() {
        return (
            <>
                <StatusBar barStyle="light-content" />
                <ScrollView  style={styles.container}>
                    <View style={styles.beforeProfileImage}>
                        <Image source={cover} style={styles.cover}/>
                    </View>
                    <View style={styles.onProfileImage}>
                            <Image source={profilePicture} style={styles.profileImage} /> 
                    </View> 
                    <View style={styles.afterProfileImage}>
                        <Text style={styles.name}>Ricardo Graciano</Text>
                        <Text style={styles.job}>Desenvolvedor Full-Stack</Text>

                        <View style={styles.actions}>
                            <TouchableOpacity 
                                style={styles.actionsButton}
                                onPress={() => {}}
                            >
                                <MessageIconSvg width={35} height={35} />
                                <Text style={styles.actionsText}>Mensagem</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.actionsButton}
                                onPress={() => {}}
                            >
                                <TelephoneIcon width={35} height={35} />
                                <Text style={styles.actionsText}>Ligar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.actionsButton}
                                onPress={() => {}}
                            >
                                <PlusIcon width={35} height={35} />
                                <Text style={styles.actionsText}>Adicionar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.actionsButton}
                                onPress={() => {}}
                            >
                                <OptionsIcon width={35} height={35} />
                                <Text style={styles.actionsText}>Opções</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialMidias}>
                            <View style={styles.socialMidiasView}>
                                <AppIcon width={24} height={24} />
                                <Text style={styles.socialMidiasText}>Desenvolvedor de Sistemas</Text>
                            </View>
                            <View style={styles.socialMidiasView}>
                                <LinkedinIcon width={24} height={24} />
                                <Text style={styles.socialMidiasText}>Linkedin</Text>
                            </View>
                            <View style={[styles.socialMidiasView, {borderBottomWidth: 0}]}>
                                <GithubIcon width={24} height={24} />
                                <Text style={styles.socialMidiasText}>GitHub</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}

export default Profile;
