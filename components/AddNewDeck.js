import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { green } from '../utils/colors';

class AddNewDeck extends Component {
    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.deckTitle}>What's the name of your new Deck?</Text>
                <TextInput placeholder='Type in the Deck title' style={{height: 48, marginTop: 50, marginBottom: 20 }} onChangeText={(text) => this.setState({ text: text })} value={this.state.text}></TextInput>
                <TouchableOpacity onPress={this.submitDeckTitle}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    deckTitle: {
        fontSize: 38,
        marginBottom: 10,
        textAlign: 'center',
        padding: 10 
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: green,
        borderRadius: 4
    },
    buttonText: {
        padding: 15,
        color: 'white',
        fontSize: 20
    }
})

export default AddNewDeck;
