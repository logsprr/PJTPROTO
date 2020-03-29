import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../pages/Notification';
const Stack = createStackNavigator();
function NotificationNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen name="HomeNotification" component={NotificationScreen} />
        </Stack.Navigator >

    );
}
export default NotificationNavigator;