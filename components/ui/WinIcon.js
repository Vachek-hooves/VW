import {StyleSheet, Text, View, Image} from 'react-native';

const LoseIcon = () => {
  return (
    <View>
      <Image
        source={require('../../assets/img/icons/win.png')}
        style={{width: 120, height: 120}}
      />
    </View>
  );
};

export default LoseIcon;

const styles = StyleSheet.create({});
