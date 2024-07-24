import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
} from 'react-native';
import {useContext, useState, useEffect} from 'react';
import {QuizzContext} from '../store/quizz_context';
import {COLORS} from '../constants/colors';
import {quizOptions} from '../data/quizOptions';
import {MyButton, ResetIcon} from '../components/ui';
import {MysticStory} from '../components/QuizzLevelComponents';
import {WinModal} from '../components/QuotesComponens';

const QuotesScreen = () => {
  const {quotes, quoteRemoveHandler, resetQuotesLevel} =
    useContext(QuizzContext);
  const QUESTIONS = quotes[0]?.questions || [];
  const STORY = quotes[0]?.misticStory;
  const quotesOptions = quizOptions.map(option => option.quote);

  const [currentQuoteIndex, setQuoteIndex] = useState(0);
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [correctAuthorId, setCorrectAuthorId] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [comleteGameModa, setCompleteGameModal] = useState(false);
  const [pickedImage, setPickedImage] = useState(null);

  useEffect(() => {
    if (QUESTIONS.length === 0) {
      setCompleteGameModal(true);
    } else {
      setCompleteGameModal(false);
    }
  }, [QUESTIONS]);

  const validation = item => {
    const choosenAuthor = item.author;
    console.log(choosenAuthor, '--', quizOptions[currentQuoteIndex].author);
    console.log(quizOptions.slice(-QUESTIONS.length)[0].author);

    setPickedImage(item.author);
    // if (choosenAuthor === quizOptions[currentQuoteIndex].author) {
    if (choosenAuthor === quizOptions.slice(-QUESTIONS.length)[0].author) {
      setCorrectAuthorId(item.id);
      setActiveNextBtn(true);
    }
  };

  const nextQuoteHandler = () => {
    if (QUESTIONS.length <= 1) {
      quoteRemoveHandler(correctAuthorId);
      setCompleteGameModal(true);
    } else {
      setQuoteIndex(currentQuoteIndex + 1);
      setActiveNextBtn(false);
      quoteRemoveHandler(correctAuthorId);
    }
  };

  function resetLevel() {
    setIsModal(false);
    setCorrectAuthorId(null);
    setQuoteIndex(0);
    setActiveNextBtn(false);
    setCompleteGameModal(false);
    setPickedImage(null);
    resetQuotesLevel();
  }

  function renderQuestion({item}) {
    return (
      <TouchableOpacity
        disabled={activeNextBtn}
        onPress={() => validation(item)}
        style={{
          borderWidth: pickedImage == item.author ? 3 : 1,
          marginHorizontal: 7,
          borderColor:
            pickedImage == item.author ? COLORS.beige : COLORS.gulfStream,
          padding: 2,
          borderRadius: 20,
          overflow: 'hidden',
          margin: 2,
        }}>
        <ImageBackground
          source={{uri: item.image}}
          style={{
            width: 100,
            height: 100,
          }}
          imageStyle={{borderRadius: 20}}>
          <View style={{flex: 1, backgroundColor: COLORS.gre + 90}}></View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  const {width, height} = Dimensions.get('window');
  const isSmallScreen = height < 700;
  const isSmallWidth = width < 400;

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flex: 1, gap: 50}}>
          {QUESTIONS.length !== 0 && (
            <View style={styles.quoteContainer}>
              <Text style={styles.quoteText}>
                {/* {quotesOptions[currentQuoteIndex]} */}
                {quotesOptions.slice(-QUESTIONS.length)[0]}
              </Text>
            </View>
          )}
          <View style={{alignItems: 'center'}}>
            <FlatList
              data={QUESTIONS}
              keyExtractor={item => item.id.toString()}
              renderItem={renderQuestion}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            gap: isSmallWidth ? 25 : 30,
          }}>
          {activeNextBtn && <NextButton onPress={nextQuoteHandler} />}
          <MyButton
            onPressFn={resetLevel}
            btnStyle={{marginHorizontal: 50, marginBottom: 20}}>
            <ResetIcon />
          </MyButton>
        </View>
        <Modal
          visible={comleteGameModa}
          animationType="slide"
          transparent={true}>
          <WinModal
            story={STORY}
            restart={resetLevel}
            mysticModalOpen={() => {
              setIsModal(true);
            }}
          />
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default QuotesScreen;

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: COLORS.shark, padding: 20, flex: 1},
  quoteContainer: {
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: COLORS.gulfStream,
    height: 260,
  },
  quoteText: {textAlign: 'center', fontSize: 28, color: COLORS.iron},
});

export const NextButton = ({onPress}) => {
  return (
    <MyButton
      onPressFn={onPress}
      btnStyle={{
        marginTop: 30,
        width: '100%',
        padding: 10,
        borderRadius: 16,
        backgroundColor: COLORS.gulfStream,
      }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          color: COLORS.shark,
          fontWeight: '800',
          letterSpacing: 2,
        }}>
        Next quote
      </Text>
    </MyButton>
  );
};

export const ModalStory = ({story, closeModal}) => {
  return <MysticStory story={story} closeModal={closeModal} />;
};
