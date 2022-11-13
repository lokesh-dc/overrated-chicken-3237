import { Box, Flex } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import LeftSec from '../../components/Products/LeftSec'
import MidSec from '../../components/Products/MidSec'

import bgSvg from '../../Resources/blob-scene-haikei.svg'

const index = ({props}: any) => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("ASC")
    const [loading , setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`/api/wishlist`).then((res:any) => setData(res.data))
        .catch((err) => console.log(err,'wishlist error here'))
    }, [page, filter])

    const getProductByPrice = (from:any, to:any) => {
        setLoading(true)
        // filterProductByPrice(from, to).then((res) => {
        //     setData(res.data)
        //     setLoading(false)
        // })
        // .catch((err) => setLoading(false))
    }
    
    const handleDelWishlist = (productId:any) => {
        setLoading(true)
        console.log("DELETE WISHLIST", productId)
        axios.delete(`/api/wishlist/query/${productId}`).then((res) => console.log(res, 'delete wishlist res'))
        // filterProductByRating(from, to).then((res) => {
        //     setData(res.data)
        //     setLoading(false)
        // })
        // .catch((err) => setLoading(false))
    }

  return (
    <>
    <Navbar/>

    <Box w='100%' 
        py={3}
        backgroundSize='cover'
        backgroundImage={bgSvg}
        backgroundAttachment='fixed'
        >

        <Flex m='auto' mt='30px' mb='30px' w='80%' justify={{base:'center', lg:'space-between'}}  >

            <Box bg='white'  w='20%' h='fit-content' borderRadius='2xl'  display={{base:'none', lg:'block'}} position='sticky' top='100px' p={2}
                bgColor='rgba(255, 255, 255, .35)' style={{backdropFilter: 'blur(5px)'}} boxShadow='2xl' _hover={{boxShadow:'0 0 1rem 0 rgba(0, 0, 0, .2)'}}
            >
                <LeftSec data={props} getProductByPrice={getProductByPrice} getProductByRating={handleDelWishlist}/>
            </Box>

            <Box  w={{base:'95%', xl:'78%'}} >
                <MidSec wishData={data} page={page} setPage={setPage} currPage="wishlist"  handleDelWishlist={handleDelWishlist}/>
            </Box>

        </Flex>

    </Box>

    <Footer/>
    </>
  )
}

export default index



export async function getServerSideProps({req}:any) {
    let resp:any = await axios.get("http://localhost:3000/api/products")

    if(!req.cookies.mohallaMartJwt){
        return {
            redirect: {
                destination: '/products',
                permanent: false,
            },
        }
    }
    

    return {
      props: {props: resp.data}, // will be passed to the page component as props
    }
  }