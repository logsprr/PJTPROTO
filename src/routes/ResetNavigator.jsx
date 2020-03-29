import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ResetScreen from '../pages/Reset';
const Stack = createStackNavigator();
function ResetNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen name="HomeReset" component={ResetScreen} />
        </Stack.Navigator >

    );
}
export default ResetNavigator;