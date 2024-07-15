import AsyncStorage from '@react-native-async-storage/async-storage';
// import {QUIZZ} from '../data/quiz';

export const saveQuizzToAsyncStorage = async (data) => {
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
    return []
  }
};

