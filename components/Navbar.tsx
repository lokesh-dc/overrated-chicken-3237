import Link from "next/link"

import { Img, Flex, Button,  HStack, Menu, MenuButton, MenuList, MenuItem, Tooltip, useDisclosure, Collapse, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, VStack, cookieStorageManager, useToast } from "@chakra-ui/react";



import logo from "../Resources/logo-circle.png"
import style from "../styles/navbar.module.css"
import removedBG from '../Resources/removedBgMohallamart.png'

import { BiUser, BiCart, BiShoppingBag } from "react-icons/bi"
import TopSec from "./Products/TopSec";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi"
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Navbar({props}:any){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef:any = useRef<any>()
    const router = useRouter()
    const toast = useToast()

    // if(props != ""){
    //     props = JSON.parse(props)
    // }
    const handleSeller = () => {
        console.log(props, 'NAVBAR PROPS')
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
                <TopSec/>
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
                            <MenuItem  command='⌘T'>
                                Login
                            </MenuItem>
                        </Link>
                        <MenuItem command='⌘N'>
                            Become a Seller
                        </MenuItem>
                    </MenuList>
                </Menu>



                <Tooltip label="Cart">
                    <Link href="/cart">
                        <BiCart style={{fontSize:'26px'}}/>
                    </Link>
                </Tooltip>

                <Tooltip label="Wishlist">
                    <Link href="/wishlist">
                        <BiShoppingBag style={{fontSize:'26px'}}/>
                    </Link>
                </Tooltip>
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
                        <Button colorScheme='transparent'>Login</Button>
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


