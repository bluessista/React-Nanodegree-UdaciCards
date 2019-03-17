import React, { Component } from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {orange, white } from './utils/colors';

// Components
import DeckList from './components/DeckList';
import AddNewDeck from './components/AddNewDeck';
import DeckView from './components/DeckView';

// Redux
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';


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
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='playlist-plus' size={25} color={tintColor} />
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: orange,
        style: {
            backgroundColor: white
        }
    }
});

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
);

const Navigation = createAppContainer(RootStack);

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <DeckList />
                    <Navigation />
                </View>
            </Provider>
        );
    }
}