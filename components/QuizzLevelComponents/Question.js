import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Question = ({children, questionIndex, length}) => {
  return (
    <View>
      <View>
        <Text>{questionIndex}</Text>
        <Text>/{length}</Text>
      </View>
      <Text>{children}</Text>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({});
