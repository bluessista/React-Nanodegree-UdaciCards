import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {orange, white, gray } from './utils/colors';

import DeckList from './components/DeckList';
import AddNewDeck from './components/AddNewDeck';

class App extends Component {
    render() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <DeckList />
          <Tabs />
        </View>
      );
    }
  }

// implement Tab Navigation
const NavigatorTabs = createBottomTabNavigator({
    DeckListView: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-variant' size={25} color={tintColor} />
        }
    },
    AddNewDeckView: {
        screen: AddNewDeck,
        navigationOptions: {
            tabBarLabel: 'Add new deck',
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='library-plus' size={25} color={tintColor} />
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: orange,
        style: {
            backgroundColor: white
        }
    }
})

export default createAppContainer(NavigatorTabs);