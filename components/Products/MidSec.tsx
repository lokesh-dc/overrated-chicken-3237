import { Box, Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { getProducts, getTotalPages } from "../../../API/api";
// import PaginationComponent from "../../../Components/Pagination/PaginationComponent";
import ProductCard from "./card/ProductCard";

export default function MidSec({data, page, setPage}:any) {
    // console.log('this is midSec', data)
    const [allData, setAllData] = useState([])

    useEffect(() => {
        // getTotalPages().then((res) => setAllData(res.data))
    },[])

    const totalPages = Math.ceil(allData.length/20)


    console.log(totalPages, data.length)

    return(
        <Flex flexDir='column' >
            <SimpleGrid minChildWidth='250px' placeItems='center' gap={4} 
            // background='url(https://images.unsplash.com/photo-1544306094-e2dcf9479da3)' 
            >
                {
                    data.map((item:any) => (
                        <ProductCard {...item} key={item.id}/>
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
