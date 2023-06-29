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
  IconButton,
  Icon,
} from 'native-base';
import RNFetchBlob from 'rn-fetch-blob';

import { Buffer } from 'buffer';
import * as FileSystem from 'expo-file-system';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GestureFlipView from 'react-native-gesture-flip-card';
import { Entypo } from '@expo/vector-icons';
import Share from 'react-native-share';
export default function Card({ navigation, route }) {
  const [imageUri, setImageUri] = useState(null);
  const [image, setImage] = useState('');
  const [selected, setSelected] = useState([false, false, false, false]);

  useEffect(() => {
    setImage(route.params);
    console.log(route.params);
    console.log(selected);
  }, [selected]);

  const share = async (customOptions) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };

  const imageUrl =
    'https://emodiary.dcs-hyungjoon.com/api/v1/diary/images?uuid=e54cae74-169a-11ee-92f6-0242ac130005.png&size=500'; // 다운로드 받을 이미지의 URL
  const localUri = FileSystem.documentDirectory + 'localImage.jpeg';
  useEffect(() => {
    const fetchImage = async () => {
      const response = await RNFetchBlob.fetch(
        'GET',
        'https://emodiary.dcs-hyungjoon.com/api/v1/diary/images?uuid=e54cae74-169a-11ee-92f6-0242ac130005.png&size=300'
      ).then((response) => {
        share({
          title: '오늘 내 기분',
          message: '오늘 내 기분',
          social: Share.Social.MESSENGER,
          url: `data:image/png;base64,${response.base64()}`,
        });
      });
    };
    fetchImage();
  }, []);

  const renderFront = () => {
    return (
      <Box style={styles.frontStyle} shadow={5}>
        <Image
          size={300}
          alt='image'
          source={{
            uri: 'https://emodiary.dcs-hyungjoon.com/api/v1/diary/images?uuid=e54cae74-169a-11ee-92f6-0242ac130005.png&size=300',
          }}
        ></Image>
      </Box>
    );
  };

  const renderBack = () => {
    return (
      <Box style={styles.backStyle} shadow={5} p={5}>
        <Text fontSize={20} bold mb={3}>
          오늘은 날씨 맑음
        </Text>
        <Text fontSize={20}>
          {
            '오늘은 아름다운 여름날씨에\n감사하며 하루를 시작했습니다.\n창문을 열고 상쾌한 바람이\n들어오면서 싱그러운 느낌이 전해졌어요. 오늘은 나른한 주말 아침을 보내기로 마음먹었기 때문에 부지런히 일어나지 않았습니다..'
          }
        </Text>
      </Box>
    );
  };

  return (
    <Center safeArea>
      <Box mt={100}>
        <HStack>
          <Text bold fontSize='30' color='#3478F6'>
            오늘 하루
          </Text>
          <Text fontSize={'30'}>를</Text>
        </HStack>
        <HStack>
          <Text bold fontSize={'30'} color='#3478F6'>
            그림
          </Text>
          <Text fontSize={'30'}>으로 저장했어요!</Text>
        </HStack>
        <Box mt={50}>
          <GestureFlipView width={300} height={300}>
            {renderBack()}
            {renderFront()}
          </GestureFlipView>
        </Box>
      </Box>

      <Box alignItems='center' mt={50}>
        <IconButton
          //    onPress={async () => {
          //       await
          //      }}
          icon={<Icon as={Entypo} name='share' />}
          borderRadius='full'
          _icon={{
            color: '#3478F6',

            size: 'md',
          }}
          _hover={{
            bg: 'primary.600:alpha.20',
          }}
          _pressed={{
            bg: 'primary.600:alpha.20',
            _icon: {
              name: 'share',
            },
            _ios: {
              _icon: {
                size: '2xl',
              },
            },
          }}
          _ios={{
            _icon: {
              size: '2xl',
            },
          }}
        />
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontStyle: {
    width: 300,
    height: 300,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  backStyle: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
