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
  UserScreen,
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <QuizzProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
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
