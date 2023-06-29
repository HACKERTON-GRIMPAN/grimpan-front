import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main } from './src/Main';

import { NativeBaseProvider } from 'native-base';
import { Loading } from './src/Loading';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { PathGradient } from './src/PathGradient';
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
            name='Main'
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Loading'
            component={Loading}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='PathGradient'
            component={PathGradient}
            options={{
              title: '🌈 PathGradient',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// eslint-disable-next-line import/no-default-export
