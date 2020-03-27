import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/Login';
import CreatePage from '../pages/CreateAccount';
import { Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();
function LoginNavigator() {
    return (
        <Stack.Navigator mode='modal'  >
            <Stack.Screen name="Login" component={LoginPage} options={{
                headerShown: false
            }} />
            <Stack.Screen name="CreateAccount" component={CreatePage} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}
export default LoginNavigator;