import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { green, white } from '../utils/colors';
import { getDummyData } from '../utils/api';

class DeckList extends Component {
    render(){
        const decks = getDummyData()

        return (
            <View style={styles.container}>
                {Object.keys(decks).map((key) => {
                    const { title, questions } = decks[key];
                    return (
                        <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('DeckDetails', {entryId: key})}>
                            <View  style={styles.row}>
                                <Text style={styles.cardTitle}>{title}</Text>
                                <Text>{questions.length <= 1 ? questions.length + ' card' : questions.length + ' cards'}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderColor: green,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        width: 300,
        height: 100,
        marginBottom: 10
    },
    cardTitle: {
        fontSize: 24
    }
})

export default DeckList