import * as React from 'react';
import { Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import ChatScreen from '../pages/ChatMessage';
import ChatCall from '../pages/ChatMessage/Messages';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChatContacts from '../pages/ChatMessage/ListUsers';
const Stack = createStackNavigator();
const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};
function ChatNavigator({ navigation }) {
    return (
        <Stack.Navigator
            headerMode='float'
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerShown: false,
                headerTitleAlign: 'center',
                ...TransitionPresets.SlideFromRightIOS
            }}>
            <Stack.Screen name="HomeMessage" component={ChatScreen}
            />
            <Stack.Screen name="Chat" component={ChatCall}
            />
            <Stack.Screen name="Contacts" component={ChatContacts} />
            <Stack.Screen name="ChatContactSend" component={ChatCall} />
        </Stack.Navigator >

    );
}
export default ChatNavigator;