import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatNavigator from './ChatNavigator';
import TaskNavigator from './TaskNavigator';
import ProfileNavigator from './ProfileNavigator';
import NotificationNavigation from './NotificationNavigator';
import SettingsNavigator from './SettingsNavigator';
import TabBar from '../components/TabBar'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={props => <TabBar {...props} />}
        >
            <Tab.Screen name="Mensagens" component={ChatNavigator} />
            <Tab.Screen name="Atividades" component={TaskNavigator} />
            <Tab.Screen name="Agenda" component={ProfileNavigator} />
            <Tab.Screen name="Notificações" component={NotificationNavigation} />
            <Tab.Screen name="Relatórios" component={SettingsNavigator} />
        </Tab.Navigator>
    );
}


export default TabNavigator;