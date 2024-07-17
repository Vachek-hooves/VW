import {StyleSheet, Text, View, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';
import {LoseIcon, MyButton, WinIcon} from '../ui';
import {useState} from 'react';
import MysticStory from './MysticStory';

const CustomModal = ({restart, result, length, story}) => {
  const [mysticModal, setMysticModal] = useState(false);
  const navigation = useNavigation();
  const summary = result == length;
  function navigateMainMenu() {
    navigation.navigate('GameScreen');
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        {summary ? <WinIcon /> : <LoseIcon />}
        <View>
          {summary ? (
            <WinText result={result} openModal={() => setMysticModal(true)} />
          ) : (
            <LoseText result={result} length={length} />
          )}
        </View>
        <View style={styles.btnContainer}>
          <MyButton onPressFn={restart} btnStyle={styles.btnStyle}>
            <Text style={styles.btnText}>Try Again</Text>
          </MyButton>
          <MyButton onPressFn={navigateMainMenu} btnStyle={styles.btnStyle}>
            <Text style={styles.btnText}>Main Menu</Text>
          </MyButton>
        </View>
      </View>
      <Modal transparent={false} visible={mysticModal}>
        <MysticStory story={story} closeModal={() => setMysticModal(false)} />
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.shark + 90,
  },
  subContainer: {
    borderWidth: 1,
    borderColor: COLORS.beige,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: COLORS.shuttleGray,
  },
  text: {
    fontSize: 18,
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

export const LoseText = ({result, length}) => {
  return (
    <View style={{alignItems: 'center', gap: 4}}>
      <Text
        style={{
          color: COLORS.red,
          fontSize: 20,
          fontWeight: 'bold',
          letterSpacing: 2,
          marginVertical: 15,
        }}>
        Unfortunately, you LOSE!!
      </Text>
      <View style={{alignItems: 'center', gap: 4}}>
        <Text
          style={{fontSize: 20, color: COLORS.ebonyClay, fontWeight: '600'}}>
          You guess <Text style={{color: COLORS.red}}>{result} </Text> of
        </Text>
        <Text
          style={{fontSize: 20, color: COLORS.ebonyClay, fontWeight: '600'}}>
          <Text style={{color: COLORS.green}}>{length}</Text> answers
        </Text>
      </View>
    </View>
  );
};

export const WinText = ({result, openModal}) => {
  return (
    <View style={{alignItems: 'center', padding: 30}}>
      <Text style={{fontSize: 24, marginVertical: 10}}>Congrats!</Text>
      <Text
        style={{
          fontSize: 36,
          fontWeight: '700',
          letterSpacing: 2,
          color: COLORS.green,
        }}>
        Score {result}
      </Text>
      <Text style={{fontSize: 18, marginVertical: 10}}>
        Quiz completed successfully.
      </Text>
      <Text>You open mystic story about this topic</Text>
      <MyButton
        onPressFn={openModal}
        btnStyle={{
          borderWidth: 1,
          marginVertical: 10,
          borderWidth: 2,
          padding: 10,
          borderRadius: 20,
          borderColor: COLORS.gulfStream,
          alignItems: 'center',
          backgroundColor: COLORS.gulfStream,
        }}>
        <Text style={{fontSize: 18, fontWeight: '500', color: COLORS.iron}}>
          READ
        </Text>
      </MyButton>
    </View>
  );
};
