import { AsyncStorage } from 'react-native';
import { FLASHCARD_STORAGE_KEY } from './helpers'

// basic data
const dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

// getDecks: return all of the decks along with the titles
export const getDummyData = () => {
    return dummyData;
}

export function getDecks () {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
       .then((results) => {
           return JSON.parse(results);
     });
}

// getDeck: take in a single id argument and return the deck associated with that id
