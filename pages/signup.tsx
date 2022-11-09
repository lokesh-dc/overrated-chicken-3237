import Link from "next/link"
import { Grid, Box, Text, Input, Flex, Button, Checkbox, InputGroup,InputLeftAddon  } from "@chakra-ui/react"

import { BsGoogle } from "react-icons/bs"

// Import Components
import Navbar from "../components/Login/Navbar"
import PasswordInput from "../components/Login/passwordInput"
import useForm from "../Hooks/useForm"

// Import stylesheet
import style from "../styles/auth.module.css"

// Images import 
import bg from "../Resources/b.png"
import market from "../Resources/market.jpg"
import { useState } from "react"

export default function signup(){


    const { creds, execute} = useForm();
    const [formError, setFormError] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        execute(name, value);
    }

    const handleSubmit = () =>{
        alert(creds.firstName);
    }

    return(
       <Grid templateColumns="2fr 1.5fr" >
            <Grid  p={10} h="100vh" templateRows="7vh 93vh"  bgImage={bg.src} >
                <Navbar />
                <Flex className={style.form} flexDirection="column" gap={5} w="60%"  m="auto"  bgColor="white" >
                    <Text className={style.head}>Create an Account</Text>

                    <Grid gap="20px" templateColumns="repeat(2,1fr)" w="100%" >
                        <Input placeholder="First name" name="firstName" onChange={handleChange} />
                        <Input placeholder="Last name"  name="lastName" onChange={handleChange} />
                    </Grid>
                    <Input placeholder="example@email.com" name="email" />
                    {/* <Input type="password" placeholder="password" name="password" onChange={handleChange} /> */}
                    <PasswordInput handleChange={handleChange}/>
                    <InputGroup>
                        <InputLeftAddon children='+91' />
                        <Input type='tel' placeholder='Phone number' name="mobile" onChange={handleChange} />
                    </InputGroup>
                    {
                        formError!=="" &&
                        <Text className={style.error}>{formError}</Text>
                    }
                    <Button colorScheme="transparent" color="black" onClick={handleSubmit}>Signup</Button>
                    <Checkbox size='lg' defaultChecked>
                        Signup for offers & discounts
                    </Checkbox>
                    <Text >Already have an account? <Link href="/login">Sign in.</Link>  </Text>
                    {/* <Text >or</Text>
                    <BsGoogle /> */}
                </Flex>
            </Grid>
           <Box h="100vh" justifyContent="center" alignItems="center" bgSize="cover" bgImage={market.src} ></Box>
       </Grid>
    )
}