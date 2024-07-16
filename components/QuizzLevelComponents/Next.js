import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/colors';

const Next = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.nextContainerBtn}>
      <Text style={styles.nextText}>Next</Text>
    </TouchableOpacity>
  );
};

export default Next;

const styles = StyleSheet.create({
  nextContainerBtn: {
    marginTop: 30,
    width: '100%',
    padding: 15,
    borderRadius: 16,
    backgroundColor: COLORS.gulfStream,
  },
  nextText: {
    fontSize: 30,
    textAlign: 'center',
    color: COLORS.shark,
    fontWeight: '800',
    letterSpacing: 3,
  },
});
