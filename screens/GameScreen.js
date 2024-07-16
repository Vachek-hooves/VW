import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {QuizzContext} from '../store/quizz_context';
import {useContext} from 'react';
import {Level} from '../components/GameScreenComponents';
import {COLORS} from '../constants/colors';
const GameScreen = () => {
  const {quizz} = useContext(QuizzContext);

  //   console.log('Game Screen---', quizz);
  function renderQuizzLevels({item}) {
    // console.log(item);
    return <Level data={item} />;
  }

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView
        style={{
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.shark,
          // padding: 10,
          marginTop: 200,
        }}>
        <FlatList
          data={quizz}
          key={item => item.id}
          renderItem={renderQuizzLevels}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.shark,
    flex: 1,
    padding: 10,
  },
});
