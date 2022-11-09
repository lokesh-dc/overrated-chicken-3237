import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Flex, HStack, Image, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import LeftSec from "../../components/Products/LeftSec";
import MidSec from "../../components/Products/MidSec";
import RightSec from "../../components/Products/RightSec";
import TopSec from "../../components/Products/TopSec";

import bgSvg from '../../Resources/blob-scene-haikei.svg'
import bubbles from '../../Resources/circle-scatter-haikei.svg'
import blob1 from '../../Resources/blob1.svg'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Products() {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("ASC")
    const [loading , setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        // getProducts(page, 20, filter).then((res) => {
        //     setData(res.data)
        //     setLoading(false)
        // })
        // .catch((err) => setLoading(false))
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

    return(
    <>
        <Navbar />


        <TopSec/>


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
                <Text w={{base:'65%', lg:'80%'}}>You searched <b>rc toys</b>: 6,523 product results</Text>
                
            </Flex>


            {/* //? Here starts the code for Product's grid & Filters */}
            <Image src={blob1.src} w='300px' position='fixed' top='40%' left='20%' zIndex='-10' />
            <Box w='100%' 
              py={3}
              backgroundSize='cover'
              backgroundImage={bgSvg}
              backgroundAttachment='fixed'
              >

                <Flex m='auto' mt='30px' mb='30px' w='80%' justify={{base:'center', lg:'space-between'}}  >

                    <Box bg='white'  w='20%' h='fit-content' borderRadius='2xl'  display={{base:'none', lg:'block'}} position='sticky' top='50px' p={2}
                        bgColor='rgba(255, 255, 255, .35)' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' _hover={{boxShadow:'0 0 1rem 0 rgba(0, 0, 0, .2)'}}
                    >
                        <LeftSec data={data} getProductByPrice={getProductByPrice} getProductByRating={getProductByRating}/>
                    </Box>

                    <Box  w={{base:'95%', xl:'78%'}} >
                        <MidSec data={data} page={page} setPage={setPage}/>
                    </Box>

                </Flex>

            </Box>

        </Box>


        <Footer/>
    
    </>
    )
};
