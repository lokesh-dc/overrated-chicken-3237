import { Avatar, Box, Button, Flex, HStack, IconButton, SimpleGrid, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GiCash } from 'react-icons/gi'
import { FaGlobeAsia, FaWallet } from 'react-icons/fa'
import { FiDelete } from 'react-icons/fi'
import { DeleteIcon } from '@chakra-ui/icons'
import users from '../../../pages/api/users'

const Dashboard = ({allUsers, allBrands, allProducts}:any) => {
    console.log(allProducts, 'DASHBAORD')

    var sum = 0
    for(var i = 0; i<allProducts.length; i++){
        sum += +allProducts[i].productId.price
    }

  return (
    <>
        <SimpleGrid minChildWidth='100px'placeItems='center'>
            <Stat bg='white' borderRadius='3xl' px={5} py={2} w='80%' >
                <Flex align='center' justify='space-between'>
                    <VStack>
                        <StatLabel color='gray.600'>Total Revenue</StatLabel>
                        <StatNumber>{sum}</StatNumber>
                        <StatHelpText>
                        <StatArrow type='increase' />
                        23.36%
                        </StatHelpText>
                    </VStack>

                    <FaWallet fontSize='40px' style={{color:'purple'}}/>
                </Flex>

            </Stat>
            <Stat bg='white' borderRadius='3xl' px={5} py={2} w='80%' >
                
                <Flex align='center' justify='space-between'>
                    <VStack>
                        <StatLabel color='gray.600'>Total Users</StatLabel>
                        <StatNumber>{allUsers.length}</StatNumber>
                        <StatHelpText>
                        <StatArrow type='increase' />
                        200%
                        </StatHelpText>
                    </VStack>

                    <BsFillPeopleFill fontSize='40px' style={{color:'purple'}}/>
                </Flex>

            </Stat>
            <Stat bg='white' borderRadius='3xl' px={5} py={2} w='80%' >

                <Flex align='center' justify='space-between'>
                    <VStack>
                        <StatLabel color='gray.600'>Total Brands</StatLabel>
                        <StatNumber>{allBrands.length}</StatNumber>
                        <StatHelpText>
                        <StatArrow type='increase' />
                            8%
                        </StatHelpText>
                    </VStack>

                    <FaGlobeAsia fontSize='40px' style={{color:'purple'}}/>
                </Flex>

                
            </Stat>
            <Stat bg='white' borderRadius='3xl' px={5} py={2} w='80%' >

                <Flex align='center' justify='space-between'>
                    <VStack>
                        <StatLabel color='gray.600'>Today's Revenue</StatLabel>
                        <StatNumber>25000</StatNumber>
                        <StatHelpText>
                        <StatArrow type='increase' />
                        43.00%
                        </StatHelpText>
                    </VStack>

                    <GiCash fontSize='40px' style={{color:'purple'}}/>
                </Flex>
            </Stat>
        </SimpleGrid>

        <HStack justify='space-between' mt='50px'>
            <Box color='black' w='48%' h='450px' borderRadius='3xl' py={6} px={5} 
            bgColor='rgba(255, 255, 255, .35)' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg'
            _hover={{bgColor:'rgba(230, 230, 230, .20)', boxShadow:'none'}}
            // overflowY='scroll'
            >
                <Text fontSize='22px' fontWeight='semibold' color='messenger.900'>WishList</Text>
                <VStack 
                mt='15px'
                // overflowY='scroll'
                >
                    <HStack fontFamily='sans-serif' color='purple' w='90%' justify='space-between' py={2} px={4} bg='white' borderRadius='2xl' backgroundBlendMode='darken'>
                        <Flex alignItems='center' justifyContent='flex-start' w='60%' gap={2}>
                            <Avatar src='https://rukminim1.flixcart.com/image/312/312/kuwzssw0/television/u/i/r/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnmnkyz7je.jpeg?q=70' width='30px' height='30px'/>
                            <Text fontSize='18px'>Product Name</Text>
                        </Flex>
                        <Text fontSize='18px' w='20%'>300₹</Text>
                        <IconButton colorScheme='red' size='sm' aria-label='icon' icon={<DeleteIcon/>} w='40px'/>
                    </HStack>
                </VStack>
            </Box>


            <Box w='48%' h='450px' bg='white' borderRadius='3xl' py={6} px={5}
             bgColor='rgba(255, 255, 255, .35)' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg'
             _hover={{bgColor:'rgba(230, 230, 230, .20)', boxShadow:'none'}}
             >
                <Text fontSize='22px' fontWeight='semibold' color='messenger.900'>Cart</Text>
                <VStack mt='15px'>
                        <HStack fontFamily='sans-serif' color='purple' w='90%' justify='space-between' py={2} px={4} bg='white' borderRadius='2xl' backgroundBlendMode='darken'>
                            <Flex alignItems='center' justifyContent='flex-start' w='60%' gap={2}>
                                <Avatar src='https://rukminim1.flixcart.com/image/312/312/kuwzssw0/television/u/i/r/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnmnkyz7je.jpeg?q=70' width='30px' height='30px'/>
                                <Text fontSize='18px'>Product Name</Text>
                            </Flex>
                            <Text fontSize='18px' w='20%'>300₹</Text>
                            <IconButton colorScheme='red' size='sm' aria-label='icon' icon={<DeleteIcon/>} w='40px'/>
                        </HStack>
                </VStack>
            </Box>
        </HStack>
    </>
  )
}

export default Dashboard