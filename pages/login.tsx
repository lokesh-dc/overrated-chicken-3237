import Link from "next/link"
import { Grid, Text, Input, Flex, Button, Checkbox, InputGroup,InputLeftAddon, Toast, useToast  } from "@chakra-ui/react"


// Import Components
import Navbar from "../components/Login/Navbar"
import PasswordInput from "../components/Login/PasswordInput"
import useForm from "../Hooks/useForm"

// Import stylesheet
import style from "../styles/auth.module.css"

import { useState } from "react"
import BoxImage from "../components/Login/BoxImage"
import Errordiv from "../components/Login/Errordiv"
import {useRef} from 'react'
import axios from "axios"

export default function signup(){


    const { creds, execute} = useForm();
    const [formError, setFormError] = useState("");

    const firstRef:any = useRef(null)

    const toast = useToast()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        execute(name, value);
        creds.password = firstRef.current.value
        console.log(creds, firstRef.current.value)
    }

    const handleSubmit = () =>{
        // alert(creds.password);
        axios.post("/api/users/login", creds).then((res) => {
            console.log(res)
            toast({
                title: 'Login Successful',
                description: "Guess what!, you have successfully logged in.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        })
        .catch((e) => {
            console.log(e.response.data)
            if(e.response.data == "Invalid Credentials"){
                toast({
                    title: 'Invalid Credentials.',
                    description: "Please check your credentials and try again.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }else{
                toast({
                    title: 'Something went wrong.',
                    description: "Oops!, looks like something went wrong, Please try again.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }
        })
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
                    <Input placeholder="example@email.com" name="email" onChange={handleChange}/>
                    <PasswordInput firstRef={firstRef} handleChange={handleChange}/>
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