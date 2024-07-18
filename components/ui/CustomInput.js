import {StyleSheet, Text, View, TextInput} from 'react-native';

const CustomInput = ({
  label,
  styleContainer,
  styleText,
  styleInput,
  onChangeText,
  value,
  keyboardType,
}) => {
  return (
    <View style={styleContainer}>
      <Text style={styleText}>{label}</Text>
      <TextInput
        style={styleInput}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
