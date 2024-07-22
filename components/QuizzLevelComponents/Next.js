import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import {COLORS} from '../../constants/colors';

const Next = ({onPress}) => {
  const {width, height} = Dimensions.get('window');
  const isSmallScreen = height < 700;
  const isSmallWidth = width < 400;

  return (
    <TouchableOpacity onPress={onPress} style={styles.nextContainerBtn}>
      <Text style={styles.nextText}>Next</Text>
    </TouchableOpacity>
  );
};

export default Next;

const styles = StyleSheet.create({
  nextContainerBtn: {
    marginTop: 20,
    width: '100%',
    padding: 10,
    borderRadius: 16,
    backgroundColor: COLORS.gulfStream,
    alignSelf: 'center',
  },
  nextText: {
    fontSize: 30,
    textAlign: 'center',
    color: COLORS.shark,
    fontWeight: '800',
    letterSpacing: 3,
  },
});
