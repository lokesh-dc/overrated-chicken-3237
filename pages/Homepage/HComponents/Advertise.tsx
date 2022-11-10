import React from 'react'
import {Image} from "@chakra-ui/react"
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react"
const Advertise = () => {
  return (
    <>
        <Image height="50vh" width="90%" margin="auto" mt="30px"
            src='https://img.shop.com/Image/homepage/giftsforfamily-hero1664399961627.jpg'
        />

        <SimpleGrid
         minChildWidth='200px' 
         placeItems='center' 
         gap={5} 
         w='90%'
         m='auto'
         mt="20px"
         >
            
            <VStack spacing={4} w='100%' alignItems='center' boxShadow='lg' p={4} bg='white' h='100%'>
                <Text fontSize='20px'>Free Delivery</Text>
                <SimpleGrid
                 gap={3} 
                 templateColumns='repeat(2, 1fr)' 
                 placeItems='center'>
                    <Box >
                    <Image h="10vh"
                      src="https://static.vecteezy.com/system/resources/previews/001/834/757/non_2x/delivery-truck-icon-design-free-vector.jpg"
                    />
                    </Box>
                    <Text fontSize='15px'>Free Shipping on all Products</Text>
                </SimpleGrid>
            </VStack>

            <VStack spacing={4} alignItems='center' justify='space-between' boxShadow='lg' w='100%' bg='white' h='100%' p={4}>
                <Text fontSize='20px'>Online Support 24/7</Text>
                <SimpleGrid
                 gap={3} 
                 templateColumns='repeat(2, 1fr)' 
                 placeItems='center'>
                    <Box >
                    <Image h="10vh"
                      src="data:image/jpeg;base64,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"
                    />
                    </Box>
                    <Text fontSize='15px'>Support online 24 hours a day</Text>
                </SimpleGrid>
            </VStack>

            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white'>
                <Text fontSize='20px'>Money Return</Text>
                <SimpleGrid
                 gap={3} 
                 templateColumns='repeat(2, 1fr)' 
                 placeItems='center'>
                    <Box >
                    <Image h="10vh"
                      src="https://img.freepik.com/free-vector/e-shopping-cartoon-web-icon-online-store-cashback-service-money-returning-financial-refund-idea-return-investment-internet-income-vector-isolated-concept-metaphor-illustration_335657-2734.jpg?w=2000"
                    />
                    </Box>
                    <Text fontSize='15px'>Back guarantee under 7 days</Text>
                </SimpleGrid>
            </VStack>

            <VStack boxShadow='lg' p={4} h='100%' w='100%' alignItems='center' bg='white'>
                <Text fontSize='20px'>Member Discount</Text>
                <SimpleGrid
                 gap={3} 
                 templateColumns='repeat(2, 1fr)' 
                 placeItems='center'>
                    <Box >
                    <Image h="10vh"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwPDItaciJzaAnZJMYWmlPLeqcN-RgmZrAg&usqp=CAU"
                    />
                    </Box>
                    <Text fontSize='15px'>On every order over ₹3000</Text>
                </SimpleGrid>
            </VStack>
        </SimpleGrid>
        <Text fontSize='50px' alignItems='center' ml="5%" mt="30px" mb="30px">CHECKOUT OUR NEW OFFERS</Text>
    </>
  )
}

export default Advertise