
import { MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
//  import Razorpay from 'razorpay-checkout';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
  useToast,
} from '@chakra-ui/react'
import Link from "next/link";
import React, { Component, useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { CartItem } from "../../components/cart/CartItem";
import { CartOrderSummary } from "../../components/cart/CartOrderSummary";
import { cartData } from "../../components/cart/_data";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Cart() {
  const amountRef = useRef(null)
  const toast = useToast()

  const makePayment = async (name:string, email:string, contact:number, amount:number) => {
    console.log("here...", name);
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { 
      method: "POST", 
      body: JSON.stringify({
        name,
        email, 
        contact,
        amount
      })
    }).then((t) =>
      t.json()
    );
    // const data = axios.post('/api/razorpay', {
    //   name, email, contact, amount
    // }).then((res) => console.log(res, "DATA"))
    console.log(data, "DATA2");
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Mohalla Mart Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your patronage",
      image: "https://manuarora.in/logo.png",
      handler: function (response:any) {
        // Validate payment at server - using webhooks is a better idea.
        alert(`Payment Id: ${response.razorpay_payment_id}`);
        alert(`Order Id: ${response.razorpay_order_id}`);
        alert(`Razorpay Signature${response.razorpay_signature}`);
      },
      prefill: {
        name: {name},
        email: {email},
        contact: {contact},
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
 
  

  return (
    <>
    <Navbar/>
        <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
        mb={8}
        mt={5}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ lg: 'flex-start' }}
          spacing={{ base: '8', md: '16' }}
        >
          <Stack spacing={{ base: '8', md: '10' }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart (3 items)
            </Heading>

            <Stack spacing="6">
              {cartData.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary makePayment={makePayment}/>
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link href="/products" style={{color:'blue.500'}}>Continue shopping</Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    <Footer/>
  </>
  );
}

export default Cart;