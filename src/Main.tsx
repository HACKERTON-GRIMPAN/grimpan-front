import * as React from 'react';
import { Button, Box } from 'native-base';

export const Main = ({ navigation }) => {
  return (
    <Box flex={1} safeArea>
      <Button onPress={() => navigation.navigate('Loading')}>hello</Button>
    </Box>
  );
};
