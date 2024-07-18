import {Text, View} from 'react-native';
import {useState} from 'react';
import {CustomInput, MyButton} from '../ui';
import {updateUserData} from '../Utils/userUtils';
import styles from './styles';
import {COLORS} from '../../constants/colors';

const UserDetails = ({user}) => {
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
            <Text style={{color: COLORS.shark}}>SAVE</Text>
          </MyButton>
        </View>
      ) : (
        <MyButton onPressFn={() => setIsNameToChange(true)}>
          <Text style={styles.nameStyle}>{newName}</Text>
        </MyButton>
      )}
    </View>
  );
};

export default UserDetails;
