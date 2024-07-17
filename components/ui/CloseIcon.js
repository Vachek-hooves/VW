import {View, Image} from 'react-native';
import {COLORS} from '../../constants/colors';

const CloseIcon = () => {
  return (
    <View>
      <Image
        source={require('../../assets/img/icons/delete.png')}
        style={{
          width: 40,
          height: 40,
          tintColor: COLORS.beige,
        }}
      />
    </View>
  );
};

export default CloseIcon;
