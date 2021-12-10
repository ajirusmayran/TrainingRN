import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './About';
import SettingsScreen from './SettingsScreen';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
