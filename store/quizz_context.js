import {createContext, useEffect, useState} from 'react';
import {
  getQuizzData,
  getQuotesData,
  saveQuizzToAsyncStorage,
  saveQuotesData,
} from './utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QUIZZ} from '../data/quiz';
import {QUOTES} from '../data/famous_quotes';

export const QuizzContext = createContext({
  quizz: [],
  quotes: [],
});

export const QuizzProvider = ({children}) => {
  const [quizz, setQuizz] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const initQuizz = async () => {
      try {
        let quizzData = await getQuizzData();
        let quotesData = await getQuotesData();

        if (quizzData.length === 0) {
          await saveQuizzToAsyncStorage(QUIZZ);
          quizzData = await getQuizzData();
        }
        setQuizz(quizzData);

        if (quotesData.length === 0) {
          await saveQuotesData(QUOTES);
          quotesData = await getQuotesData();
        }
        setQuotes(quotesData);
      } catch (error) {
        console.log('Data initializing error, check quiz_context.js', error);
      }
    };
    initQuizz();
  }, []);

  // useEffect(() => {
  //   const initQuizz = async () => {
  //     try {
  //       const data = await getQuizzData();
  //       if (data.length === 0) {
  //         await saveQuizzToAsyncStorage(QUIZZ);
  //         data = await getQuizzData();
  //       }
  //       setQuizz(data);
  //       //   console.log('SAVED QUIZZ FROM ASYNC STORAGE---', data);
  //     } catch (error) {
  //       // console.error('Error initializing quizz data:', error);
  //       console.log('Error initializing quizz data:', error);
  //     }
  //   };

  //   initQuizz();
  // }, []);

  const unlockNextLevel = async id => {
    const currentQuizzIndex = quizz.findIndex(item => item.id === id);
    if (currentQuizzIndex !== -1 && currentQuizzIndex + 1 < quizz.length) {
      const updatedQuizz = quizz.map((quiz, index) =>
        index === currentQuizzIndex + 1 ? {...quiz, isLocked: false} : quiz,
      );
      setQuizz(updatedQuizz);
      await saveQuizzToAsyncStorage(updatedQuizz);
    }
  };

  const value = {quizz, unlockNextLevel, quotes};
  return (
    <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
  );
};
