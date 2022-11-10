import { Box, Button, Flex, FormLabel, Grid, HStack,  Input,  PinInput, PinInputField, Text } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/Login/Navbar";

import bg from "../Resources/background.jpg"

export default function VerifyEmail() {

    const [email,setEmail] = useState("");
    const [otp, setOtp] = useState(0);
    
    
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



    return (
        <>
        <Navbar />
        <Grid h="93vh" bgImage={bg.src} bgSize="100%" >
            <Grid gap="30x" p="30px" width="400px" margin="auto" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bgColor="white" justifyContent="center">
                <Text fontSize="3rem" textTransform="uppercase">Verification</Text>
                <Flex flexDir="column" gap="20px" my="40px">
                    <Box>
                        <FormLabel>Confirm your Email Id:</FormLabel>
                        <Input onChange={handleInput} value={email}/>
                    </Box>
                    <Box>
                    <FormLabel>Enter your OTP:</FormLabel>
                    <HStack justifyContent="center" mb={10}>
                        <PinInput placeholder='-'  type='number' otp>
                            <PinInputField onChange={handleChange}/>
                            <PinInputField onChange={handleChange}/>
                            <PinInputField onChange={handleChange}/>
                            <PinInputField onChange={handleChange}/>
                            <PinInputField onChange={handleChange}/>
                        </PinInput>
                    </HStack>
                   <Text fontSize="sm" color="grey">Email has been successfully sent.</Text>
                    </Box>
                    <Grid templateColumns="1fr 1fr" w="100%" gap="10px">
                        <Button colorScheme="transparent" border="1px solid blue" color="blue" onClick={handleClear}>Clear</Button>
                        <Button colorScheme="blue" loadingText="Verifying..">Verify</Button>
                    </Grid>

                </Flex>
            </Grid>
        </Grid>
        </>
    )
}