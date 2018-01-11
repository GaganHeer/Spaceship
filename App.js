import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, Image, } from 'react-native';
import { StackNavigator } from 'react-navigation';

import GameComponent from "./components/GameComponent";
import HomeComponent from "./components/HomeComponent";
import SettingsComponent from "./components/SettingsComponent";

const Nav = StackNavigator({
    Home: {
        screen: HomeComponent
    },
    Settings: {
        screen: SettingsComponent
    },
    Game: {
      screen: GameComponent
    },

}, {headerMode: 'screen'});

export default class App extends Component {
  render(){
    return (
      <Nav/>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});