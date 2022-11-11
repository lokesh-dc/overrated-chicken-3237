import { Box, Button, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { getProducts, getTotalPages } from "../../../API/api";
// import PaginationComponent from "../../../Components/Pagination/PaginationComponent";
import ProductCard from "./card/ProductCard";

export default function MidSec({data, page, setPage, currPage}:any) {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        // getTotalPages().then((res) => setAllData(res.data))
    },[])

    const totalPages = Math.ceil(allData.length/20)


    console.log(totalPages, data.length)

    return(
        <Flex flexDir='column' zIndex='0' >
            <SimpleGrid minChildWidth='250px' placeItems='center' gap={4} 
            >
                {
                    data.slice(0,20)?.map((item:any) => (
                        <ProductCard {...item} key={item.id} currPage={currPage}/>
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
