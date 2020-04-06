import React, { Component } from 'react';
import { Animated, ScrollView, View, Text, Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialAnimatedView from '../MaterialAnimation'
import {ThemeUtils, Color} from '../../utils';

import { Ionicons } from '@expo/vector-icons'
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from './style'


import cover from '../../assets/images/test_static/capa.png'
import profileImage from '../../assets/images/test_static/profilePicture.jpeg'

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

    
    //For header background color from transparent to header color
    _getHeaderBackgroundColor = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: ['rgba(0,0,0,0)', 'rgba(255, 255, 255, 1)'],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    _getHeaderColor = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0, 0)'],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    }

    //For header image opacity
    _getHeaderImageOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [1, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image position from left
    _getImageLeftPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 80, 140],
            outputRange: [ThemeUtils.relativeWidth(30), ThemeUtils.relativeWidth(38), ThemeUtils.relativeWidth(10)],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image position from top
    _getImageTopPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [ThemeUtils.relativeHeight(20), Platform.OS === 'ios' ? 8 : 10],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image width
    _getImageWidth = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [ThemeUtils.relativeWidth(40), ThemeUtils.APPBAR_HEIGHT - 20],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image height
    _getImageHeight = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [ThemeUtils.relativeWidth(40), ThemeUtils.APPBAR_HEIGHT - 20],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image border width
    _getImageBorderWidth = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [StyleSheet.hairlineWidth * 3, StyleSheet.hairlineWidth],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image border color
    _getImageBorderColor = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [Color.CARD_BG_COLOR, 'rgba(0,0,0,0.0)'],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //Song list container position from top
    _getListViewTopPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 250],
            outputRange: [ThemeUtils.relativeWidth(100) - ThemeUtils.APPBAR_HEIGHT - 10, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //header title opacity
    _getHeaderTitleOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [0, 0.5, 1],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist name opacity
    _getNormalTitleOpacity = () => {
        const {scrollY} = this.state;
        //console.log(scrollY);
        return scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [1, 0.5, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });

    };

    
    render() {
        const headerBackgroundColor = this._getHeaderBackgroundColor();

        const headerImageOpacity = this._getHeaderImageOpacity();

        const profileImageLeft = this._getImageLeftPosition();

        const profileImageTop = this._getImageTopPosition();

        const profileImageWidth = this._getImageWidth();

        const profileImageHeight = this._getImageHeight();

        const profileImageBorderWidth = this._getImageBorderWidth();

        const profileImageBorderColor = this._getImageBorderColor();

        const listViewTop = this._getListViewTopPosition();

        const headerTitleOpacity = this._getHeaderTitleOpacity();

        const normalTitleOpacity = this._getNormalTitleOpacity();


        return (
            <View style={styles.container}>
                <StatusBar  barStyle="light-content" />

                <Animated.Image
                    style={[styles.headerImageStyle, {
                        opacity: headerImageOpacity,

                    }]}
                    source={cover}/>
                
                <Animated.View style={[styles.headerStyle, {
                    backgroundColor: headerBackgroundColor,
                    opacity: headerTitleOpacity,
                }]}>

                    <View style={[styles.headerLeftIcon]}>
                        <Icons name={"arrow-left"} size={25} color="#000"/>
                    </View>


                    <Animated.Text
                        style={[styles.headerTitle, {
                            opacity: headerTitleOpacity
                        }]}>
                        Ricardo Graciano
                    </Animated.Text>

                </Animated.View>

                <Animated.Image
                    style={
                        [styles.profileImage, {
                            borderWidth: profileImageBorderWidth,
                            borderColor: profileImageBorderColor,
                            borderRadius: 100,
                            height: profileImageHeight,
                            width: profileImageWidth,
                            transform: [
                                {translateY: profileImageTop},
                                {translateX: profileImageLeft}
                            ]
                        }]}
                    source={profileImage}
                />

                <Animated.ScrollView  
                    overScrollMode={'never'}
                    style={{zIndex: 10, backgroundColor: headerBackgroundColor,}}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {contentOffset: {y: this.state.scrollY}}
                            }
                        ]
                    )}
                >
                        <Animated.Text 
                            style={[styles.name, styles.profileTitle, {
                                opacity: normalTitleOpacity,
                            }]}
                        >
                            Ricardo Graciano
                        </Animated.Text>
                        <Animated.Text 
                            style={[styles.job, styles.songCountStyle, {
                                opacity: normalTitleOpacity,
                            }]}
                        >
                            Desenvolvedor Full-Stack
                        </Animated.Text>
                    

                        <Animated.View style={[styles.actions, {transform: [{
                            translateY: listViewTop
                        }]}]}>
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
                        </Animated.View>
                        <Animated.View style={[styles.socialMidias, {
                            transform: [{
                                translateY: listViewTop
                            }]
                        }]}>
                            <Animated.View style={styles.socialMidiasView}>
                                <AppIcon width={24} height={24} />
                                <Text style={styles.socialMidiasText}>Desenvolvedor de Sistemas</Text>
                            </Animated.View>
                            <Animated.View style={styles.socialMidiasView}>
                                <LinkedinIcon width={24} height={24} />
                                <Text style={styles.socialMidiasText}>Linkedin</Text>
                            </Animated.View>
                            <Animated.View style={[styles.socialMidiasView, {borderBottomWidth: 0}]}>
                                <GithubIcon width={24} height={24} />
                                <Text style={styles.socialMidiasText}>GitHub</Text>
                            </Animated.View>
                        </Animated.View>
                </Animated.ScrollView>
            </View>
        )
    }
}

export default Profile;
