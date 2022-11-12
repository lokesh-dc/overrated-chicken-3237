import React from 'react'
import {Image} from "@chakra-ui/react"
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react"

const NewArrivals = () => {
  return (
    <div>
        <Text fontSize='50px' alignItems='center' ml="5%" mt="30px" mb="30px">NEW ARRIVALS</Text>

        <SimpleGrid
         minChildWidth='200px' 
         placeItems='center' 
         gap={5} 
         w='90%'
         m='auto'
         mt="30px"
         mb="30px"
         templateColumns='repeat(2, 1fr)'
         >
            <VStack boxShadow='lg' p={4}  w='100%' alignItems='center' bg='white' 
            bgColor='rgba(255, 255, 255, .10)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}}>
                <Text fontSize='20px' alignItems='center'>MEN'S SHORTS</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243400/243406/products/1852617295.jpg?size=400x400"
                    />
            </VStack>
            <VStack boxShadow='lg' p={4}  w='100%' alignItems='center' bg='white' 
            bgColor='rgba(255, 255, 255, .10)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}}>
                <Text fontSize='20px' alignItems='center'>WOMAN SANDALS</Text>
                    <Image
                      src="https://img.shop.com/Image/260000/266700/266794/products/1925100964.jpg?size=400x400"
                    />
            </VStack>

            <VStack boxShadow='lg' p={4}  w='100%' alignItems='center' bg='white' 
            bgColor='rgba(255, 255, 255, .10)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}}>
                <Text fontSize='20px' alignItems='center'>MEN SANDALS</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243400/243406/products/1910174562.jpg?size=400x400"
                    />
            </VStack>

            <VStack boxShadow='lg' p={4}  w='100%' alignItems='center' bg='white' 
            bgColor='rgba(255, 255, 255, .10)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}}>
                <Text fontSize='20px' alignItems='center'>ARTIFICIAL PLANT</Text>
                    <Image
                      src="https://img.shop.com/Image/250000/251800/251872/products/1624113478.jpg?size=400x400"
                    />
            </VStack>        
        </SimpleGrid>
        <Text fontSize='50px' alignItems='center' ml="5%" mt="30px" mb="30px">Our Popular Products</Text>
    </div>
  )
}

export default NewArrivals