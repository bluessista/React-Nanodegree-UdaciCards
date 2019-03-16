import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {orange, white, gray } from './utils/colors';

import DeckList from './components/DeckList';
import AddNewDeck from './components/AddNewDeck';
import DeckView from './components/DeckView';

class App extends Component {
    render() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <DeckList />
          <RootStack />
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
            tabBarLabel: 'Add new Deck',
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

const RootStack = createStackNavigator(
    {
        Home: {
            screen: NavigatorTabs,
            navigationOptions: {
                header: null
            }
        },
        DeckDetails: {
            screen: DeckView,
            navigationOptions: {
                title: 'Deck Details',
                headerTintColor: white,
                headerStyle: {
                    backgroundColor: orange
                }
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
)

export default createAppContainer(RootStack);