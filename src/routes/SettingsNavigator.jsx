import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../pages/Setting';
const Stack = createStackNavigator();
function SettingNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen name="HomeSetting" component={SettingScreen} />
        </Stack.Navigator >

    );
}
export default SettingNavigator;