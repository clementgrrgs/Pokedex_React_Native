import React from 'react'
import { createStackNavigator } from 'react-navigation';
import Classement from '../interfaces/Classement';
import Pokedex from '../interfaces/Pokedex';
import Login from '../interfaces/Login';
import Home from '../interfaces/Home';
import Sigin from '../interfaces/Sigin';

const AppStackNavigator = createStackNavigator({
    Classement,
    Pokedex,
    Login,
    Sigin,
    Home
}, {
    initialRouteName: 'Home'
});

export default AppStackNavigator;