import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {useRef, useState} from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';


export const getServerSideProps = async ({req}:any) => {
  // console.log(req, 'NaVbArhhhhhhhhhhhhhhh')

  if(!req.cookies.mohallaMartJwt){
    return {
        redirect: {
            destination: '/products',
            permanent: false,
        },
    }
}

  return {
      props: {props: req.cookies.mohallaMartJwt}
  }
}

export default function becomeseller({props}:any) {

  const storeRef:any = useRef(null)
  const regRef:any = useRef(null)
  const toast = useToast()
  const router = useRouter()

  const handleSeller = () => {
    console.log(storeRef.current.value, regRef.current.value)
    axios.post('/api/sellers', {
      storeName: storeRef.current.value, 
      reg: regRef.current.value
    }).then((res:any) => {
      console.log(res,'sellerRes')
      toast({
        title: 'Congrats!.',
        description: "You have successfully became a seller at MohallaMart",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      router.push("/admin")
    }).catch((e) => {
      console.log(e, 'sellerError')
      toast({
        title: 'Oops!.',
        description: "Looks like something went wrong, please try again!",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    })
  }

  return (
    <>
    <Navbar props={props}/>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Become a Seller Today!</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            1-step setup! ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Store Name</FormLabel>
              <Input ref={storeRef} type="text" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Registration No.</FormLabel>
              <Input ref={regRef} type="text" />
            </FormControl>
            <Stack spacing={10}>
              <Button
              onClick={handleSeller}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Become Seller
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    <Footer/>
    </>
  );
}