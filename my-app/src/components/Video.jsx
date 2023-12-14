import React from 'react';
import { Stack, Text, VStack,Heading } from '@chakra-ui/react';

const Video = () => {
  return (
    <Stack direction={'row'} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          src=""
          style={{
            width: '100%',
          }}
        ></video>

        <VStack>
          <Heading>sample video </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            blanditiis ut, ipsam corporis similique sint magni ipsum excepturi,
          </Text>
        </VStack>
      </VStack>
      <VStack w={['full', 'xl']}> </VStack>
    </Stack>
  );
};

export default Video;
