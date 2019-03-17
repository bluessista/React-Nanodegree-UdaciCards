/* eslint-disable no-case-declarations */
import { CREATE_DECK, RECEIVE_DECKS, CREATE_CARD } from '../actions/index';

function deck ( state = {}, action ) {
    switch (action.type) {
    case CREATE_DECK:
        const newDeck = {
            [action.deck] : {
                title: action.deck,
                questions: []
            }
        };
        return {
            ...state,
            ...newDeck
        };
    case RECEIVE_DECKS:
        return {
            ...state,
            ...action.decks
        };
    case CREATE_CARD:
        const { question, answer, deck, correctAnswer } = action.card;
        return {
            ...state,
            [deck]: {
                ...state[deck],
                questions: [...state[deck].questions, { question, answer, correctAnswer }]
            }
        };
    default:
        return state;
    }
}

export default deck;