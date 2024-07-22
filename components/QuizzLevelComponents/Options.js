import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {COLORS} from '../../constants/colors';

const Options = ({
  options,
  onPress,
  isDisable,
  correctOption,
  currentOption,
  activeNextBtn,
}) => {
  const {width, height} = Dimensions.get('window');
  const calculateHeight = () => {
    if (height < 660) {
      return 50; // маленький екран
    } else if (height < 800) {
      return 60; // середній екран
    } else {
      return 70; // великий екран
    }
  };
  // const {width, height} = Dimensions.get('window');
  // const isSmallScreen = height < 600;
  function renderOptionsList({item}) {
    console.log(item);
    // console.log(correctOption)
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        disabled={isDisable}
        style={[
          styles.optionsContainer,
          // isSmallScreen && styles.smallScreenOptions,
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
            height: calculateHeight(),
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
        keyExtractor={(item, index) => index.toString()}
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
    // height: 70,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  smallScreenOptions: {
    height: 50,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
});
