import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/home';
import Configuracoes from './src/view/configuracoes';
import Novidades from './src/view/novidades';
import Recente from './src/view/recente';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'none',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Novidades" component={Novidades} />
      <Stack.Screen name="Recente" component={Recente} />
      <Stack.Screen name="Configuracoes" component={Configuracoes} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
