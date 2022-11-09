import { Box, Button, Flex, HStack, SimpleGrid, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GiCash } from 'react-icons/gi'
import { FaGlobeAsia, FaWallet } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <>
        <SimpleGrid minChildWidth='100px'placeItems='center'>
            <Stat bg='white' borderRadius='3xl' px={5} py={2} w='80%' >
                <Flex align='center' justify='space-between'>
                    <VStack>
                        <StatLabel color='gray.600'>Total Revenue</StatLabel>
                        <StatNumber>345,670₹</StatNumber>
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
                        <StatNumber>20</StatNumber>
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
                        <StatNumber>12</StatNumber>
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
            bgColor='rgba(255, 255, 255, .20)' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg'
            _hover={{bgColor:'rgba(230, 230, 230, .20)', boxShadow:'none'}}
            // overflowY='scroll'
            >
                <Text fontSize='22px'>WishList</Text>
                <VStack 
                // overflowY='scroll'
                >
                    <HStack>
                        <Text>Product Name</Text>
                        <Button>Remove</Button>
                        <Button>300Rs</Button>
                    </HStack>
                    <HStack>
                        <Text>Product Name</Text>
                        <Button>Remove</Button>
                        <Button>300Rs</Button>
                    </HStack>
                    <HStack>
                        <Text>Product Name</Text>
                        <Button>Remove</Button>
                        <Button>300Rs</Button>
                    </HStack>
                    <HStack>
                        <Text>Product Name</Text>
                        <Button>Remove</Button>
                        <Button>300Rs</Button>
                    </HStack>
                </VStack>
            </Box>

            <Box w='48%' h='450px' bg='white' borderRadius='3xl' py={6} px={5}
             bgColor='rgba(255, 255, 255, .20)' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg'
             _hover={{bgColor:'rgba(230, 230, 230, .20)', boxShadow:'none'}}
             >
                <Text fontSize='22px'>Cart</Text>
                <VStack>
                    <HStack>
                        <Text>Product Name</Text>
                        <Button>Remove</Button>
                        <Button>300Rs</Button>
                    </HStack>
                </VStack>
            </Box>
        </HStack>
    </>
  )
}

export default Dashboard