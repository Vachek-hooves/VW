import {StyleSheet, Text, View, Animated, ImageBackground} from 'react-native';
import {useRef, useEffect} from 'react';
import {COLORS} from '../constants/colors';

const Intro = ({navigation}) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainScreen'));
  }, [fadeAnimation]);

  return (
    <ImageBackground
      source={require('../assets/img/bg/app_bg2.jpg')}
      style={{flex: 1}}>
      <View style={styles.rootContainer}>
        <Animated.View style={[{opacity: fadeAnimation}, styles.subContainer]}>
          <Text style={styles.mainText}>Please Welcome</Text>
          <Text style={styles.mainText}>Velden am Wörther See</Text>
          <Text style={styles.mainText}>Quizz</Text>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default Intro;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.shark+90,
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
    color: COLORS.iron,
    fontSize: 38,
    textAlign: 'center',
    fontWeight: '800',
  },
  midText: {
    color: COLORS.yellow2,
    fontSize: 42,
    textAlign: 'center',
  },
});
