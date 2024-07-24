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
  Progress,
} from '../components/QuizzLevelComponents';
import {COLORS} from '../constants/colors';

const QuizzLevelScreen = ({route}) => {
  const {quizz, unlockNextLevel} = useContext(QuizzContext);
  const QUIZZ_ID = route.params.quizzId;
  const QUIZZ = quizz.find(item => item.id === QUIZZ_ID);
  const questionsLength = QUIZZ.allQuestions.length;
  const story = QUIZZ.misticStory;

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
      // console.log(result, questionsLength);
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
      console.log(currentQestionIndex, questionsLength - 1);
      setModal(true);
    } else {
      setCurrentQuestionIndex(currentQestionIndex + 1);
      setCurrentOption(null);
      setCorrectOption(null);
      setIsOptionDisabled(false);
      setNext(false);
    }

    Animated.timing(progress, {
      toValue: currentQestionIndex + 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const progressAnim = progress.interpolate({
    inputRange: [0, questionsLength],
    outputRange: ['0%', '100%'],
  });

  const restartLevel = () => {
    console.log('RESTART FUNCTION');
    setModal(false);
    setCurrentQuestionIndex(0);
    setResult(0);
    setCurrentOption(null);
    setCorrectOption(null);
    setIsOptionDisabled(false);
    setNext(false);

    Animated.timing(progress, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  // const {width, height} = Dimensions.get('window');
  // const isSmallScreen = height < 700;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.mainTimber}}>
      <View style={styles.mainContainer}>
        <Progress
          index={currentQestionIndex + 1}
          progress={progressAnim}
          length={questionsLength}
        />
        <Question
          questionIndex={currentQestionIndex + 1}
          length={questionsLength}
          score={result}>
          <Text style={styles.questionContainer}>
            {QUIZZ.allQuestions[currentQestionIndex].question}
          </Text>
        </Question>
        <Options
          options={QUIZZ.allQuestions[currentQestionIndex].options}
          onPress={validation}
          isDisable={isOptionDisabled}
          correctOption={correctOption}
          currentOption={currentOption}
          activeNextBtn={next}
        />
        {next && <Next onPress={nextQuestionHandle} />}
        <Modal visible={modal} animationType="slide" transparent={true}>
          <CustomModal
            story={story}
            restart={restartLevel}
            result={result}
            length={questionsLength}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default QuizzLevelScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.mainTimber,
  },
  questionContainer: {
    color: COLORS.iron,
    fontSize: 18,
    textAlign: 'center',
    bottom: 40,
  },
});
