import Link from "next/link"
import { Grid, Text, Input, Flex, Button, Checkbox, InputGroup,InputLeftAddon  } from "@chakra-ui/react"


// Import Components
import Navbar from "../components/Login/Navbar"
import PasswordInput from "../components/Login/PasswordInput"
import useForm from "../Hooks/useForm"

// Import stylesheet
import style from "../styles/auth.module.css"

import { useState } from "react"
import BoxImage from "../components/Login/BoxImage"
import Errordiv from "../components/Login/Errordiv"

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
        <Grid h="100vh" templateColumns={{base:"1fr", sm:"1fr", md:"1fr", lg:"1fr 1fr"}}>
            <Grid  p={{base:"2", sm:"2",md:'2', lg:"10"}} h="100vh" templateRows="7vh 93vh" >
                <Navbar />
                <Flex className={style.form} flexDirection="column" gap={5} 
                    w={{base:"100%", sm:"100%", md:"80%", lg:"60%"}}  m="auto"  bgColor="white" 
                    px={{base:"10px", sm:"10px", md:"20px", lg:"50px"}}
                    py={{base:"30px", sm:"30px", md:"50px", lg:"50px"}}
                    position="relative"
                    
                >
                    <Text position="absolute" top={{base:"0", md:"-20px", lg:"-40px"}} left={{base:"10px", lg:"-60px"}} fontSize={{base:"1rem", md:"3rem"}} fontWeight="bold" >WELCOME ONBOARD!</Text>
                    <Text className={style.head}>Sign In</Text>
                    <Input placeholder="example@email.com" name="email" />
                    <PasswordInput handleChange={handleChange}/>
                    {
                        formError!=="" &&
                        <Errordiv formError={formError}/>
                    }
                    <Button colorScheme="transparent" color="black" onClick={handleSubmit}>Signup</Button>
                    <Flex justifyContent="space-between">
                        <Checkbox size='lg' defaultChecked>
                            Remember me
                        </Checkbox>
                        <Text><Link href="/forgot_password">Forgot Password?</Link></Text>

                    </Flex>
                    <Text >Don't have an account? <Link href="/signup">Sign up.</Link>  </Text>
                    {/* <Text >or</Text>
                    <BsGoogle /> */}
                </Flex>
            </Grid>
            <BoxImage />
        </Grid>
    )
}