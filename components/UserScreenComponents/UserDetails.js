import {Text, View} from 'react-native';
import {useState} from 'react';
import {CustomInput, MyButton} from '../ui';
import {useNavigation} from '@react-navigation/native';
import {updateUserData} from '../Utils/userUtils';
import {COLORS} from '../../constants/colors';
import styles from './styles';

const UserDetails = ({user}) => {
  const navigation = useNavigation();
  const [isNameToChange, setIsNameToChange] = useState(false);
  const [newName, setNewName] = useState(user.name);

  const nameChangeHandler = async () => {
    await updateUserData('name', newName);
    setIsNameToChange(false);
  };

  return (
    <View style={styles.rootContainer}>
      {isNameToChange ? (
        <View style={styles.renameContainer}>
          <CustomInput
            label="New Name"
            styleText={styles.changeInputText}
            styleInput={styles.changeInputStyle}
            styleContainer={styles.changeInputContainer}
            value={newName}
            onChangeText={setNewName}
          />
          <MyButton
            btnStyle={styles.renameSaveBtn}
            onPressFn={nameChangeHandler}>
            <Text style={{color: COLORS.shark, fontSize: 22}}>SAVE</Text>
          </MyButton>
        </View>
      ) : (
        <View style={{alignItems: 'center'}}>
          <MyButton onPressFn={() => setIsNameToChange(true)}>
            <Text style={{fontSize: 42, color: COLORS.beige}}>{newName}</Text>
          </MyButton>
          <MyButton
            btnStyle={{
              borderWidth: 2,
              padding: 10,
              borderRadius: 20,
              borderColor: COLORS.gulfStream,
              alignItems: 'center',
              marginVertical: 30,
            }}
            onPressFn={() => navigation.replace('MainScreen')}>
            <Text style={{color: COLORS.beige, fontSize: 22}}>Main Menu</Text>
          </MyButton>
        </View>
      )}
    </View>
  );
};

export default UserDetails;
