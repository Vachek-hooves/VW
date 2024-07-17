import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {QuizzProvider} from './store/quizz_context';
import {
  GameScreen,
  Intro,
  MainScreen,
  QuizzLevelScreen,
  QuotesScreen,
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
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="RulesScreen" component={RulesScreen} />
          <Stack.Screen
            name="QuizzLevelScreen"
            component={QuizzLevelScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="QuotesScreen"
            component={QuotesScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QuizzProvider>
  );
}

export default App;
