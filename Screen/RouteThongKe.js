import React, {Component} from 'react';
import {} from 'react-native';
import { createAppContainer, createStackNavigator,DrawerNavigator } from 'react-navigation';
import HomeScreenRouter from './Screen/Home';
import Login from './Screen/Login';

export const MainNavigator = createStackNavigator({
    ManhHinh_Home: {
        screen: HomeScreenRouter
    },
    ManhHinh_Login: {
        screen: Login
    },
},
    {
        headerMode: 'screen',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null,
            headerTintColor: '#FFD700',
            headerStyle: { backgroundColor: '#000080' }
        },
    });
export const HomeStack = createAppContainer(MainNavigator);

