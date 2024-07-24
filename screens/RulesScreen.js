import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import {BackIcon} from '../components/ui';

const RulesScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.mainShuttleGray,
        padding: 15,
      }}>
      <SafeAreaView style={{marginBottom: 150}}>
        <Text style={styles.header}>
          Rules and Instructions for Velden Quiz
        </Text>
        <ScrollView>
          <Text style={styles.subText}>How to Play</Text>
          <Text style={styles.subText}>
            Choose one of the five unique quiz topics related to
            Velden-am-Wörther-See:
          </Text>
          <Text style={styles.descrText}>
            * Artists of Velden-am-Wörther-See
          </Text>
          <Text style={styles.descrText}>
            * History of Velden-am-Wörther-See
          </Text>
          <Text style={styles.descrText}>
            * Famous Writers of Velden-am-Wörther-See
          </Text>
          <Text style={styles.descrText}>
            * Riddles about Velden-am-Wörther-See
          </Text>
          <Text style={styles.descrText}>
            Quotes about Velden-am-Wörther-See
          </Text>
          <Text style={styles.subText}>Answer Questions</Text>
          <Text style={styles.descrText}>
            Each topic contains 7-10 questions
          </Text>
          <Text style={styles.descrText}>
            Select the correct answer from the provided options.
          </Text>

          <Text style={styles.subText}>Score and Feedback</Text>
          <Text style={styles.descrText}>
            Correct answers will be highlighted in green
          </Text>
          <Text style={styles.descrText}>
            Incorrect answers will be highlighted in red
          </Text>
          <Text style={styles.subText}>Unlock Mystical Stories:</Text>
          <Text style={styles.descrText}>
            Achieve a certain score to unlock a mystical story about
            Velden-am-Wörther-See
          </Text>
          <Text style={styles.descrText}>
            Answer all questions correctly in a quiz to earn the coveted story
          </Text>
          <Text style={styles.subText}>Tips for Success</Text>

          <Text style={styles.descrText}>
            Take your time: Carefully read each question and the answer choices
          </Text>
          <Text style={styles.descrText}>
            Learn and have fun: Enjoy the process of learning more about the
            fascinating city of Velden-am-Wörther-See
          </Text>
          <Text style={styles.subText}>Enjoyment</Text>

          <Text style={styles.descrText}>
            Interactive Experience: The quiz is designed to be engaging and
            educational
          </Text>
          <Text style={styles.descrText}>
            Mystical Stories: Discover intriguing stories that add charm and
            entertainment to your experience
          </Text>
        </ScrollView>
        <View
          style={{alignItems: 'flex-end', marginRight: 60, marginBottom: 50}}>
          <BackIcon />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default RulesScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    color: COLORS.beige,
    textAlign: 'center',
  },
  subText: {
    color: COLORS.beige,
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 30,
  },
  descrText: {
    color: COLORS.beige,
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 5,
  },
});
