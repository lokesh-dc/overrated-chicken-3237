import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function RightSec() {
    return (
        <VStack>
            <Text textAlign='left' fontSize='15px' pl={6}>Related partner store's for products </Text>
            <Link to='/products'>See All</Link>

            <VStack border='1px' borderColor='gray.400' rounded='md' justify='flex-start' align='flex-start' p={3} fontSize="12px">
                <Image src="https://img.shop.com/Image/topbrands/nmlogos_119125.gif"/>
                <Text>+Up to 6.00% Cashback</Text>
                <Link to='/'>Store Info</Link>
                <Button
                fontSize='md' 
                fontWeight='bold' 
                borderRadius='22px' 
                variant='solid' 
                bg='white' 
                rightIcon={<ExternalLinkIcon/>}
                border='1px solid black' 
                _hover={{bg:'#202340', color:'white'}} 
                p='3'
                >
                    Partner site
                </Button>
            </VStack>

            
            <VStack border='1px' borderColor='gray.400' rounded='md' justify='flex-start' align='flex-start' p={3} fontSize="12px">
                <Image src="https://img.shop.com/Image/topbrands/nmlogos_121675.gif"/>
                <Text>+Up to 6.00% Cashback</Text>
                <Link to='/'>Store Info</Link>
                <Button
                fontSize='md' 
                fontWeight='bold' 
                borderRadius='22px' 
                variant='solid' 
                bg='white' 
                rightIcon={<ExternalLinkIcon/>}
                border='1px solid black' 
                _hover={{bg:'#202340', color:'white'}} 
                p='3'
                >
                    Partner site
                </Button>
            </VStack>

            <VStack border='1px' borderColor='gray.400' rounded='md' justify='flex-start' align='flex-start' p={3} fontSize="12px">
                <Image src="https://img.shop.com/Image/topbrands/nmlogos_125102.gif"/>
                <Text>+Up to 6.00% Cashback</Text>
                <Link to='/'>Store Info</Link>
                <Button
                fontSize='md' 
                fontWeight='bold' 
                borderRadius='22px' 
                variant='solid' 
                bg='white' 
                rightIcon={<ExternalLinkIcon/>}
                border='1px solid black' 
                _hover={{bg:'#202340', color:'white'}} 
                p='3'
                >
                    Partner site
                </Button>
            </VStack>

            <VStack border='1px' borderColor='gray.400' rounded='md' justify='flex-start' align='flex-start' p={3} fontSize="12px">
                <Image src="https://img.shop.com/Image/topbrands/nmlogos_122591.gif"/>
                <Text>+Up to 6.00% Cashback</Text>
                <Link to='/'>Store Info</Link>
                <Button
                fontSize='md' 
                fontWeight='bold' 
                borderRadius='22px' 
                variant='solid' 
                bg='white' 
                rightIcon={<ExternalLinkIcon/>}
                border='1px solid black' 
                _hover={{bg:'#202340', color:'white'}} 
                p='3'
                >
                    Partner site
                </Button>
            </VStack>

            <VStack border='1px' borderColor='gray.400' rounded='md' justify='flex-start' align='flex-start' p={3} fontSize="12px">
                <Image src="https://img.shop.com/Image/topbrands/nmlogos_5018.gif"/>
                <Text>+Up to 6.00% Cashback</Text>
                <Link to='/'>Store Info</Link>
                <Button
                fontSize='md' 
                fontWeight='bold' 
                borderRadius='22px' 
                variant='solid' 
                bg='white' 
                rightIcon={<ExternalLinkIcon/>}
                border='1px solid black' 
                _hover={{bg:'#202340', color:'white'}} 
                p='3'
                >
                    Partner site
                </Button>
            </VStack>

            <VStack border='1px' borderColor='gray.400' rounded='md' justify='flex-start' align='flex-start' p={3} fontSize="12px">
                <Image src="https://img.shop.com/Image/topbrands/nmlogos_67413.gif"/>
                <Text>+Up to 6.00% Cashback</Text>
                <Link to='/'>Store Info</Link>
                <Button
                fontSize='md' 
                fontWeight='bold' 
                borderRadius='22px' 
                variant='solid' 
                bg='white' 
                rightIcon={<ExternalLinkIcon/>}
                border='1px solid black' 
                _hover={{bg:'#202340', color:'white'}} 
                p='3'
                >
                    Partner site
                </Button>
            </VStack>


        </VStack>
    )
};
