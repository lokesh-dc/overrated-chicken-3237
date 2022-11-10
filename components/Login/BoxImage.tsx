import { Box } from "@chakra-ui/react"

import market from "../../Resources/market.jpg"


export default function BoxImage(){
    return(
        <Box h="100vh" justifyContent="center" alignItems="center" bgSize="cover" bgImage={market.src} display={{base:"none", sm:"none", md:"none", lg:"block"}} ></Box>
    )
}