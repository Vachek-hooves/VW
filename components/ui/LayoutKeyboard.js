import {SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';

const LayoutKeyboard = ({children}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default LayoutKeyboard;
