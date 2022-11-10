import { Box, Button, Flex, Grid, Img, Input, Text } from "@chakra-ui/react";
import Navbar from "../../components/Login/Navbar";

import forgot from "../../Resources/illustrations/gorgot.jpg"

import style from "../../styles/auth.module.css"

export default function forgot_password(){
    return(
        <Grid h="100vh">
            <Navbar />
            <Grid templateColumns="1fr 1fr" h="93vh">
                <Flex 
                     w={{base:"100%", sm:"100%", md:"80%", lg:"60%"}}  m="auto"  bgColor="white" 
                     px={{base:"10px", sm:"10px", md:"20px", lg:"50px"}}
                     py={{base:"30px", sm:"30px", md:"50px", lg:"50px"}}
                     className={style.form}
                     flexDirection="column" gap="30px"
                     position="relative"
                >
                    <Text position="absolute" top={{base:"0", md:"-20px", lg:"-40px"}} color="grey" left={{base:"10px", lg:"-60px"}} fontSize={{base:"1rem", md:"3rem"}} fontWeight="bold" >FORGOT PASSWORD?</Text>

                    <Text fontSize="1.5rem" my="30px" textTransform="uppercase" >Verify your Email : </Text>
                    <Input placeholder="example@email.com" />
                    <Button colorScheme="transparent">Verify</Button>
                </Flex>
                <Box h="93vh">
                    <Img src={forgot.src} h="93vh" />
                </Box>
            </Grid>
        </Grid>
    )
}