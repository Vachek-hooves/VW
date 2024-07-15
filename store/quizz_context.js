import {createContext, useEffect, useState} from 'react';
import {getQuizzData, saveQuizzToAsyncStorage} from './utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QUIZZ} from '../data/quiz';

export const QuizzContext = createContext({
  quizz: [],
});

export const QuizzProvider = ({children}) => {
  const [quizz, setQuizz] = useState([]);

  useEffect(() => {
    const initQuizz = async () => {
      try {
        const data = await getQuizzData();
        if (data.length === 0) {
          await saveQuizzToAsyncStorage(QUIZZ);
          data = await getQuizzData();
        }
        setQuizz(data);
        //   console.log('SAVED QUIZZ FROM ASYNC STORAGE---', data);
      } catch (error) {
        // console.error('Error initializing quizz data:', error);
        console.log('Error initializing quizz data:', error);
      }
    };

    initQuizz();
  }, []);

  const unlockNextLevel = async id => {
    const currentQuizzIndex = quizz.findIndex(item => item.id === id);
    if (currentQuizzIndex !== -1 && currentQuizzIndex + 1 < quizz.length) {
      //   const nextQuizzId = quizz[currentQuizz + 1].id;
      //   setQuizz(prevQuizzes =>
      //     prevQuizzes.map(quiz =>
      //       quiz.id === nextQuizzId ? {...quiz, isLocked: false} : quiz,
      //     ),
      //   );
      const updatedQuizz = quizz.map((quiz, index) =>
        index === currentQuizzIndex + 1 ? {...quiz, isLocked: false} : quiz,
      );
      setQuizz(updatedQuizz);
      await saveQuizzToAsyncStorage(updatedQuizz);
    }
  };

  const value = {quizz, unlockNextLevel};
  return (
    <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
  );
};
