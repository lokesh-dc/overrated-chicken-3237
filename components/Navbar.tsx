import Link from "next/link"

import { Grid, Text, Img, Flex, Input, Button, Select } from "@chakra-ui/react";


import logo from "../Resources/logo-circle.png"
import CompanyName from "../Resources/logo-web.png"
import style from "../styles/navbar.module.css"

import { BiUser, BiCart, BiShoppingBag } from "react-icons/bi"

export default function Navbar(){
    return(
        <Grid className={style.navbar} alignItems="center" templateColumns={{base: "1fr", sm:"1fr", md:"1fr 1fr 200px", lg:"0.3fr 1fr 200px"}} gap={10}>
            <Link href="/">
            <Flex gap="5px" alignItems="center">
                <Img src={logo.src} w="60px" h="60px" />
                <Img src={CompanyName.src}  h="60px" />
                {/* <Text className={style.logo}> Mohollamart.com </Text> */}
            </Flex>
            </Link>

            <Grid border="1px solid" templateColumns="1fr 5fr 100px">
                <Select placeholder='All Deartments' border="none" borderRadius={0} >
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Input placeholder="search Mohollamart.com" border="none" />
                <Button borderRadius="0" border="none" colorScheme="transparent">Search</Button>
            </Grid>
            <Flex justifyContent="space-evenly" >
                <BiUser />
                <BiCart />
                <BiShoppingBag />
            </Flex>
        </Grid>
    ) 
}