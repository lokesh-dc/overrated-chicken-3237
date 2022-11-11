import Link from "next/link"

import { Grid, Text, Img, Flex, Input, Button, Select, Box, HStack, Menu, MenuButton, IconButton, MenuList, MenuItem, Tooltip, useDisclosure, Collapse, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, VStack } from "@chakra-ui/react";


import logo from "../Resources/logo-circle.png"
import CompanyName from "../Resources/logo-web.png"
import style from "../styles/navbar.module.css"
import removedBG from '../Resources/removedBgMohallamart.png'

import { BiUser, BiCart, BiShoppingBag } from "react-icons/bi"
import TopSec from "./Products/TopSec";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";

export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef:any = useRef<any>()
    return(
        <HStack w='95%' m='auto' mt='10px' position='sticky' top='0%' zIndex='1000' alignItems="center" justify='space-between' py={3} px={6} borderRadius='3xl'
        bgColor='rgba(255, 255, 255, .75)' style={{backdropFilter: 'blur(7px)'}} boxShadow='2xl'>
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

             
            <Button ref={btnRef} colorScheme='telegram' onClick={onOpen} display={{md:'none'}}>
                <HamburgerIcon />
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
                    <VStack fontSize='30px' spacing={5}>
                        <Link href='products'>See all Products</Link>
                        <Link href='wishlist'>Wishlist</Link>
                        <Link href='cart'>Cart</Link>
                        <Button colorScheme='green'>Login</Button>
                    </VStack>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button colorScheme='blue'>Become a Seller </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </HStack>
    ) 
}