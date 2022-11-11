import Link from "next/link"
import { Grid, Text, Input, Flex, Button, Checkbox, InputGroup,InputLeftAddon  } from "@chakra-ui/react"

// Import Components
import Navbar from "../components/Login/Navbar"
import PasswordInput from "../components/Login/PasswordInput"
import useForm from "../Hooks/useForm"

// Import stylesheet
import style from "../styles/auth.module.css"

// Images import 
import bg from "../Resources/b.png"
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
       <Grid templateColumns={{base:"1fr", sm:"1fr", md:"1fr", lg:"2fr 1.5fr"}}>
            <Grid  p={{base:"2", sm:"2",md:'2', lg:"10"}} h="100vh" templateRows="7vh 93vh" >
                <Navbar />
                <Flex className={style.form} flexDirection="column" gap={5} 
                    w={{base:"100%", sm:"100%", md:"80%", lg:"60%"}}  m="auto"  bgColor="white" 
                    px={{base:"10px", sm:"10px", md:"20px", lg:"50px"}}
                    py={{base:"30px", sm:"30px", md:"50px", lg:"50px"}}
                    position="relative"
                >
                    <Text position="absolute" top={{base:"0", md:"-20px", lg:"-40px"}} left={{base:"10px", lg:"-60px"}} fontSize={{base:"1rem", md:"3rem"}} fontWeight="bold" >WELCOME ONBOARD!</Text>

                    <Text className={style.head}>Create an Account</Text>

                    <Grid gap="20px" templateColumns="repeat(2,1fr)" >
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
                        <Errordiv />
                    }
                    <Button colorScheme="transparent" color="black" onClick={handleSubmit}>Signup</Button>
                    <Checkbox size='lg' defaultChecked>
                        Signup for offers & discounts
                    </Checkbox>
                    <Text >Already have an account? <Link href="/login">Sign in.</Link>  </Text>
                </Flex>
            </Grid>
           <BoxImage />
       </Grid>
    )
}