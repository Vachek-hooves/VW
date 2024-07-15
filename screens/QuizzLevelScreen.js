import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
} from 'react-native';
import {QuizzContext} from '../store/quizz_context';
import {useContext, useEffect, useState} from 'react';
import {
  CustomModal,
  Next,
  Options,
  Question,
} from '../components/QuizzLevelComponents';

const QuizzLevelScreen = ({route}) => {
  const {quizz, unlockNextLevel} = useContext(QuizzContext);
  const QUIZZ_ID = route.params.quizzId;
  const QUIZZ = quizz.find(item => item.id === QUIZZ_ID);
  const questionsLength = QUIZZ.allQuestions.length;
  // console.log(QUIZZ.allQuestions[0].options);

  const [currentQestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [result, setResult] = useState(0);
  const [next, setNext] = useState(false);
  const [modal, setModal] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    if (result === questionsLength) {
      console.log(result, questionsLength);
      unlockNextLevel(QUIZZ_ID);
    }
  }, [modal]);

  const validation = choosenOption => {
    let correct = QUIZZ.allQuestions[currentQestionIndex]['answer'];
    console.log(correct, choosenOption);
    setCurrentOption(choosenOption);
    setCorrectOption(correct);
    setIsOptionDisabled(true);
    if (choosenOption === correct) {
      setResult(result + 1);
    }
    setNext(true);
  };

  const nextQuestionHandle = () => {
    if (currentQestionIndex == questionsLength - 1) {
      setModal(true);
    } else {
      setCurrentQuestionIndex(currentQestionIndex + 1);
      setCurrentOption(null);
      setCorrectOption(null);
      setIsOptionDisabled(false);
      setNext(false);
    }
  };

  const restartLevel = () => {
    console.log('RESTART FUNCTION');
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <SafeAreaView>
        <Question
          questionIndex={currentQestionIndex + 1}
          length={questionsLength}>
          {QUIZZ.allQuestions[currentQestionIndex].question}
        </Question>
        <Options
          options={QUIZZ.allQuestions[currentQestionIndex].options}
          onPress={validation}
          isDisable={isOptionDisabled}
          correctOption={correctOption}
          currentOption={currentOption}
        />
        {next && <Next onPress={nextQuestionHandle} />}
        <Modal visible={setModal} animationType="slide" transparent={true}>
          <CustomModal
            restart={restartLevel}
            result={result}
            length={questionsLength}
          />
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default QuizzLevelScreen;

const styles = StyleSheet.create({});
