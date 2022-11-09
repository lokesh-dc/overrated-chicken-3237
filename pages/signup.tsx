import Link from "next/link"

import { Grid, Box, Text, Input, Flex, Button, Checkbox, InputGroup,InputLeftAddon  } from "@chakra-ui/react"

import { BsGoogle } from "react-icons/bs"

import Navbar from "../components/Login/Navbar"

import style from "../styles/auth.module.css"

import bg from "../Resources/b.png"
import market from "../Resources/market.jpg"

export default function signup(){
    return(
       <Grid templateColumns="2fr 1.5fr" >
            <Grid  p={10} h="100vh" templateRows="7vh 93vh"  bgImage={bg.src} >
                <Navbar />
                <Flex className={style.form} flexDirection="column" gap={5} w="60%"  m="auto"  bgColor="white" >
                    <Text className={style.head}>Create an Account</Text>
                    <Grid gap="20px" templateColumns="repeat(2,1fr)">
                        <Input placeholder="First name"/>
                        <Input placeholder="Last name"/>
                    </Grid>
                    <Input placeholder="example@email.com"/>
                    <Input type="password" placeholder="password"/>
                    <InputGroup>
                        <InputLeftAddon children='+91' />
                        <Input type='tel' placeholder='Phone number' />
                    </InputGroup>
                    <Checkbox size='lg' defaultChecked>
                        Signup for offers & discounts
                    </Checkbox>
                    <Button colorScheme="transparent" color="black">Signup</Button>
                    <Text >Already have an account? <Link href="/login">Sign in.</Link>  </Text>
                    <Text >or</Text>
                    <BsGoogle />
                </Flex>
            </Grid>
           <Box h="100vh" justifyContent="center" alignItems="center" bgSize="cover" bgImage={market.src} ></Box>
       </Grid>
    )
}