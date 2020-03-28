import * as React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import LoginNavigator from './LoginNavigator';
import { Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();
function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{cardStyle: {backgroundColor: '#FFF'}}}>
                <Stack.Screen name="Auth" component={AuthNavigator} />
                <Stack.Screen name="Home" component={LoginNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Message" component={TabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigator;