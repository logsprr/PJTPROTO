import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../pages/Drawer';

import TabNavigator from './TabNavigator';
import ProfilePage from '../pages/Profile'

const DrawerNavigation = createDrawerNavigator();
export default function DrawerNavigator(props) {
    return (
        <DrawerNavigation.Navigator drawerContent={() => <DrawerContent {... props} />}>
            <DrawerNavigation.Screen name="TabScreen" component={TabNavigator} />
            <DrawerNavigation.Screen name="Profile" component={ProfilePage} />
        </DrawerNavigation.Navigator>
    )
}