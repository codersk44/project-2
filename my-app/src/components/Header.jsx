import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        zIndex={'overlay'}
        h={'10'}
        m={2}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'25'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader alignItems={'center'}>Video</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"} >
              <Button  onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/abc'}>Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/upload'}>Upload videos</Link>
              </Button>
              <Button variant={'ghost'} onClick={onClose} colorScheme="purple">
                <Link to={'/videos?category=free  '}>Free class</Link>
              </Button>
            </VStack> 

            <HStack position={'absolute'}  bottom={'10'} w={'full'} justifyContent={'space-evenly'} alignItems={'center'} >
               
                      <Button colorScheme='purple' onClick={onClose}  variant={"outline"}  > 
                    <Link to={'/login'}  >LOGIN </Link>
                </Button>
                <Button colorScheme='purple' onClick={onClose}  > 
                <Link to={'/SI'}  >SIGNUP </Link>
                </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
