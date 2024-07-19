import {Text, View} from 'react-native';
import {
  fetchUserData,
  submitUserDataInputs,
} from '../components/Utils/userUtils';
import {CustomInput, LayoutKeyboard, MyButton} from '../components/ui';
import {useState, useEffect} from 'react';
import UserDetails from '../components/UserScreenComponents/UserDetails';
import styles from '../components/UserScreenComponents/styles';
import {COLORS} from '../constants/colors';

const setDateId = () => Date.now().toString();

const UserScreen = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [userInputs, setUserInputs] = useState({name: ''});
  console.log(userInputs);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchUserData();
      setUser(data);
    };
    fetchUser();
  }, []);

  const inputsSave = (identifier, newValue) => {
    setUserInputs(prev => ({...prev, [identifier]: newValue}));
  };

  const submit = async () => {
    const {name} = userInputs;
    if (!name.trim()) {
      Alert.alert('Oops', 'Name invalid');
      return;
    }

    const submitData = {userId: setDateId(), name};
    try {
      await submitUserDataInputs(submitData);
      const updatedData = await fetchUserData();
      setUser(updatedData);
    } catch (error) {
      console.error('Failed to submit user data:', error);
    }
  };

  const resetInputs = () => {
    setUserInputs({name: ''});
  };

  return (
    <View style={styles.rootContainer}>
      {user ? (
        <>
          <UserDetails user={user} />
        </>
      ) : (
        <LayoutKeyboard>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View>
              <CustomInput
                value={userInputs.name}
                onChangeText={value => inputsSave('name', value)}
                label="Nick Name"
                styleInput={{
                  padding: 10,
                  backgroundColor: COLORS.beige,
                  borderRadius: 20,
                  fontSize: 22,
                  width: 220,
                }}
                styleContainer={{marginVertical: 25}}
                styleText={{
                  marginBottom: 5,
                  fontSize: 22,
                  color: COLORS.beige,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'space-between',
                gap: 20,
                marginTop: 30,
              }}>
              <MyButton
                positionStyle={{marginTop: 60}}
                onPressFn={submit}
                btnStyle={styles.btnStyle}>
                <Text
                  style={{fontSize: 26, fontWeight: '500', color: COLORS.iron}}>
                  Submit
                </Text>
              </MyButton>
              <MyButton
                btnStyle={styles.btnStyle}
                positionStyle={{marginVertical: 20}}
                onPressFn={resetInputs}>
                <Text
                  style={{fontSize: 26, fontWeight: '500', color: COLORS.iron}}>
                  Reset
                </Text>
              </MyButton>
            </View>
          </View>
        </LayoutKeyboard>
      )}
    </View>
  );
};

export default UserScreen;
