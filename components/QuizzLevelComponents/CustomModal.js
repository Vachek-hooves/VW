import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomModal = ({restart, result, length}) => {
  const navigation = useNavigation();
  function navigateMainMenu() {
    navigation.navigate('GameScreen');
  }

  return (
    <View>
      <View>
        <Text>{result}</Text>
        <Text>of</Text>
        <Text>{length}</Text>
      </View>
      <TouchableOpacity onPress={restart}>Try Again</TouchableOpacity>
      <TouchableOpacity onPress={navigateMainMenu}>Main Menu</TouchableOpacity>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({});
