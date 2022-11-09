import { Grid , Flex, Text, Input, Button, Img, Box } from "@chakra-ui/react"

import style from "../styles/footer.module.css"
import logo from "../Resources/blackCircle.png"

import { SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook } from "react-icons/sl"

export default function Footer(){
    return(
        <Grid className={style.footer} gap={10} >
            <Grid templateColumns="1fr 1fr"justifyContent="space-evenly" px={30}  py={7} gap="50px">
                <Text fontSize="2rem">Subscribe to Newsletter</Text>
                <Flex border="1px solid">
                    <Input placeholder="example@gmail.com" border="none" />
                    <Button colorScheme="transparent" borderRadius="0"> Subscribe</Button>
                </Flex>
            </Grid>
            <Grid templateColumns=" 0.5fr 1fr 1fr ">
                <Flex justifyContent="space-evenly" flexDirection="column">
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
                {/* <Flex gap="5px" flexDirection="column">   
                    <Text>Socials</Text>
                    <Text>About us</Text>
                    <Text>Contact us</Text>
                    <Text>Partner With us</Text>
                    <Text>Features</Text>
                    <Text>Blog</Text>
                </Flex> */}
            </Grid>
        </Grid>
    )
}