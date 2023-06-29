import { StackActions } from '@react-navigation/native';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Image,
  Button,
  HStack,
  Center,
} from 'native-base';
import { useState } from 'react';
import axios from 'axios';

export default function Select({ navigation, route }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const baseURL = 'https://hg3498-app.azurewebsites.net/api/';

  const logIn = () => {
    axios
      .post(`${baseURL}user`, {
        userId: id,
        userPw: password,
      })
      .then(function (response) {
        navigation.dispatch(StackActions.replace('Main', {}));

        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Center flex={1}>
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
      <Image
        source={{ uri:  }}
        alt='loading image'
        size='400'
        style={{
          position: 'absolute', // 이미지의 위치를 절대값으로 설정합니다.
          top: 300,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></Image>
    </Center>
  );
}
