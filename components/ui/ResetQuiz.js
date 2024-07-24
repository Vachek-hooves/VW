import {Image, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {COLORS} from '../../constants/colors';
import {QuizzContext} from '../../store/quizz_context';

const ResetQuiz = () => {
  const {resetQuizzHandle} = useContext(QuizzContext);
  function resetQuizz() {
    resetQuizzHandle();
  }
  return (
    <TouchableOpacity onPress={resetQuizz}>
      <Image
        source={require('../../assets/img/icons/reset.png')}
        style={{width: 50, height: 50, tintColor: COLORS.beige}}
      />
    </TouchableOpacity>
  );
};

export default ResetQuiz;
