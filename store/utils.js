import AsyncStorage from '@react-native-async-storage/async-storage';
// import {QUIZZ} from '../data/quiz';

export const saveQuizzToAsyncStorage = async data => {
  try {
    await AsyncStorage.setItem('quizz', JSON.stringify(data));
  } catch (error) {
    console.log('Quizz saving error', error);
  }
};

export const getQuizzData = async () => {
  try {
    const quizzData = await AsyncStorage.getItem('quizz');
    return quizzData != null ? JSON.parse(quizzData) : [];
  } catch (error) {
    console.log('Fetching quizz error', error);
    return [];
  }
};

export const saveQuotesData = async data => {
  try {
    await AsyncStorage.setItem('quotes', JSON.stringify(data));
  } catch (error) {
    console.log('Quotes data save error', error);
  }
};

export const getQuotesData = async () => {
  try {
    const quotesData = await AsyncStorage.getItem('quotes');
    return quotesData != null ? JSON.parse(quotesData) : [];
  } catch (error) {
    console.log('Quotes data fetching error', error);
  }
};

