import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {QuizzContext} from '../store/quizz_context';
import {useContext} from 'react';
import {Level} from '../components/GameScreenComponents';
import {COLORS} from '../constants/colors';
import {QuoteLevel} from '../components/QuotesComponens';
import {BackIcon} from '../components/ui';
import ResetQuiz from '../components/ui/ResetQuiz';
const GameScreen = () => {
  const {quizz, quotes} = useContext(QuizzContext);

  const isAllUnlock = () => {
    const lockArray = quizz.map(item => item.isLocked);
    return lockArray.every(item => item === false);
  };

  function renderQuizzLevels({item}) {
    return <Level data={item} />;
  }

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={quizz}
          keyExtractor={item => item.id.toString()}
          renderItem={renderQuizzLevels}
          showsVerticalScrollIndicator={false}
        />
        {/* <QuoteLevel /> */}
        {isAllUnlock() && <QuoteLevel data={quotes} />}
      </SafeAreaView>
      <View
        style={{
          marginBottom: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 30,
        }}>
        <BackIcon />
        <ResetQuiz />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.mainTimber,
    flex: 1,
    padding: 10,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.mainTimber,
    marginTop: 80,
  },
});
