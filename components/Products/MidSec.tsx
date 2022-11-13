import { Box, Button, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { getProducts, getTotalPages } from "../../../API/api";
// import PaginationComponent from "../../../Components/Pagination/PaginationComponent";
import ProductCard from "./card/ProductCard";

export default function MidSec({data, page, setPage, currPage, handleWishlist, handleDelWishlist, handleAddToCart, wishData}:any) {
    const [allData, setAllData] = useState([])

    const totalPages = Math.ceil(allData.length/20)

    console.log(wishData, 'WISHLIST DATA')

    return(
        <Flex flexDir='column' zIndex='0' >
            <SimpleGrid minChildWidth='250px' placeItems='center' gap={4} 
            >
                {
                    wishData?.length == 0 ? 
                    <Heading>Your wishlist is Empty!</Heading>
                    :
                    wishData?.slice(0,20)?.map((item:any) => (
                        <ProductCard {...item.productId} key={item.id} currPage={currPage} handleWishlist={handleWishlist} handleDelWishlist={handleDelWishlist} handleAddToCart={handleAddToCart}/>
                        ))
                }
                {
                    data?.slice(0,20)?.map((item:any) => (
                        <ProductCard {...item} key={item.id} currPage={currPage} handleWishlist={handleWishlist} handleDelWishlist={handleDelWishlist} handleAddToCart={handleAddToCart}/>
                    ))
                }
            </SimpleGrid>
            <Box m='auto' mt='20px' display={{base:'none', lg:'block'}}>
                {/* <PaginationComponent currentPage={page} totalPages={totalPages} setPage={setPage} /> */}
            </Box>
            <Box display={{ lg:'none'}}>
                <Flex justify='center' align='center' gap={3} >
                    <Button disabled={page === 1} onClick={() => setPage(page-1)} colorScheme='purple'>Prev</Button>
                    <Text fontSize='2xl'>{page}</Text>
                    <Button onClick={() => setPage(page+1)} colorScheme='whatsapp'>Next</Button>
                </Flex>
            </Box>
        </Flex>
    )
};
