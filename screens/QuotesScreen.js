import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from 'react-native';
import {useContext, useState, useEffect} from 'react';
import {QuizzContext} from '../store/quizz_context';
import {COLORS} from '../constants/colors';
import {quizOptions} from '../data/quizOptions';
import {MyButton, ResetIcon} from '../components/ui';
import {CustomModal, MysticStory} from '../components/QuizzLevelComponents';
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
  console.log(QUESTIONS.length);

  useEffect(() => {
    if (QUESTIONS.length === 0) {
      setCompleteGameModal(true);
    } else {
      setCompleteGameModal(false);
    }
  }, [QUESTIONS]);

  const validation = item => {
    const choosenAuthor = item.author;
    setPickedImage(item.author);
    console.log('CHOOSEN AUTHOR--', choosenAuthor);
    console.log('CORRECT AUTHOR---', quizOptions[currentQuoteIndex]?.author);
    if (choosenAuthor === quizOptions[currentQuoteIndex].author) {
      console.log('CONGRATULATION YOU FIND THE AUTHOR OF QUOTE');
      setCorrectAuthorId(item.id);
      setActiveNextBtn(true);
    }
  };

  const nextQuoteHandler = () => {
    // if (currentQuoteIndex == quizOptions.length - 1) {
    console.log(QUESTIONS.length);
    if (QUESTIONS.length <= 1) {
      console.log(currentQuoteIndex, quizOptions.length - 1);
      console.log('FINALLLY YOU HAVE PASSED THIS LEVEL');
      quoteRemoveHandler(correctAuthorId);
      setCompleteGameModal(true);
      // setIsModal(true);
    } else {
      setQuoteIndex(currentQuoteIndex + 1);
      setActiveNextBtn(false);
      // console.log('inside next btn handler--', correctAuthorId);
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
    // console.log(item.author);
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

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{gap: 120}}>
          {QUESTIONS.length !== 0 && (
            <View style={styles.quoteContainer}>
              <Text style={styles.quoteText}>
                {quotesOptions[currentQuoteIndex]}
              </Text>
            </View>
          )}
          <View style={{alignItems: 'center'}}>
            <FlatList
              data={QUESTIONS}
              keyExtractor={item => item.id.toString()}
              renderItem={renderQuestion}
              horizontal={true}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            gap: 30,
          }}>
          {activeNextBtn && <NextButton onPress={nextQuoteHandler} />}
          <MyButton
            onPressFn={resetLevel}
            btnStyle={{marginHorizontal: 50, marginBottom: 30}}>
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
        {/* <Modal visible={isModal} animationType="slide" transparent={true}>
          <ModalStory story={STORY} closeModal={() => setIsModal(false)} />
        </Modal> */}
      </SafeAreaView>
    </View>
  );
};

export default QuotesScreen;

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: COLORS.shark, padding: 20, flex: 1},
  quoteContainer: {
    marginTop: 100,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: COLORS.gulfStream,
    height: 250,
  },
  quoteText: {textAlign: 'center', fontSize: 32, color: COLORS.iron},
});

export const NextButton = ({onPress}) => {
  return (
    <MyButton
      onPressFn={onPress}
      btnStyle={{
        marginTop: 30,
        width: '100%',
        padding: 15,
        borderRadius: 16,
        backgroundColor: COLORS.gulfStream,
        // position: 'absolute',
        // top: 170,
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
