import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import LoginNavigator from './LoginNavigator';
const Stack = createStackNavigator();
export default function AppNavigator({ isSigned }) {
    console.log(isSigned);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isSigned == false ? 'Message' : 'Home'}
                screenOptions={{ cardStyle: { backgroundColor: '#FFF' } }}>
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