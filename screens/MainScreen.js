import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors';
import {MyButton} from '../components/ui';

const MainScreen = ({navigation}) => {
  function navigateGame() {
    navigation.navigate('GameScreen');
  }
  function navigateRules() {
    navigation.navigate('RulesScreen');
  }
  return (
    <View style={styles.mainContainer}>
      <MyButton onPressFn={navigateGame}>
        <Text>Game</Text>
      </MyButton>
      <MyButton onPressFn={navigateRules}>
        <Text>Rules</Text>
      </MyButton>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: COLORS.blue,
    gap: 10,
  },
});
