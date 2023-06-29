import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Button, Box } from 'native-base';
import type { Routes } from './Routes';

const main = [
  {
    screen: 'PathGradient',
    title: '🌈 PathGradient',
  },
] as const;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  content: {
    paddingBottom: 32,
  },
  thumbnail: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#f2f2f2',
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
  },
});

export const Main = ({ navigation }) => {
  return (
    <Box>
      <Button>hello</Button>
    </Box>
  );
};
