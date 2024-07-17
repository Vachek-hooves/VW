import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';

const Question = ({children, score}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.contentContainer}>
          <Text style={{color: COLORS.iron}}>score</Text>
          <Text style={styles.text}>
            {score}
          </Text>
        </View>
      </View>
      {children}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.shuttleGray,
    padding: 10,
    borderRadius: 20,
    height: 245,
    // justifyContent: 'space-around',
    marginTop: 50,
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 50,
    // padding: 30,
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: COLORS.shark,
  },
  contentContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.shuttleGray,
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  text: {
    color: COLORS.gulfStream,
    fontWeight: '800',
    fontSize: 26,
  },
});
