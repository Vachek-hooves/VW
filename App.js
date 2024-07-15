import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {QuizzProvider} from './store/quizz_context';
import {
  GameScreen,
  Intro,
  MainScreen,
  QuizzLevelScreen,
  RulesScreen,
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <QuizzProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{headerShown: false}}
          />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="RulesScreen" component={RulesScreen} />
          <Stack.Screen
            name="QuizzLevelScreen"
            component={QuizzLevelScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QuizzProvider>
  );
}

export default App;
