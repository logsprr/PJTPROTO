import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/Login';
import { Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();
function LoginNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage} />
        </Stack.Navigator>
    );
}
export default LoginNavigator;