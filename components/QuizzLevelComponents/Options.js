import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/colors';

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
                ? COLORS.green
                : item == currentOption
                ? 'red'
                : COLORS.shuttleGray,
            backgroundColor:
              item == correctOption
                ? COLORS.shark
                : item == currentOption
                ? COLORS.shark
                : COLORS.shark,
          },
        ]}>
        <Text
          style={[
            styles.textStyle,
            {
              color:
                item == correctOption
                  ? COLORS.green
                  : item == currentOption
                  ? COLORS.red
                  : COLORS.gulfStream,
            },
          ]}>
          {item}
        </Text>
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
    // color: COLORS.iron,
  },
  optionsContainer: {
    borderWidth: 5,
    height: 70,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 15,
  },
});
