import * as React from 'react';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Product from '../screens/Product';
import Profile from '../screens/Profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GeoLocationScreen from '../screens/GeoLocationScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomTab({ navigation }) {
    return (
        <Tab.Navigator initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#f0edf6"
            barStyle={{ backgroundColor: '#ae2012' }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Product"
                component={Product}
                options={{
                    tabBarLabel: 'Product',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="gift" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="shopping-cart" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Location"
                component={GeoLocationScreen}
                options={{
                    tabBarLabel: 'Location',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="location-on" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-astronaut" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default BottomTab;