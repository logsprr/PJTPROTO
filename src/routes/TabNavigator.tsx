import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    FlexibleTabBarComponent,
    withCustomStyle,
} from 'react-navigation-custom-bottom-tab-component/FlexibleTabBarComponent';
import ChatNavigator from '../routes/ChatNavigator';
import ChatScreen from '../pages/Messages';
import TabBar from '../components/TabBar'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={props => <TabBar {...props} />}
        >
            <Tab.Screen name="Mensagens" component={ChatNavigator} />
            <Tab.Screen name="Atividades" component={ChatScreen} />
            <Tab.Screen name="Perfil" component={ChatScreen} />
            <Tab.Screen name="Notificações" component={ChatScreen} />
            <Tab.Screen name="Config.." component={ChatScreen} />
        </Tab.Navigator>
    );
}


export default TabNavigator;