import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../pages/Profile';
const Stack = createStackNavigator();
function ProfileNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen name="HomeProfile" component={ProfileScreen} />
        </Stack.Navigator >

    );
}
export default ProfileNavigator;