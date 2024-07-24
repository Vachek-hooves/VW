import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: COLORS.mainTimber,
    justifyContent: 'center',
    padding: 25,
  },
  imageContainer: {
    width: 180,
    height: 220,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  renameSaveBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.beige,
    padding: 10,
    borderRadius: 20,
    borderColor: COLORS.gulfStream,
    backgroundColor: COLORS.gulfStream,
    width: 100,
    marginVertical: 10,
  },
  changeInputText: {
    color: COLORS.beige,
    fontSize: 22,
  },
  changeInputStyle: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    marginVertical: 20,
    borderColor: COLORS.gulfStream,
    width: 220,
    color: COLORS.beige,
    fontSize: 24,
  },
  changeInputContainer: {
    // marginVertical: 20,
    color: COLORS.beige,
  },
  renameContainer: {
    alignItems: 'center',
  },
  // user screen components styles
  btnStyle: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    borderColor: COLORS.gulfStream,
    alignItems: 'center',
    flex: 1,
  },
});
export default styles;
