import { StackActions } from '@react-navigation/native';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Image,
  Pressable,
  Button,
  HStack,
  Center,
} from 'native-base';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Select({ navigation, route }) {
  const [image, setImage] = useState([]);
  const [selected, setSelected] = useState([false, false, false, false]);

  useEffect(() => {
    setImage(route.params);
    console.log(route.params);
    console.log(selected);
  }, [selected]);

  return (
    <Center flex={1} safeArea mt={100}>
      <HStack>
        <Text bold fontSize='30' color='#3478F6'>
          마음에 드는 그림
        </Text>
        <Text fontSize={'30'}>을 골라</Text>
      </HStack>
      <HStack>
        <Text bold fontSize={'30'} color='#3478F6'>
          오늘 하루
        </Text>
        <Text fontSize={'30'}>를 간직하세요</Text>
      </HStack>
      <VStack flex={2} mt={50} space={5}>
        <HStack space={5}>
          <Image
            rounded={'3xl'}
            source={{ uri: `${image[0]}&size=150` }}
            alt='loading image'
            key={0}
            size='150'
          ></Image>
          <Image
            rounded={'3xl'}
            source={{ uri: `${image[1]}&size=150` }}
            alt='loading image'
            key={1}
            size='150'
          ></Image>
        </HStack>
        <HStack space={5}>
          <Image
            rounded={'3xl'}
            source={{ uri: `${image[2]}&size=150` }}
            alt='loading image'
            key={0}
            size='150'
          ></Image>
          <Pressable maxW='96'>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box
                  bg={
                    isPressed
                      ? 'coolGray.200'
                      : isHovered
                      ? 'coolGray.200'
                      : 'coolGray.100'
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                  rounded='3xl'
                  p={1}
                  shadow={5}
                  borderWidth='1'
                  borderColor='coolGray.300'
                >
                  <Image
                    rounded={'3xl'}
                    source={{ uri: `${image[3]}&size=150` }}
                    alt='loading image'
                    key={1}
                    size='150'
                  ></Image>
                </Box>
              );
            }}
          </Pressable>
        </HStack>
      </VStack>
      <Box mb={30}>
        <Button
          h={60}
          onPress={() => navigation.navigate('Card')}
          w='350'
          rounded='2xl'
          colorScheme='indigo'
          _text={{ fontSize: 20, bold: true }}
        >
          이 그림으로 저장할래요
        </Button>
      </Box>
    </Center>
  );
}
