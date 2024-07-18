import AsyncStorage from '@react-native-async-storage/async-storage';

export const submitUserDataInputs = async (userData) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  } catch (error) {
    console.error('Failed to save user data:', error);
  }
};

export const fetchUserData = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
};

export const updateUserData = async (key, value) => {
  try {
    const user = await fetchUserData();
    if (user) {
      user[key] = value;
      await AsyncStorage.setItem('user', JSON.stringify(user));
    }
  } catch (error) {
    console.error(`Failed to update user ${key}:`, error);
  }
};
