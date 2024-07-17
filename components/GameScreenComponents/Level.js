import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';;

const Level = ({data}) => {
  const navigation = useNavigation();
  const THEME = data.theme;
  const DESCRIPTION = data.description;
  const isLocked = data.isLocked;

  function navigateToQuizz() {
    navigation.navigate('QuizzLevelScreen', {quizzId: data.id});
  }

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={navigateToQuizz}
        disabled={isLocked}
        style={[
          styles.container,
          {borderColor: isLocked ? COLORS.tuna : COLORS.beige},
        ]}>
        <Text
          style={[
            styles.text,
            {color: isLocked ? COLORS.iron + 50 : COLORS.iron},
          ]}>
          {DESCRIPTION}
        </Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default Level;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.beige,
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.iron,
    fontWeight: '700',
  },
});
