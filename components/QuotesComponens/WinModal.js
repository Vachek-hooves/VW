import {StyleSheet, Text, View, Modal} from 'react-native';
import {COLORS} from '../../constants/colors';
import {MyButton, WinIcon} from '../ui';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ModalStory} from '../../screens/QuotesScreen';

const WinModal = ({restart, story}) => {
  console.log(story);
  const [isModal, setIsModal] = useState(false);
  const navigation = useNavigation();
  function navigateMainMenu() {
    navigation.navigate('GameScreen');
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <WinIcon />
        <View>
          <Text style={{marginTop: 30, fontSize: 24, textAlign: 'center'}}>
            CONGRATS!
          </Text>
          <Text style={{marginVertical: 10, fontSize: 24, textAlign: 'center'}}>
            You won this game
          </Text>
          <Text style={{marginVertical: 10, fontSize: 16, textAlign: 'center'}}>
            You open mystic story about this level
          </Text>
          <View style={{alignItems: 'center'}}>
            <MyButton
              onPressFn={() => setIsModal(true)}
              btnStyle={{
                borderWidth: 1,
                marginVertical: 10,
                borderWidth: 2,
                padding: 10,
                borderRadius: 20,
                borderColor: COLORS.gulfStream,
                alignItems: 'center',
                backgroundColor: COLORS.gulfStream,
                width: 100,
              }}>
              <Text
                style={{fontSize: 18, fontWeight: '500', color: COLORS.iron}}>
                Read
              </Text>
            </MyButton>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <MyButton onPressFn={restart} btnStyle={styles.btnStyle}>
            <Text style={styles.btnText}>Play Again</Text>
          </MyButton>
          <MyButton onPressFn={navigateMainMenu} btnStyle={styles.btnStyle}>
            <Text style={styles.btnText}>Main Menu</Text>
          </MyButton>
        </View>
      </View>
      <Modal visible={isModal} animationType="slide" transparent={true}>
        <ModalStory story={story} closeModal={() => setIsModal(false)} />
      </Modal>
    </View>
  );
};

export default WinModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.shark,
  },
  subContainer: {
    borderWidth: 1,
    borderColor: COLORS.beige,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: COLORS.shuttleGray,
    padding: 20,
  },
  btnContainer: {
    gap: 12,
    marginVertical: 20,
    flexDirection: 'row',
  },
  btnStyle: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    borderColor: COLORS.gulfStream,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.iron,
  },
});
