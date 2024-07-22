import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import {CloseIcon, MyButton} from '../ui';

const MysticStory = ({closeModal, story}) => {
  console.log(story);
  return (
    <ImageBackground
      source={require('../../assets/img/bg/mystic-story_bg2.jpg')}
      style={{flex: 1}}>
      <View style={{backgroundColor: COLORS.shark + 90, flex: 1, padding: 20}}>
        <SafeAreaView
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ScrollView>
            <Text
              style={{color: COLORS.iron, fontSize: 22, textAlign: 'center',lineHeight:30}}>
              {story}
            </Text>
          </ScrollView>
        </SafeAreaView>
        <View style={{width: '100%', alignItems: 'flex-end'}}>
          <MyButton
            onPressFn={closeModal}
            btnStyle={{marginHorizontal: 50, marginBottom: 30, marginTop: 20}}>
            <CloseIcon />
          </MyButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MysticStory;

const styles = StyleSheet.create({});
