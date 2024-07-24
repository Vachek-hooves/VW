import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {COLORS} from '../constants/colors';
import {MyButton, UserIcon} from '../components/ui';

const MainScreen = ({navigation}) => {
  function navigateGame() {
    navigation.navigate('GameScreen');
  }
  function navigateRules() {
    navigation.navigate('RulesScreen');
  }
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View
          style={{
            alignItems: 'flex-end',
            width: '100%',
            marginRight: 60,
            marginTop: 40,
          }}>
          <UserIcon />
        </View>
        <View style={{gap: 30, flex: 1, justifyContent: 'center'}}>
          <MyButton onPressFn={navigateGame} btnStyle={styles.btnStyle}>
            <Text style={styles.btnText}>Game</Text>
          </MyButton>
          <MyButton onPressFn={navigateRules} btnStyle={styles.btnStyle}>
            <Text style={styles.btnText}>Rules</Text>
          </MyButton>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 10,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.mainTimber,
    alignItems: 'center',
    gap: 45,
  },
  btnStyle: {
    padding: 50,
    backgroundColor: COLORS.beige,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 52,
    color: COLORS.ebonyClay,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
  },
});
