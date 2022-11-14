// pages/_app.js
import { Box, Button, ChakraProvider, Heading, Img, SkeletonCircle, SkeletonText, Spinner, VStack } from '@chakra-ui/react'
import { Router } from 'next/router';
import React from 'react';
import '../styles/index.css'



function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <ChakraProvider>
      {
      loading ? 
      <Box m='auto'  padding='6' boxShadow='lg' bg='white'>
        <SkeletonText  mt='4' noOfLines={4} spacing='4' />
        <SkeletonText  mt='4' noOfLines={4} spacing='4' />
        <SkeletonText  mt='4' noOfLines={4} spacing='4' />
        <Box w='fit-content' m='auto' mt='20px' mb='20px'>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            m='auto'
          />
        </Box>
        <SkeletonText  mt='4' noOfLines={4} spacing='4' />
        <SkeletonText  mt='4' noOfLines={4} spacing='4' />
        <SkeletonText  mt='4' noOfLines={4} spacing='4' />
      </Box>
     :
        <Component {...pageProps} />
      }
      </ChakraProvider>
    </>
  )
}

export default MyApp