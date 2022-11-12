import { Box, Button, Flex, FormLabel, Grid, HStack,  Input,  PinInput, PinInputField, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import Router from "next/router"

import Navbar from "../components/Login/Navbar";

import bg from "../Resources/background.jpg"
import axios from "axios"
export default function VerifyEmail() {

    const [email,setEmail] = useState("");
    const [otp, setOtp] = useState(0);
    
    const toast = useToast()

    
    function handleChange(e:any){
        let value = otp;
        let inp = +e.target.value;
        value = (value * 10 ) + inp;
        setOtp(value);
    }

    function handleClear(){
        setOtp(0);
        setEmail("");
    }

    function handleInput(e:any){
        setEmail(e.target.value);
    }

    function handleVerify(){
        toast({
            title: 'Verifying your account.',
            description: "Processing..",
            status: 'info',
            duration: 1000,
            isClosable: true,
        })
        axios.post("http://localhost:3000/api/users/verify", {email, otp}).then((res)=>{
            toast({
                title: 'Account verified successfully.',
                description: "Happy Shopping.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            Router.push("/");
        }).catch((e) => {
            toast({
                title: 'Verification failed',
                description: "Check your OtP once.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        })
    }

    return (
        <>
        <Navbar />
        <Grid h="91vh" bgImage={bg.src} bgSize="100%" >
            <Grid gap="30x" p="30px" width="400px" margin="auto" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bgColor="white" justifyContent="center">
                <Text fontSize="3rem" textTransform="uppercase">Verification</Text>
                <Text textAlign="center" fontSize="sm" color="grey">Email has been successfully sent.</Text>

                <Flex flexDir="column" gap="30px" my="40px">
                    <Box>
                        <FormLabel>Confirm your Email Id:</FormLabel>
                        <Input onChange={handleInput} value={email} placeholder="example@email.com"/>
                    </Box>
                    <Box>
                    <Box>
                    <FormLabel>Enter your OTP:</FormLabel>
                        <HStack justifyContent="center" >
                            <PinInput placeholder='0'  type='number' otp>
                                <PinInputField onChange={handleChange}/>
                                <PinInputField onChange={handleChange}/>
                                <PinInputField onChange={handleChange}/>
                                <PinInputField onChange={handleChange}/>
                                <PinInputField onChange={handleChange}/>
                            </PinInput>
                        </HStack>
                    </Box>
                    </Box>
                    <Grid templateColumns="1fr 1fr" w="100%" gap="10px">
                        <Button colorScheme="transparent" border="1px solid" color="black" onClick={handleClear}>Clear</Button>
                        <Button colorScheme="transparent" bg="black" loadingText="Verifying.." onClick={handleVerify} >Verify</Button>
                    </Grid>

                </Flex>
            </Grid>
        </Grid>
        </>
    )
}