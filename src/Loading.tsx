import * as React from 'react';
import { Button, Box, Center, Image, Text, VStack, HStack } from 'native-base';
import { center } from '@shopify/react-native-skia';
import { Animated } from 'react-native';
import axios from 'axios';
export const Loading = ({ navigation, route }) => {
  const [index, setIndex] = React.useState(0);

  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setIndex((prevIndex) => (prevIndex + 1) % components.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [fadeAnim]);
  React.useEffect(() => {
    console.log(route);

    axios
      .post('https://emodiary.dcs-hyungjoon.com/api/v1/diary', {
        title: '오늘은 날씨 맑음',
        content:
          '오늘은 아름다운 여름날씨에 감사하며 하루를 시작했습니다. 창문을 열고 상쾌한 바람이 들어오면서 싱그러운 느낌이 전해졌어요. 오늘은 나른한 주말 아침을 보내기로 마음먹었기 때문에 부지런히 일어나지 않았습니다..',
      })
      .then((e) => {
        console.log(e.data.imageResponses);

        navigation.navigate('Select', e.data.imageResponses);
      });
  }, []);

  const ComponentA = () => (
    <Center>
      <HStack>
        <Text bold fontSize='30' color='#3478F6'>
          오늘의 추억
        </Text>
        <Text fontSize={'30'}>을</Text>
      </HStack>
      <HStack>
        <Text bold fontSize={'30'} color='#3478F6'>
          그림
        </Text>
        <Text fontSize={'30'}>으로 저장하고 있어요</Text>
      </HStack>
    </Center>
  );
  const ComponentB = () => (
    <Box>
      <HStack>
        <Text bold fontSize='30' color='#3478F6'>
          물감
        </Text>
        <Text fontSize='30'>을 섞고 있어요</Text>
      </HStack>
    </Box>
  );
  const ComponentC = () => (
    <Center>
      <HStack>
        <Text bold fontSize='30' color='#3478F6'>
          생각
        </Text>
        <Text fontSize={30}>이 많아질땐 </Text>
      </HStack>
      <HStack>
        <Text bold fontSize='30' color='#3478F6'>
          명상
        </Text>
        <Text fontSize={30}>을 해보세요</Text>
      </HStack>
    </Center>
  );
  const ComponentD = () => (
    <Text bold fontSize='30' color='#3478F6'>
      슥삭슥삭
    </Text>
  );

  const components = [ComponentA, ComponentB, ComponentC, ComponentD];

  const ComponentToRender = components[index];

  return (
    <Center>
      <Box mt='40'>
        <Animated.View style={{ opacity: fadeAnim }}>
          <ComponentToRender />
        </Animated.View>
      </Box>
      <Image
        source={require('./image/Loading.png')}
        alt='loading image'
        size='400'
        style={{
          position: 'absolute',
          top: 300,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></Image>
    </Center>
  );
};
