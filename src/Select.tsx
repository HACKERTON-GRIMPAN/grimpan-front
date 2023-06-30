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
  ZStack,
  Radio,
} from 'native-base';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Select({ navigation, route }) {
  const [image, setImage] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setImage(route.params);
    console.log(route.params);
    console.log(selected);
  }, []);

  return (
    <Center flex={1} safeArea mt={150}>
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
      <Radio.Group
        name='myRadioGroup'
        accessibilityLabel='favorite number'
        value={selected}
        onChange={(nextValue) => {
          setSelected(nextValue);
        }}
      >
        <VStack flex={2} mt={50} space={5}>
          <HStack space={5}>
            <Pressable maxW='96' onPress={() => setSelected('0')}>
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <ZStack
                    size={150}
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
                    shadow={5}
                    borderWidth='1'
                    borderColor='coolGray.300'
                  >
                    <Box>
                      <Image
                        rounded={'3xl'}
                        source={{ uri: `${image[0]}&size=150` }}
                        alt='loading image'
                        key={1}
                        size='150'
                      ></Image>
                    </Box>
                    <Box right={3} top={2}>
                      <Radio value='0' my={1}></Radio>
                    </Box>
                  </ZStack>
                );
              }}
            </Pressable>
            <Pressable maxW='96' onPress={() => setSelected('1')}>
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <ZStack
                    size={150}
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
                    shadow={5}
                    borderWidth='1'
                    borderColor='coolGray.300'
                  >
                    <Box>
                      <Image
                        rounded={'3xl'}
                        source={{ uri: `${image[1]}&size=150` }}
                        alt='loading image'
                        key={1}
                        size='150'
                      ></Image>
                    </Box>
                    <Box right={3} top={2}>
                      <Radio value='1' my={1}></Radio>
                    </Box>
                  </ZStack>
                );
              }}
            </Pressable>
          </HStack>
          <HStack space={5}>
            <Pressable maxW='96' onPress={() => setSelected('2')}>
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <ZStack
                    size={150}
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
                    shadow={5}
                    borderWidth='1'
                    borderColor='coolGray.300'
                  >
                    <Box>
                      <Image
                        rounded={'3xl'}
                        source={{ uri: `${image[2]}&size=150` }}
                        alt='loading image'
                        key={1}
                        size='150'
                      ></Image>
                    </Box>
                    <Box right={3} top={2}>
                      <Radio value='2' my={1}></Radio>
                    </Box>
                  </ZStack>
                );
              }}
            </Pressable>
            <Pressable maxW='96' onPress={() => setSelected('3')}>
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <ZStack
                    size={150}
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
                    shadow={5}
                    borderWidth='1'
                    borderColor='coolGray.300'
                  >
                    <Box>
                      <Image
                        rounded={'3xl'}
                        source={{ uri: `${image[3]}&size=150` }}
                        alt='loading image'
                        key={1}
                        size='150'
                      ></Image>
                    </Box>
                    <Box right={3} top={2}>
                      <Radio value='3' my={1}></Radio>
                    </Box>
                  </ZStack>
                );
              }}
            </Pressable>
          </HStack>
        </VStack>
      </Radio.Group>
      <Box mt={-100} mb={50}>
        {selected ? (
          <Button
            h={60}
            onPress={() => navigation.navigate('Card', image[selected])}
            w='350'
            rounded='2xl'
            colorScheme='indigo'
            _text={{ fontSize: 20, bold: true }}
          >
            이 그림으로 저장할래요
          </Button>
        ) : (
          <Button
            h={60}
            isDisabled
            variant={'outline'}
            w='350'
            rounded='2xl'
            colorScheme='indigo'
            _text={{ fontSize: 20, bold: true, color: 'black' }}
          >
            오늘 하루와 어울리는 그림은 무엇인가요?
          </Button>
        )}
      </Box>
    </Center>
  );
}
