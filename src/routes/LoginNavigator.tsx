import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import CreatePage from '../pages/CreateAccount';
import { Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();
function LoginNavigator({ navigation }) {
    return (
        <Stack.Navigator mode='modal' screenOptions={{ cardStyle: { backgroundColor: '#FFF' } }} >
            <Stack.Screen name="Home" component={HomePage} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Login" component={LoginPage} options={{
                headerTitle: null,
                headerStyle: {
                    borderBottomWidth: 0,
                    elevation: 0,
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                        width: 0
                    },
                },
                headerLeft: () =>
                    <TouchableOpacity style={{
                        paddingLeft: 12
                    }} onPress={() => navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={32} color="#000" />
                    </TouchableOpacity>
            }} />
            <Stack.Screen name="CreateAccount" component={CreatePage} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}
export default LoginNavigator;