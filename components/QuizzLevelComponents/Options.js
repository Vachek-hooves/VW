import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Options = ({
  options,
  onPress,
  isDisable,
  correctOption,
  currentOption,
}) => {
  function renderOptionsList({item}) {
    // console.log(correctOption)
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        disabled={isDisable}
        style={[
          styles.optionsContainer,
          {
            borderColor:
              item == correctOption
                ? 'green'
                : item == currentOption
                ? 'red'
                : 'purple',
            backgroundColor:
              item == correctOption
                ? 'green'
                : item == currentOption
                ? 'red'
                : 'purple',
          },
        ]}>
        <Text style={styles.textStyle}>{item}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View>
      <FlatList
        data={options}
        keyExtractor={item => item}
        renderItem={renderOptionsList}
      />
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: 'rgba(184, 25, 37, 1)',
  },
  optionsContainer: {
    borderWidth: 5,
    height: 80,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
