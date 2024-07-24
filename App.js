import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {QuizzProvider} from './store/quizz_context';
import {
  GameScreen,
  MainScreen,
  QuizzLevelScreen,
  QuotesScreen,
  RulesScreen,
  UserScreen,
} from './screens';
import {useRef, useState, useEffect} from 'react';
import {Animated, View} from 'react-native';

const Stack = createNativeStackNavigator();

const images = [
  require('./assets/img/bg/bg1.jpg'),
  require('./assets/img/bg/bg2.jpg'),
];

function App() {
  const [index, setIndex] = useState(0);
  const fadeElement = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeStart();
    const timeOut = setTimeout(() => {
      navigateToMenu();
    }, 6000);
    return () => clearTimeout(timeOut);
  }, []);

  const fadeStart = () => {
    Animated.timing(fadeElement, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => fadeFinish());
  };

  const fadeFinish = () => {
    Animated.timing(fadeElement, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setIndex(prevState => prevState + 1);
      fadeStart();
    });
  };
  const navigateToMenu = () => {
    setIndex(2);
  };

  return (
    <QuizzProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {index < 2 ? (
            <Stack.Screen name="Welcome" options={{headerShown: false}}>
              {() => (
                <View style={{flex: 1}}>
                  <Animated.Image
                    source={images[index]}
                    style={[{width: '100%', flex: 1}, {opacity: fadeElement}]}
                  />
                </View>
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="MainScreen" component={MainScreen} />
          )}
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="RulesScreen" component={RulesScreen} />
          <Stack.Screen name="QuizzLevelScreen" component={QuizzLevelScreen} />
          <Stack.Screen name="QuotesScreen" component={QuotesScreen} />
          <Stack.Screen name="UserScreen" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QuizzProvider>
  );
}

export default App;
