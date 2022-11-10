import Link from "next/link"

import { Grid, Text, Img, Flex, Input, Button, Select } from "@chakra-ui/react";


import logo from "../Resources/logo-circle.png"
import CompanyName from "../Resources/logo-web.png"
import style from "../styles/navbar.module.css"

import { BiUser, BiCart, BiShoppingBag } from "react-icons/bi"

export default function Navbar(){
    return(
        <Grid className={style.navbar} alignItems="center" templateColumns={{base: "60px 1fr", sm:"60px 1fr", md:"60px 1fr 200px", lg:"320px 1fr 200px"}} gap={{base:"10px", md:10}} p={{base:"10px", lg:"10px 50px"}}>
            <Link href="/">
            <Flex gap="5px" alignItems="center">
                <Img src={logo.src} w="60px" h="60px" />
                <Img src={CompanyName.src} w="250px"  h="60px" display={{base:'none', sm:"none", md:"none", lg:"block" }} />
                {/* <Text className={style.logo}> Mohollamart.com </Text> */}
            </Flex>
            </Link>

            <Grid border="1px solid" templateColumns={{base:"5fr 2fr", lg:"1fr 5fr 100px"}} display={{base:'grid', sm:"grid", md:"grid", lg:"grid" }}>
                <Select placeholder='All Deartments' border="none" borderRadius={0} display={{base:'none', sm:"none", md:"none", lg:"flex" }} >
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Input placeholder="search Mohollamart.com" border="none" />
                <Button borderRadius="0" border="none" colorScheme="transparent">Search</Button>
            </Grid>
            <Flex justifyContent="space-evenly" display={{base:'none', sm:"none", md:"flex", lg:"flex" }} >
                <BiUser />
                <BiCart />
                <BiShoppingBag />
            </Flex>
        </Grid>
    ) 
}