import {StyleSheet,TouchableOpacity, } from 'react-native';

const MyButton = ({children, btnStyle, onPressFn}) => {
  return (
    <TouchableOpacity style={btnStyle} activeOpacity={0.7} onPress={onPressFn}>
      {children}
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({});
