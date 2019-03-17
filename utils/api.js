import { AsyncStorage } from 'react-native';
import { UDACICARD_STORAGE_KEY } from './helpers';

// basic data
const dummyData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
                correctAnswer: 'true'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
                correctAnswer: 'true'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
                correctAnswer: 'true'
            }
        ]
    }
};

// getDecks: return all of the decks along with the titles
export const getDummyData = () => {
    return dummyData;
};

export function getDecks (deck) {
    return AsyncStorage.getItem(UDACICARD_STORAGE_KEY)
        .then(results => {
            if(results === null){
                AsyncStorage.setItem(UDACICARD_STORAGE_KEY, JSON.stringify(dummyData));
                return dummyData;
            } else{
                return JSON.parse(results);
            }
        });
}
