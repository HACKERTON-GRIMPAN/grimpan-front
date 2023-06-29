import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main } from './src/Main';

import { NativeBaseProvider } from 'native-base';
import { Loading } from './src/Loading';
import Select from './src/Select';
import Card from './src/Card';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const MainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={MainTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name='2023.06'
            component={Main}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name='Loading'
            component={Loading}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Select'
            component={Select}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Card'
            component={Card}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// eslint-disable-next-line import/no-default-export
