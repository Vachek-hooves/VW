import { Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CustomInput, MyButton} from '../ui';
import styles from './styles';
import { updateUserData } from '../Utils/userUtils';

const UserDetails = ({user}) => {
  const [isNameToChange, setIsNameToChange] = useState(false);
  const [newName, setNewName] = useState(user.name);
//   const [image, setImage] = useState(user.image);

  useEffect(() => {
    setImage(user.image);
  }, [user]);

  const nameChangeHandler = async () => {
    await updateUserData('name', newName);
    setIsNameToChange(false);
  };

  const imageChangeHandler = async image => {
    setImage(image);
    await updateUserData('image', image);
  };

  return (
    <View style={styles.rootContainer}>
      {isNameToChange ? (
        <View style={styles.renameContainer}>
          <CustomInput
            label="New Name"
            styleText={styles.inputText}
            style={styles.textInput}
            value={newName}
            onChangeText={setNewName}
          />
          <MyButton
            btnContainer={{alignItems: 'center', justifyContent: 'center'}}
            btnText={{paddingTop: 20}}
            onPressFn={nameChangeHandler}>
            <Text>SAVE</Text>
          </MyButton>
        </View>
      ) : (
        <MyButton onPressFn={() => setIsNameToChange(true)}>
          <Text style={styles.nameStyle}>{newName}</Text>
        </MyButton>
      )}

      {/* <ImagePicker handleImage={imageChangeHandler}>
        <View style={styles.imageContainer}>
          {image.length === 0 ? (
            <Text>Press to choose Image</Text>
          ) : (
            <Image source={{uri: image[0]}} style={styles.image} />
          )}
        </View>
      </ImagePicker> */}
    </View>
  );
};

export default UserDetails;

// const styles = StyleSheet.create({});
