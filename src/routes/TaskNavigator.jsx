import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TaskScreen from '../pages/Task';
const Stack = createStackNavigator();
function TaskNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitleAlign: 'center',
                headerShown: false
            }}>
            <Stack.Screen name="Atividades" component={TaskScreen} />
        </Stack.Navigator >

    );
}
export default TaskNavigator;