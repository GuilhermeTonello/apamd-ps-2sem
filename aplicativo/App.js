import * as React from 'react';
import Home from './paginas/Home';
import Periodos from './paginas/Periodos';
import Informacoes from './paginas/Informacoes';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackTitleVisible: false }}>
        <Stack.Screen name="VERIFIQUE SEU MANANCIAL" component={Home} />
        <Stack.Screen name="PERIODOS"  component={Periodos} />
        <Stack.Screen name="INFORMACOES" component={Informacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
