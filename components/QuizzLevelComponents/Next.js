import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Next = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.nextContainerBtn}>
      <Text style={styles.nextText}>Next</Text>
    </TouchableOpacity>
  );
};

export default Next;

const styles = StyleSheet.create({
  nextContainerBtn: {
    marginTop: 20,
    width: '100%',
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'yellow',
  },
  nextText: {
    fontSize: 24,
    textAlign: 'center',
  },
});
