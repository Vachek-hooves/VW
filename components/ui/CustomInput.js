import {StyleSheet, Text, View, TextInput} from 'react-native';

const CustomInput = ({
  label,
  styleContainer,
  styleText,
  style,
  onChangeText,
  value,
  maxLength,
  keyboardType,
}) => {
  return (
    <View style={styleContainer}>
      <Text style={styleText}>{label}</Text>
      <TextInput
        style={style}
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
