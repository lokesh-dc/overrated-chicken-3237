import Link from "next/link"

import { Grid, Img, Flex } from "@chakra-ui/react";

import logo from "../../Resources/logo-circle.png"
import CompanyName from '../../Resources/removedBgMohallamart.png'


export default function Navbar(){
    return(
        <Grid  h="80px">
            <Link href="/">
                <Flex gap="5px" alignItems="center" p="10px 30px">
                    <Img src={logo.src} w="60px" h="60px" />
                    <Img src={CompanyName.src}  h="40px" />
                    {/* <Text className={style.logo}> Mohollamart.com </Text> */}
                </Flex>
            </Link>
        </Grid>
    ) 
}