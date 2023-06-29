import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import type { Routes } from './src/Routes';
import { Main } from './src/Main';
import { PathGradient } from './src/PathGradient';
import { LoadAssets } from './src/LoadAssets';

import { NativeBaseProvider } from 'native-base';
const fonts = {};
const assets: number[] = [];
const Stack = createStackNavigator<Routes>();
const AppNavigator = () => (
  <Stack.Navigator>
    {/* <Stack.Screen name='Main' component={Main} /> */}
    <Stack.Screen
      name='PathGradient'
      component={PathGradient}
      options={{
        title: '🌈 PathGradient',
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <NativeBaseProvider>
        <AppNavigator />
      </NativeBaseProvider>
    </LoadAssets>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
