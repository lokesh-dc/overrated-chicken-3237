import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Input, Select, Text, useDisclosure, useToast } from "@chakra-ui/react";
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

export default function Products(props:any) {

    console.log(props, "PROPS")

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("ASC")
    const [loading , setLoading ] = useState(false)
    const [products , setProducts] = useState(false)
    const [Allproducts , setAllProducts] = useState(props.props)
    // var cookie = true

    const toast = useToast()

    // console.log(products)
    const handleWishlist = (productId:any) => {
        setLoading(true)
        // console.log(id,'ID')
        if(props.cook != ""){
            axios.post('/api/wishlist', {productId}).then((res) => {
                console.log(res.data, 'this is wishlist res')
                if(res.data == "Product added"){
                    toast({
                        title: 'Item Added.',
                        description: "Product added to Wishlist.",
                        status: 'success',
                        duration: 6000,
                        isClosable: true,
                    })
                }
                else if(res.data == "Product already Added"){
                    toast({
                        title: "Item alread added",
                        description: "Product is already present in wishlist.",
                        status: 'info',
                        duration: 3000,
                        isClosable: true,
                    })
                }
            })
            .catch((e) => {
                console.log(e.response.data, 'this is wishlist error')
                toast({
                    title: 'Something went wrong!',
                    description: "Oops! Looks like some errorr",
                    status: 'error',
                    duration: 6000,
                    isClosable: true,
                })
            })
        }else{
            alert("Login first")
        }
        // console.log("ADDED TO WISHLIST", id)
    }
    const handleDelWishlist = (id:any) => {
        setLoading(true)
        console.log("DELETE WISHLIST", id)
        axios.delete("/api/wishlist", id).then((res:any) => {
            console.log(res, "PRODUCT DELETED ")
        }).catch((e) => {
            console.log(e, 'DELETE FAIL')
        })
        // filterProductByRating(from, to).then((res) => {
        //     setData(res.data)
        //     setLoading(false)
        // })
        // .catch((err) => setLoading(false))
    }

    const handleFilter =(e:any)=>{
        console.log(e.target.value);
        if(e.target.value=="ASC"){
            let sorted = Allproducts.sort((a:any,b:any)=>{
                return +(a.price) - +(b.price)
            })
            setProducts(!products)
        }else if(e.target.value==="DESC"){
            let sorted = Allproducts.sort((a:any,b:any)=>{
                return +(b.price) - +(a.price)
            })
            setProducts(!products)
        }
    }

    const getProductsByPrice=(data:any)=>{
        console.log(data, "mobile")
        setAllProducts(data)
        setProducts(!products)
        // setAllProducts(props)
    }

    const getProductsByRating = () => {

    }

    useEffect(()=>{

    },[products])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<any>()


    const handleAddToCart = (productId:any) => {

        if(props.cook == ""){
            return toast({
                title: 'Login first',
                description: "Please login first for using cart",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        }

        axios.post('/api/carts', {productId}).then((res) => {
            console.log(res, 'ADD TO CART SUCCESS')
            if(res.data == "Product added"){
                toast({
                    title: 'ADDED TO CART.',
                    description: "Items successfully added to cart.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }
            else if(res.data == 'Product already Added'){
                toast({
                    title: 'Already Added.',
                    description: "Item is already in the cart.",
                    status: 'info',
                    duration: 4000,
                    isClosable: true,
                })
            }
        }).catch((e) => {
            console.log(e, 'FAILURE ADD TO CART')
            toast({
                title: 'Something went wrong',
                description: "Oops! Something went wrong",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } )
    }

    const handleClick =() => {
        axios.get('/api/users/logout').then((res) => console.log(res))
    }

    return(
    <>
        {
            props.cook == '' ? 
            <Navbar props=""/> : 
            <Navbar  props={props.cook}/> 

        }


        {/* <TopSec/> */}
        <Button onClick={handleClick}>Test</Button> //! TESTING LOGOUT ROUTE  


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
                    <Select placeholder="Sort By" variant='outline'  fontWeight='semibold' border='1px solid orange' colorScheme='orange' focusBorderColor="orange" w='150px' onChange={handleFilter}>
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
                        <LeftSec data={Allproducts} getProductsByPrice={getProductsByPrice} />
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
                        <LeftSec data={Allproducts} getProductsByPrice={getProductsByPrice} getProductByRating={getProductsByRating}/>
                    </Box>

                    <Box  w={{base:'95%',lg: "75%", xl:'78%'}} >
                        <MidSec data={Allproducts} page={page} setPage={setPage} handleWishlist={handleWishlist} handleDelWishlist={handleDelWishlist} handleAddToCart={handleAddToCart} currPage="products"/>
                    </Box>

                </Flex>

            </Box>

        </Box>


        <Footer/>
    
    </>
    )
};


export async function getServerSideProps({req}:any) {
    let resp:any = await axios.get("http://localhost:3000/api/products")

    
    if(req?.cookies?.mohallaMartJwt){
        let mohallaToken = req.cookies.mohallaMartJwt
        console.log(mohallaToken, 'MOHALLA TOKEN')

        return {
              props: {
                props: resp.data,
                cook: mohallaToken
            } // will be passed to the page component as props
        }
    }

    return {
        props: {
            props: resp.data,
            cook: ""
        }
    }


  }

