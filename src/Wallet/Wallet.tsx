import React, { useMemo } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import {
  Canvas,
  Path,
  Group,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { GestureDetector, ScrollView } from 'react-native-gesture-handler';

import { PADDING, COLORS, getGraph } from './Model';
import { getYForX } from './Math';
import { Cursor } from './components/Cursor';
import { Selection } from './components/Selection';
import { Label } from './components/Label';
import { useGraphTouchHandler } from './components/useGraphTouchHandler';
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Image,
  ZStack,
} from 'native-base';

const touchableCursorSize = 80;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export const Wallet = ({ navigation }) => {
  const window = useWindowDimensions();
  const { width } = window;
  const height = Math.min(window.width, window.height) / 2;
  const translateY = height + PADDING;
  const graphs = useMemo(() => getGraph(width, height), [width, height]);
  // animation value to transition from one graph to the next
  const transition = useSharedValue(0);
  // indicices of the current and next graphs
  const state = useSharedValue({
    next: 0,
    current: 0,
  });
  // path to display
  const path = useDerivedValue(() => {
    const { current, next } = state.value;
    const start = graphs[current].data.path;
    const end = graphs[next].data.path;
    return end.interpolate(start, transition.value)!;
  });
  // x and y values of the cursor
  const x = useSharedValue(0);
  const y = useDerivedValue(() => getYForX(path.value.toCmds(), x.value));
  const gesture = useGraphTouchHandler(x, width);
  const style = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      width: touchableCursorSize,
      height: touchableCursorSize,
      left: x.value - touchableCursorSize / 2,
      top: translateY + y.value - touchableCursorSize / 2,
    };
  });
  return (
    <ScrollView style={styles.container}>
      <Box mt={20} ml={5}>
        <Heading mb={2} size={'2xl'}>
          EMODIARY
        </Heading>
        <Divider w='90%' />
      </Box>
      <Box mt={-100}>
        <Canvas style={{ width, height: 2 * height + 30 }}>
          <Group transform={[{ translateY }]}>
            <Path
              style='stroke'
              path={path}
              strokeWidth={4}
              strokeJoin='round'
              strokeCap='round'
            >
              <LinearGradient
                start={vec(0, 0)}
                end={vec(width, 0)}
                colors={COLORS}
              />
            </Path>
            <Cursor x={x} y={y} width={width} />
          </Group>
        </Canvas>
        <GestureDetector gesture={gesture}>
          <Animated.View style={style} />
        </GestureDetector>
      </Box>
      <Image
        source={require('../image/memo.png')}
        alt='loading image'
        w={'100%'}
        h={100}
        style={{
          position: 'absolute', // 이미지의 위치를 절대값으로 설정합니다.
          top: 550,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></Image>

      <Selection state={state} transition={transition} graphs={graphs} />
      <Center>
        <HStack paddingX={10} mt={200} space={10}>
          <Button
            h={60}
            w={150}
            variant={'outline'}
            onPress={() => navigation.navigate('2023.06')}
            rounded='2xl'
            colorScheme='indigo'
            _text={{ fontSize: 20, bold: true }}
          >
            기억 보기
          </Button>
          <Button
            h={60}
            w={150}
            onPress={() => navigation.navigate('2023.06')}
            rounded='2xl'
            colorScheme='indigo'
            _text={{ fontSize: 20, bold: true }}
          >
            일기 쓰기
          </Button>
        </HStack>
      </Center>
    </ScrollView>
  );
};
