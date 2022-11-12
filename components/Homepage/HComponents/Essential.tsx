import React from 'react'
import {Image} from "@chakra-ui/react"
import { Box, Flex, Grid, GridItem, SimpleGrid, Text, VStack } from "@chakra-ui/react"

const Essential = () => {
  return (
    <div>
      <Text fontSize='50px' alignItems='center' ml="5%">CHOOSE BY CATEGORIES</Text>
 <SimpleGrid
         minChildWidth='150px' 
         placeItems='center' 
         gap={5} 
         w='90%'
         m='auto'
         mt="30px"
         mb="30px"
         >
            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>SPRING FASHION</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243400/243406/products/1920506725.jpg?size=400x400"
                    />
            </VStack>

            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>BEAUTY</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/248600/248698/products/1863177034.jpg?size=750x750"
                    />
            </VStack>

            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>MEN'S TEES</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243400/243406/products/1905103847.jpg?size=400x400"
                    />
            </VStack>

            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>MEN'S SHORTS</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243400/243406/products/1852617295.jpg?size=400x400"
                    />
            </VStack>
            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>WOMAN SANDALS</Text>
                    <Image
                      src="https://img.shop.com/Image/260000/266700/266794/products/1925100964.jpg?size=400x400"
                    />
            </VStack>

            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>MEN SANDALS</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243400/243406/products/1910174562.jpg?size=400x400"
                    />
            </VStack>

            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>ARTIFICIAL PLANT</Text>
                    <Image
                      src="https://img.shop.com/Image/250000/251800/251872/products/1624113478.jpg?size=400x400"
                    />
            </VStack>

            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>SPRING CLEANING</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243300/243390/products/559053520.jpg?size=750x750"
                    />
            </VStack>
            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>CANDELS</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243400/243406/products/1917410008.jpg?size=400x400"
                    />
            </VStack>
            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>BEDDING</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243400/243406/products/1902615042.jpg?size=400x400"
                    />
            </VStack>
            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white'>
                <Text fontSize='20px' alignItems='center'>FURNITURE</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243400/243406/products/1862227292.jpg?size=400x400"
                    />
            </VStack>
            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white' >
                <Text fontSize='20px' alignItems='center'>DRAWER</Text>
                    <Image
                      src="https://img.shop.com/Image/240000/243400/243406/products/1792343401.jpg?size=400x400"
                    />
            </VStack>    
        </SimpleGrid>
    </div>
  )
}

export default Essential