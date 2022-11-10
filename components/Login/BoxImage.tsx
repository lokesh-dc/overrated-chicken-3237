import { Flex , Img, Text } from "@chakra-ui/react"

import market from "../../Resources/illustrations/welcome.jpg"


export default function BoxImage(){
    return(
        <Flex justifyContent="flex-end" h="100vh" alignItems="center" gap="0" flexDirection="column" display={{base:"none", sm:"none", md:"none", lg:"flex"}} >
            <Img src={market.src} />
        </Flex>
    )
}