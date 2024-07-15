import {StyleSheet,  View, FlatList} from 'react-native';
import {QuizzContext} from '../store/quizz_context';
import {useContext} from 'react';
import {Level} from '../components/GameScreenComponents';
const GameScreen = () => {
  const {quizz} = useContext(QuizzContext);

  //   console.log('Game Screen---', quizz);
  function renderQuizzLevels({item}) {
    // console.log(item);
    return <Level data={item} />;
  }

  
  return (
    <View>
      <FlatList
        data={quizz}
        key={item => item.id}
        renderItem={renderQuizzLevels}
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
