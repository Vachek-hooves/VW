import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/colors';

const QuotesScreen = ({route}) => {
  const QUOTES = route.params.data;
  // const IMAGES = QUOTES.map(quote => quote.questions.map(item => item.image));
  const IMAGES = QUOTES.flatMap(quiz =>
    quiz.questions.map(question => question.image),
  );
  console.log(IMAGES);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        {IMAGES.map((image, index) => (
          <Image
            key={index}
            source={{uri: image}}
            style={{height: 100, width: 100}}
          />
        ))}
      </SafeAreaView>
    </View>
  );
};

export default QuotesScreen;

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: COLORS.shark, flex: 1, padding: 10},
});
