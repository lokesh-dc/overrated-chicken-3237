import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Input, Select, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import LeftSec from "../../components/Products/LeftSec";
import MidSec from "../../components/Products/MidSec";
import RightSec from "../../components/Products/RightSec";
import TopSec from "../../components/Products/TopSec";

import bgSvg from '../../Resources/blob-scene-haikei.svg'
import bubbles from '../../Resources/circle-scatter-haikei.svg'
import blob1 from '../../Resources/blob1.svg'
import blob2 from '../../Resources/blob2.svg'
import blob3 from '../../Resources/blob3.svg'


import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { FiFilter } from "react-icons/fi";

export default function Products() {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("ASC")
    const [loading , setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://shop-api-gqqn.onrender.com/products`).then((res:any) => setData(res.data))
        .catch((err) => setLoading(false))
    }, [page, filter])
 
    const getProductByPrice = (from:any, to:any) => {
        setLoading(true)
        // filterProductByPrice(from, to).then((res) => {
        //     setData(res.data)
        //     setLoading(false)
        // })
        // .catch((err) => setLoading(false))
    }
    const getProductByRating = (from:any , to : any) => {
        setLoading(true)
        // filterProductByRating(from, to).then((res) => {
        //     setData(res.data)
        //     setLoading(false)
        // })
        // .catch((err) => setLoading(false))
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<any>()

    return(
    <>
        <Navbar />


        {/* <TopSec/> */}


        {/* // ? Below is the code for Breadcrumb's and Sorting strip */}
        <Box
            mt='40px'
            w='100%'
            mb='20px'
        >
            <Flex justify='flex-start' w='80%' m='auto' fontSize='12px' color='#6c6d70'>
                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>SHOP.COM</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='/products'>Rc-Toys</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
            </Flex>

            <Divider/>

            <Flex justify={{base:'space-between', lg:'flex-start'}} w='80%' m='auto' align='center' pt={2} pb={2} fontSize='14px'>
                <HStack w={{base:'30%',lg:'20%'}} align='center'>
                    <Select placeholder="Sort By" variant='outline'  fontWeight='semibold' border='1px solid orange' colorScheme='orange' focusBorderColor="orange" w='150px' onChange={(e) => setFilter(e.target.value)}>
                        <option value='DESC'>High to Low</option>
                        <option value='ASC'>Low to High</option>
                    </Select>
                </HStack>

                <Button display={{lg:'none'}} ref={btnRef} onClick={onOpen} variant='outline' rightIcon={<FiFilter/>}>Filters </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='bottom'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Filters</DrawerHeader>

                    <DrawerBody>
                        <LeftSec data={data} getProductByPrice={getProductByPrice} getProductByRating={getProductByRating}/>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                
            </Flex>


            {/* //? Here starts the code for Product's grid & Filters */}
            {/* <Image display={{base:'none', md:'block'}} src={blob1.src} w='300px' position='fixed' top='40%' left='20%' zIndex='-10' /> */}
            <Image display={{base:'none', md:'block'}} src={blob2.src} w='400px' position='fixed' top='40%' left='80%' zIndex='-10' />
            <Image display={{base:'none', md:'block'}} src={blob3.src} w='400px' position='fixed' top='20%' left='50%' zIndex='-10' />
            {/* <Image display={{base:'none', md:'block'}} src='https://animoto.com/static/TealDots-212c4a91665ce0cc624cdf92514a34d6.svg' w='180px' position='fixed' top='20%' left='0%' zIndex='-10' /> */}
            <Box w='100%' 
              py={3}
              backgroundSize='cover'
              backgroundImage={bgSvg}
              backgroundAttachment='fixed'
              >

                <Flex m='auto' mt='30px' mb='30px' w={{lg:'90%', xl:'80%'}} justify={{base:'center', lg:'space-between'}}  >

                    <Box bg='white'  w='20%' h='fit-content' borderRadius='2xl'  display={{base:'none', lg:'block'}} position='sticky' top='100px' p={2}
                        bgColor='rgba(255, 255, 255, .35)' style={{backdropFilter: 'blur(5px)'}} boxShadow='2xl' _hover={{boxShadow:'0 0 1rem 0 rgba(0, 0, 0, .2)'}}
                    >
                        <LeftSec data={data} getProductByPrice={getProductByPrice} getProductByRating={getProductByRating}/>
                    </Box>

                    <Box  w={{base:'95%',lg: "75%", xl:'78%'}} >
                        <MidSec data={data} page={page} setPage={setPage} currPage="products"/>
                    </Box>

                </Flex>

            </Box>

        </Box>


        <Footer/>
    
    </>
    )
};
