import Link from "next/link"

import { Img, Flex, Button,  HStack, Menu, MenuButton, MenuList, MenuItem, Tooltip, useDisclosure, Collapse, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, VStack, cookieStorageManager, useToast } from "@chakra-ui/react";



import logo from "../Resources/logo-circle.png"
import style from "../styles/navbar.module.css"
import removedBG from '../Resources/removedBgMohallamart.png'

import { BiUser, BiCart, BiShoppingBag } from "react-icons/bi"
import TopSec from "./Products/TopSec";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi"
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {GrUserAdmin} from 'react-icons/gr'

export default function Navbar({props, handleSearch}:any){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef:any = useRef<any>()
    const router = useRouter()
    const toast = useToast()
    const [role, setRole] = useState<any>()

    useEffect(() => {
        axios.get('/api/users/rolecheck').then((res:any) => {
            console.log(res.data , 'ROLE, NAVBAR')
            setRole(res.data)
        })
        .catch((e) => {
            console.log(e, 'e TOLE NAVBAR')
            setRole("Buyer")
        })
     }, [])
  

    // if(props != ""){
    //     props = JSON.parse(props)
    // }
    if(props){
        props = JSON.parse(props) || null
    }
    console.log(props, 'NAVBAR PROPS')
    const handleSeller = () => {
        if(props != ""){
            router.push("/becomeseller")
        }else{
            toast({
                title:'You have to Login first',
                description: "Login OR Create an account first",
                status: 'warning',
                duration: 6000,
                isClosable: true,
            })
            router.push("/login")
        }
    }

    const handleLogout =() => {
        axios.get('/api/users/logout').then((res) => {
            console.log(res, 'LOGOUT SUCCESS')
            toast({
                title: 'Logout Successfull.',
                description: "You have logged out successfully.",
                status: 'info',
                duration: 9000,
                isClosable: true,
              })
      
        })
    }
    return(
        <HStack w='95%' m='auto' mt='10px' position='sticky' top='0%' zIndex='1000' alignItems="center" justify='space-between' py={3} px={6} borderRadius='3xl'
        bgColor='rgba(255, 255, 255, .70)' style={{backdropFilter: 'blur(7px)'}} boxShadow='xl'>
            <Link href="/" >
                <Flex gap="5px" alignItems="center">
                    <Img src={logo.src} w="60px" h="60px" />
                    <Img src={removedBG.src} w="250px"  display={{base:'none', sm:"none", md:"none", lg:"block" }} />
                </Flex>
            </Link>

            {/* <Box w='65%' border='1px solid red'> */}
                <TopSec handleSearch={handleSearch} />
            {/* </Box> */}

            <Flex w='20%' justifyContent="space-evenly" display={{base:'none', sm:"none", md:"flex" }} >
                {/* <Link href="/login">
                    <BiUser style={{fontSize:'26px'}}/>
                </Link> */}
                <Menu isLazy>
                    <MenuButton>
                        <BiUser style={{fontSize:'26px'}}/>
                    </MenuButton>
                    <MenuList>
                        <Link href="/login">
                            {
                                props ? 
                                <MenuItem  command='⌘T' onClick={handleLogout}>
                                    Logout
                                </MenuItem>
                                :
                                <MenuItem  command='⌘T'>
                                    Login
                                </MenuItem>
                            }
                        </Link>
                        <Link href='/becomeseller'>
                            <MenuItem command='⌘N'>
                                Become a Seller
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>



                <Tooltip label="Cart">
                    <Link href="/cart">
                        <BiCart style={{fontSize:'26px'}}/>
                    </Link>
                </Tooltip>

                <Tooltip label="Wishlist">
                    <Link href="/wishlist">
                        <AiOutlineHeart style={{fontSize:'26px', color:'red'}}/>
                    </Link>
                </Tooltip>
                {
                    role != "Buyer" && 
                    <Tooltip label="Admin Panel">
                        <Link href="/admin">
                            <GrUserAdmin style={{fontSize:'26px', color:'green'}}/>
                        </Link>
                    </Tooltip>

                }
            </Flex>

             
            <Button ref={btnRef} colorScheme='transparent' color="black" border="1px solid" onClick={onOpen} display={{md:'none'}}>
                <GiHamburgerMenu />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody>
                    {/* <VStack fontSize='30px' spacing={5}>
                        <Link href='products'>See all Products</Link>
                        <Link href='wishlist'>Wishlist</Link>
                        <Link href='cart'>Cart</Link>
                        <Button colorScheme='green'>Login</Button>
                    </VStack> */}
                    <Flex flexDirection="column" className={style.drawer}>
                    <Link href='products'>See all Products</Link>
                        <Link href='wishlist'>Wishlist</Link>
                        <Link href='cart'>Cart</Link>
                        <Link href="/login"><Button colorScheme='transparent'>Login</Button></Link>
                    </Flex>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button colorScheme='blue' onClick={handleSeller}>Become a Seller </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </HStack>
    ) 
}


