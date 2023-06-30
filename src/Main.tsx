import * as React from 'react';
import { Button, Box, Text, Center, ZStack, Input, VStack } from 'native-base';

import { CalendarProvider, WeekCalendar } from 'react-native-calendars';
import { BlurView } from 'expo-blur';
import axios from 'axios';
import { size } from '@shopify/react-native-skia';
export const Main = ({ navigation }) => {
  const [value, setValue] = React.useState('');
  const [title, setTitle] = React.useState('');

  const [selected, setSelected] = React.useState('');
  React.useEffect(() => {}, []);
  const handleChangeText = (text) => {
    setValue(text);
  };
  const submit = () => {
    navigation.navigate('Loading', { title, value });
  };

  const handleSubmit = () => {
    // 입력된 값 처리
    console.log(value);
  };
  const today = new Date().toString();
  return (
    <Box flex={1}>
      <Box flex={1}>
        <CalendarProvider date={'2023-06-30'}>
          <WeekCalendar />
        </CalendarProvider>
      </Box>
      <Box mt={70} px={8} h={60}>
        <Input
          variant='unstyled'
          size='3xl'
          fontSize={20}
          value='오늘은 날씨 맑음'
          style={{ borderBottomColor: '#FFE76A', borderBottomWidth: 2 }}
        />
      </Box>

      <ZStack flex={1} ml={30}>
        <Box
          bg='#FFE76A'
          w='300'
          h='400'
          rounded='3xl'
          style={{
            marginLeft: 20,
            marginTop: 20,
          }}
        />
        <Box>
          <BlurView
            tint='light'
            intensity={70}
            style={{ height: 400, width: 300 }}
          >
            <VStack padding={5}>
              <Input
                variant='underlined'
                size='xl'
                value='오늘은 아름다운 여름날씨에'
              />
              <Input
                variant='underlined'
                size='xl'
                value='감사하며 하루를 시작했습니다.'
              />

              <Input
                variant='underlined'
                size='xl'
                value='창문을 열고 상쾌한 바람이'
              />

              <Input
                variant='underlined'
                size='xl'
                value='들어오면서 싱그러운 느낌이 전해'
              />
              <Input
                variant='underlined'
                size='xl'
                value='졌어요. 오늘은 나른한 주말 아침을'
              />
              <Input
                variant='underlined'
                size='xl'
                value='보내기로 마음먹었기 때문에 부지'
              />
              <Input
                variant='underlined'
                size='xl'
                value='런히 일어나지 않았습니다..'
              />

              <Input variant='underlined' size='xl' />
              <Input variant='underlined' size='xl' />
            </VStack>
          </BlurView>
        </Box>
      </ZStack>
      <Box flex={2} mt='400' px={30}>
        <Button
          h={60}
          onPress={submit}
          rounded='2xl'
          colorScheme='indigo'
          _text={{ fontSize: 20, bold: true }}
        >
          그럼 일기를 받아볼게요!
        </Button>
      </Box>
    </Box>
  );
};
