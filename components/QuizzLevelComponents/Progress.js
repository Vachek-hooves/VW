import {StyleSheet, Text, View, Animated} from 'react-native';
import {COLORS} from '../../constants/colors';
const Progress = ({progress, index, length}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.progress,
            {
              width: progress,
            },
          ]}></Animated.View>
      </View>
      <Text style={styles.text}>
        {index} / {length}
      </Text>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    marginHorizontal: 20,
    padding: 5,
    backgroundColor: COLORS.shuttleGray,
    height: 30,
    marginTop: 30,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  container: {
    width: '80%',
    height: 20,
    borderRadius: 20,
    // backgroundColor: COLORS.shuttleGray,
    justifyContent: 'center',
    marginVertical: 30,
    backgroundColor: COLORS.shark,
  },
  progress: {
    height: 20,
    borderRadius: 20,
    // backgroundColor: COLORS.beige,
    backgroundColor: COLORS.gulfStream,
  },
  text: {
    fontSize: 16,
    color: COLORS.iron,
    marginHorizontal: 15,
  },
});
