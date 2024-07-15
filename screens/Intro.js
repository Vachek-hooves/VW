import {StyleSheet, Text, View, Animated} from 'react-native';
import {useRef, useEffect} from 'react';
import {COLORS} from '../constants/colors';

const Intro = ({navigation}) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainScreen'));
  }, [fadeAnimation]);

  return (
    <View style={styles.rootContainer}>
      <Animated.View style={[{opacity: fadeAnimation}, styles.subContainer]}>
        {/* <Text style={styles.mainText}>Discover </Text> */}
        {/* <Text style={styles.midText}>the</Text> */}
        <Text style={styles.mainText}>Velden</Text>
      </Animated.View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.blue,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    color: COLORS.GOLD,
    fontSize: 62,
    marginVertical: 20,
    gap: 50,
  },
  mainText: {
    color: COLORS.yellow2,
    fontSize: 42,
    textAlign: 'center',
    fontWeight: '800',
  },
  midText: {
    color: COLORS.yellow2,
    fontSize: 42,
    textAlign: 'center',
  },
});
