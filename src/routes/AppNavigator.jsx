import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import LoginNavigator from './LoginNavigator';
import { navigationRef } from './RootNavigation';
import AuthNavigator from './AuthNavigator';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();
export default function AppNavigator() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName='Auth'
                screenOptions={{ cardStyle: { backgroundColor: '#FFF' }, gestureEnabled: false }} >
                <Stack.Screen name="Message" component={DrawerNavigation} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Auth" component={AuthNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Home" component={LoginNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                {/* <Stack.Screen name="Message" component={TabNavigator}
                    options={{
                        headerShown: false
                    }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}