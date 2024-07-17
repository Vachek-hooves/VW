import {View, Image} from 'react-native';

const LoseIcon = () => {
  return (
    <View>
      <Image
        source={require('../../assets/img/icons/lose.png')}
        style={{width: 90, height: 90}}
      />
    </View>
  );
};

export default LoseIcon;
