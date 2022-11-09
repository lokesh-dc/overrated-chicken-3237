import { Grid , Flex, Text, Input, Button, Img, Box } from "@chakra-ui/react"

import style from "../styles/footer.module.css"
import logo from "../Resources/blackCircle.png"

import award1 from "../Resources/Awards/1.webp"
import award2 from "../Resources/Awards/2.png"
import award3 from "../Resources/Awards/3.webp"
import award4 from "../Resources/Awards/4.webp"


import { SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook } from "react-icons/sl"

export default function Footer(){
    return(
        <Grid className={style.footer}  p={0} pt="10">
            <Grid templateColumns="1fr 1fr"justifyContent="space-evenly" px={30}  py={7} gap="50px">
                <Text fontSize="2rem">Subscribe to Newsletter</Text>
                <Flex border="1px solid">
                    <Input placeholder="example@gmail.com" border="none" />
                    <Button colorScheme="transparent" borderRadius="0"> Subscribe</Button>
                </Flex>
            </Grid>
            <Grid templateColumns="0.5fr 1fr 1fr" w="90%" m="auto" py={10}>
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
            </Grid>
            <Text textAlign={"center"} bg="white" color="black" p="10px" borderBottom="1px solid">© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.</Text>
            <Flex justifyContent="center" gap="10" bg="white" p={5} borderBottom="1px solid">
                <Img src={award1.src} />
                <Img src={award2.src} />
                <Img src={award3.src} />
                <Img src={award4.src} />
            </Flex>
        </Grid>
    )
}