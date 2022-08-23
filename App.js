import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Configuracoes from './src/view/configuracoes';
import Novidades from './src/view/novidades';
import Provider from './components/provider'
import Recente from './src/view/recente';
import Home from './src/home';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <Provider>
      <NavigationContainer>
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
      </NavigationContainer>
    </Provider>
  );
}
