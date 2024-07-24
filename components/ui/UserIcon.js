import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';

const UserIcon = ({style}) => {
  const navigation = useNavigation();
  function navigateUserScreen() {
    navigation.navigate('UserScreen');
  }
  return (
    <TouchableOpacity onPress={navigateUserScreen}>
      <Image
        source={require('../../assets/img/icons/user1.png')}
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

export default UserIcon;
