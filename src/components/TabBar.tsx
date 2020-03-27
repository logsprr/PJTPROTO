import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Animated, Easing, SafeAreaView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import posed from "react-native-pose";
import Icon from './Icon';
const windowWidth = Dimensions.get("screen").width;
const tabWidth = windowWidth / 5;
const SpotLight = posed.View({
    route0: { x: 0 },
    route1: { x: tabWidth },
    route2: { x: tabWidth * 2 },
    route3: { x: tabWidth * 3 },
    route4: { x: tabWidth * 4 },
});
const Scaler = posed.View({
    active: { scale: 1 },
    inactive: { scale: 1 }
});

export default function TabBar({ state, descriptors, navigation }) {
    const scale = new Animated.Value(0);
    React.useEffect(() => {
        Animated.spring(scale, {
            toValue: 1,
        }).start();
    }, [scale])
    return (
        <SafeAreaView style={S.container}>
            <SafeAreaView style={{ ...StyleSheet.absoluteFillObject, zIndex: 0, bottom: 0 }}>
                <SpotLight style={S.spotLight} pose={`route${state.index}`}>
                    <View style={[S.spotLightInner, { marginLeft: state.index == 0 ? 16 : 0, marginRight: state.index == 4 ? 16 : 0 }]} />
                </SpotLight>
            </SafeAreaView>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);

                    }
                };



                return (
                    <TouchableScale
                        friction={90} //
                        tension={100} // These props are passed to the parent component (here TouchableScale)
                        activeScale={0.95}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={S.tabButton}
                        key={route.key}
                    >
                        <Scaler
                            pose={isFocused ? "active" : "inactive"}
                            style={S.scaler}
                        >

                            <View style={{
                                flexDirection: 'row',
                                marginLeft: state.index == 0 ? 16 : 0,
                                marginRight: state.index == 4 ? 16 : 0
                            }}>
                                <Icon name={label} isFocused={isFocused} type='icon' />
                                {isFocused && <Animated.Text style={[isFocused ? S.textActive : S.textInactive, {
                                    transform: [{
                                        scale: scale
                                    }]
                                }]}>
                                    {label}
                                </Animated.Text>}
                            </View>
                        </Scaler>

                    </TouchableScale>
                );
            })}
        </SafeAreaView>
    );
}


const S = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        marginBottom: 0,
        borderTopWidth: 0.5,
        borderTopColor: '#dddd',
        backgroundColor: 'white'
    },
    border: {
        borderTopWidth: 0.5,
        borderTopColor: '#dddd'
    },
    tabButton: { flex: 1 },
    spotLight: {
        width: tabWidth,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    spotLightInner: {
        width: (windowWidth / 5) + 10,
        height: 38,
        backgroundColor: "#95A5A6",
        borderRadius: 24,

    },
    scaler: { flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", },
    textActive: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold'
    },
    textInactive: {
        fontSize: 12,
        color: 'white',

    }
});