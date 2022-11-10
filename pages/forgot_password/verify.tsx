import { Box, Button, Divider, Flex, FormLabel, Grid, HStack, Img, Input, PinInput, PinInputField, Text } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../../components/Login/Navbar";

import forgot from "../../Resources/illustrations/gorgot.jpg"

import style from "../../styles/auth.module.css"

export default function forgot_password(){

    const [otp, setOtp] = useState(0);
    
    
    function handleChange(e:any){
        let value = otp;
        let inp = +e.target.value;
        value = (value * 10 ) + inp;
        setOtp(value);
    }

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
                    <Text position="absolute" top={{base:"0", md:"-20px", lg:"-40px"}} left={{base:"10px", lg:"-60px"}} fontSize={{base:"1rem", md:"3rem"}} fontWeight="bold" >FORGOT PASSWORD?</Text>

                    <Text fontSize="1.5rem" textTransform="uppercase" >Verify OTP</Text>
                    <HStack justifyContent="center">
                            <PinInput placeholder='-'  type='number' otp>
                                <PinInputField onChange={handleChange}/>
                                <PinInputField onChange={handleChange}/>
                                <PinInputField onChange={handleChange}/>
                                <PinInputField onChange={handleChange}/>
                                <PinInputField onChange={handleChange}/>
                            </PinInput>
                        </HStack>
                    <Divider />
                    <Box>
                        <FormLabel>Confirm your Email : </FormLabel>
                        <Input placeholder="example@email.com" />
                    </Box>
                    <Box>
                        <FormLabel>Enter new Password : </FormLabel>
                        <Input placeholder="********" />
                    </Box>
                    <Box>
                        <FormLabel>Confirm new Password : </FormLabel>
                        <Input placeholder="*********" />
                    </Box>
    
                    <Button colorScheme="transparent">Confirm</Button>
                </Flex>
                <Box h="93vh">
                    <Img src={forgot.src} h="93vh" />
                </Box>
            </Grid>
        </Grid>
    )
}