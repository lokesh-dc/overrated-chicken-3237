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

export default function LeftSec({data, getProductByPrice, getProductByRating}:any) {
    const [maxMin, setMaxMin] = useState([200, 2000])
    console.log(data);
    const handleChange =(e:any)=>{
        setMaxMin(e)

    }
    const handleFilter=()=>{
        let filterData = data.filter((e:any)=>{
            return +(e.price) >= maxMin[0] && +(e.price) <= maxMin[1]
        })
        // console.log(filterData)
        getProductByPrice(filterData)
    }
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
                        <RangeSlider aria-label={['min', 'max']} min={10} max={5000} defaultValue={[200, 2000]} onChangeEnd={(e)=>{handleChange(e)}} onChange={handleFilter}>
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
                                data.slice(0,6).map((item:any) => (
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
                        <Box flex='1'  textAlign='left' fontSize='18px'>
                            Ratings Range
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                        <Flex flexDir='column' gap={2} justify='center' align='flex-start' pl={6}>
                            <Checkbox fontSize='15px' defaultChecked color='#2e2c38' onClick={() => getProductByRating(0,1)}>1 & below</Checkbox>
                            <Checkbox fontSize='15px' defaultChecked color='#2e2c38' onClick={() => getProductByRating(1.1,2)}>1.1 to 2</Checkbox>
                            <Checkbox fontSize='15px' defaultChecked color='#2e2c38' onClick={() => getProductByRating(2,3)}>2.1 to 3</Checkbox>
                            <Checkbox fontSize='15px' defaultChecked color='#2e2c38' onClick={() => getProductByRating(3,4)}>3.1 to 4</Checkbox>
                            <Checkbox fontSize='15px' defaultChecked color='#2e2c38' onClick={() => getProductByRating(4,5)}>4.1 & above</Checkbox>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
};
