import {Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const BackIcon = ({style}) => {
  const navigation = useNavigation();
  function backNav() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity onPress={backNav}>
      <Image
        source={require('../../assets/img/icons/back.png')}
        style={[
          style,
          {
            width: 40,
            height: 40,
            tintColor: COLORS.beige,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default BackIcon;
