import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';

const QuoteLevel = ({data}) => {
  const navigation = useNavigation();
  const isLocked = data[0]?.isLocked;
  const THEME = data[0]?.theme;
  function navigator() {
    navigation.navigate('QuotesScreen', {data});
  }

  return (
    <View style={{width: '100%'}}>
      <Text style={{textAlign: 'center', color: COLORS.beige, fontSize: 18}}>
        Bonus Level
      </Text>
      <TouchableOpacity
        onPress={navigator}
        style={[
          styles.container,
          {borderColor: isLocked ? COLORS.tuna : COLORS.beige},
        ]}>
        <Text
          style={[
            styles.text,
            {color: isLocked ? COLORS.iron + 50 : COLORS.iron},
          ]}>
          {THEME}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuoteLevel;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.beige,
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 20,
    // width: '100%',
    marginBottom: 100,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.iron,
    fontWeight: '700',
  },
});
