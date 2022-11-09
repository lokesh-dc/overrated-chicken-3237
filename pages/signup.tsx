import { Grid, Box, Text, Input, Flex, Button } from "@chakra-ui/react"
import Navbar from "../components/Login/Navbar"

// import bg from "../Resources/"

export default function signup(){
    return(
       <Grid templateColumns="2fr 1.5fr">
            <Box  p={10}>
                <Navbar />
                <Flex flexDirection="column">
                    <Text fontSize="2rem">LOGIN</Text>
                    <Input placeholder="example@email.com"/>
                    <Input type="password" placeholder="password"/>
                    <Button>Signup</Button>
                </Flex>
            </Box>
           <Box h="100vh" justifyContent="center" alignItems="center" bgSize="cover" bgImage="https://images.unsplash.com/photo-1514425263458-109317cc1321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" ></Box>
       </Grid>
    )
}