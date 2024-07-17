import {Image} from 'react-native';
import {COLORS} from '../../constants/colors';

const ResetIcon = () => {
  return (
    // <View>
    <Image
      source={require('../../assets/img/icons/reset.png')}
      style={{width: 50, height: 50, tintColor: COLORS.beige}}
    />
    // </View>
  );
};

export default ResetIcon;
