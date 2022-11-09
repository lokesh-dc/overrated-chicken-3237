import { Box, Button, Checkbox, Flex, HStack, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { useState } from "react";
import { MdGraphicEq } from "react-icons/md";
// import { filterProductByPrice } from "../../../API/api";

export default function LeftSec({data, getProductByPrice, getProductByRating}) {
    const [maxMin, setMaxMin] = useState([200, 2000])
    return (
        <Box px={2} py={2} >
            <HStack justify='space-between' py={2} px={4}>
                <Text fontWeight='bold' fontSize='20px'>Filter</Text>
                <Button variant='outline' borderRadius='3xl'>Reset</Button>
            </HStack>
            <Accordion defaultIndex={[0,1,2]} allowMultiple >

                <AccordionItem py={2} >
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontSize='18px'>
                        Price Range
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} >
                        <RangeSlider aria-label={['min', 'max']} min={200} max={6000} defaultValue={[200, 2000]} onChangeEnd={(e) => setMaxMin(e)}>
                        <RangeSliderTrack bg='red.100'>
                            <RangeSliderFilledTrack bg='tomato' />
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0}>
                            <Box color='tomato' as={MdGraphicEq} />
                        </RangeSliderThumb>
                        <RangeSliderThumb boxSize={6} index={1}>
                            <Box color='tomato' as={MdGraphicEq} />
                        </RangeSliderThumb>
                        </RangeSlider>

                        <Text>Min: {maxMin[0]} | Max : {maxMin[1]}</Text>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem py={2}>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontSize='18px'>
                        Brand
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Flex flexDir='column' gap={3} justify='center' align='flex-start' pl={6}>
                            {
                                data.slice(0,6).map((item) => (
                                    // <Button fontSize='15px' color='#2e2c38' variant='link' key={item.id}>{item.brand}({item.number_of_reviews})</Button>
                                    <Checkbox defaultChecked fontSize='15px' color='#2e2c38' key={item.id}>{item.brand}({item.number_of_reviews})</Checkbox>
                                ))
                            }
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem py={2}>
                    <h2>
                    <AccordionButton>
                        <Box  textAlign='left' fontSize='18px'>
                        Ratings Range
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                        <Flex flexDir='column' gap={2} justify='center' align='flex-start' pl={6}>
                            <Button fontSize='15px' color='#2e2c38' variant='link' onClick={() => getProductByRating(0,1)}>1 & below</Button>
                            <Button fontSize='15px' color='#2e2c38' variant='link' onClick={() => getProductByRating(1.1,2)}>1.1 to 2</Button>
                            <Button fontSize='15px' color='#2e2c38' variant='link' onClick={() => getProductByRating(2,3)}>2.1 to 3</Button>
                            <Button fontSize='15px' color='#2e2c38' variant='link' onClick={() => getProductByRating(3,4)}>3.1 to 4</Button>
                            <Button fontSize='15px' color='#2e2c38' variant='link' onClick={() => getProductByRating(4,5)}>4.1 & above</Button>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
};
