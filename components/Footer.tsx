import { Grid , Flex, Text, Input, Button, Img, Box } from "@chakra-ui/react"

import style from "../styles/footer.module.css"
import logo from "../Resources/blackCircle.png"



import { SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook } from "react-icons/sl"

export default function Footer(){
    return(
        <Grid className={style.footer}  p={0} pt="10">
            <Grid templateColumns={{base:"1fr", sm:"1fr", md:"1fr 1fr", lg:"1fr 1fr"}} justifyContent="space-evenly" px={30}  py={7} gap="50px" borderRadius={{base:"0", lg:"20px"}}>
                <Text fontSize={{base:"1.5rem",md:"1rem", lg:"1.6rem"}}>Subscribe to Newsletter</Text>
                <Flex border="1px solid" borderRadius={{base:"0", lg:"10px"}}>
                    <Input placeholder="example@gmail.com" border="none" borderRadius={{base:0, lg:"10px"}} />
                    <Button colorScheme="transparent" borderRadius={{base:0, lg:"10px"}}> Subscribe</Button>
                </Flex>
            </Grid>
            <Grid templateColumns={{base:"1fr", sm:"1fr", md:"1fr", lg:"0.5fr 1fr 1fr"}} gap="20px" w="90%" m="auto" py={10}>
                <Flex justifyContent="space-evenly" flexDirection={{base:"column-reverse", lg:"column"}}>
                    <Img src={logo.src} w="160px" />
                    <Flex gap={10}>
                        <SlSocialTwitter />
                        <SlSocialLinkedin />
                        <SlSocialInstagram />
                        <SlSocialFacebook />
                    </Flex>
                </Flex>
                <Flex gap="5px" flexDirection="column">   
                    <Text>Services</Text>
                    <Text>About us</Text>
                    <Text>Contact us</Text>
                    <Text>Partner With us</Text>
                    <Text>Features</Text>
                    <Text>Blog</Text>
                </Flex>
                <Flex gap="5px" flexDirection="column">   
                    <Text>Terms & Conditions</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Terms of Use</Text>
                    <Text>Advertising Disclosure</Text>
                    <Text>return Policy</Text>
                    <Text>Shipping</Text>
                </Flex>
            </Grid>
            <Text textAlign={"center"} bg="white" color="black" p="10px" borderBottom="1px solid">© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.</Text>
        </Grid>
    )
}