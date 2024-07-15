import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Level = ({data}) => {
  const navigation = useNavigation();
  const THEME = data.theme;
  const DESCRIPTION = data.description;
  const isLocked = data.isLocked;

  function navigateToQuizz() {
    navigation.navigate('QuizzLevelScreen', {quizzId: data.id});
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={navigateToQuizz}
      disabled={isLocked}>
      <Text>{DESCRIPTION}</Text>
    </TouchableOpacity>
  );
};

export default Level;

const styles = StyleSheet.create({});
