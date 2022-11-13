import { Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react"
import { CartItem } from "../../components/cart/CartItem";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Orders() {
    const [ordersData, setOrdersData] = useState([]);


    useEffect(()=>{
        axios.get("/api/orders").then((r) => setOrdersData(r.data)).catch((e) => alert(e))
    },[])


    return(
        <>
            <Navbar/>
            <Text fontSize="3rem" py={8} px={8} w='70%' m="auto">Your Orders</Text>
            <Stack spacing="6" w="60%" m="auto" mb='100px'>
              {
                ordersData?.map((item:any) => (
                    <CartItem key={item._id} {...item} />
                ))
              }
            </Stack>
            <Footer />
        </>
    )
}

