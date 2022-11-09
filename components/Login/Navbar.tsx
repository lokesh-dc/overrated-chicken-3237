import Link from "next/link"

import { Grid, Img, Flex } from "@chakra-ui/react";

import logo from "../../Resources/logo-circle.png"
import CompanyName from "../../Resources/logo-web.png"


export default function Navbar(){
    return(
        <Grid  alignItems="center">
            <Link href="/">
                <Flex gap="5px" alignItems="center">
                    <Img src={logo.src} w="60px" h="60px" />
                    <Img src={CompanyName.src}  h="60px" />
                    {/* <Text className={style.logo}> Mohollamart.com </Text> */}
                </Flex>
            </Link>
        </Grid>
    ) 
}