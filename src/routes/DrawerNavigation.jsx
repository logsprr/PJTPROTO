import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import DrawerContent from '../pages/Drawer';
const DrawerNavigation = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <DrawerNavigation.Navigator drawerContent={() => <DrawerContent />}>
            <DrawerNavigation.Screen name="TabScreen" component={TabNavigator} />
        </DrawerNavigation.Navigator>
    )
}