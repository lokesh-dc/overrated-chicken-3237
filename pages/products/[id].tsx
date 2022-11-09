import React from "react";
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { RadioSizeCard } from "../../components/SingleProduct/RadioCard";
import { AiOutlineStar } from "react-icons/ai";
import { SlBag } from "react-icons/sl";

const SingleProductPage = () => {
  return (
    <>
      <SimpleGrid
        columns={[1, 1, 2]}
        maxWidth="90%"
        margin="auto"
      >
        <Box
          w="100%"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          borderRadius="20px"
          margin="auto"
          display={"flex"}
          justifyContent="center"
        >
          <Image
            borderRadius="20px"
            w="90%"
            src="https://i.etsystatic.com/6541228/r/il/2bc891/3860052985/il_fullxfull.3860052985_s6mt.jpg"
          />
        </Box>

        <Box p="30px">
          <Text fontSize="1xl" color={"#2a977d"} fontWeight="500">
            Mohalla Mart
          </Text>
          <Text fontSize="3xl" color={"black"} fontWeight="500">
            Essential Men's Regular-Fit-Long Sleeve Oxford Shirt
          </Text>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <AiOutlineStar key={i} color={i < 4 ? "#2a977d" : "gray.300"} />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              4+ Rating
            </Box>
          </Box>
          <Box marginTop={"20px"}>
            <Box marginTop={"20px"}>
              <Text fontSize={"1xl"} fontWeight="500">
                Description
              </Text>
              {/* Description Here */}
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis aut tenetur sint! Nam, totam vero. Debitis iusto at
                deserunt minima doloremque, voluptatum cupiditate similique iure
                minus saepe animi, officia expedita?
              </Text>
              <Text
                fontSize={"1xl"}
                fontWeight="500"
                marginTop={"20px"}
                marginBottom="10px"
              >
                Choose Size
              </Text>
              <RadioSizeCard />
              <Text fontSize={"1xl"} fontWeight="500" marginTop={"30px"}>
                Quantity
              </Text>
              <Flex
                maxWidth="140px"
                marginTop={"10px"}
                justifyContent={"center"}
                gap="15px"
                p="10px 0px"
                borderRadius={"10px"}
                boxShadow={
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                }
                alignItems={"center"}
              >
                <Button borderRadius={"50%"}>-</Button>
                <Text>1</Text>
                <Button borderRadius={"50%"}>+</Button>
              </Flex>
              <VStack w="80%" m="auto" marginTop={"30px"} gap="10px">
                <Button w="100%" color="white" bg={"#2a977d"}>
                  {" "}
                  Buy Now
                </Button>
                <Button
                  w="100%"
                  colorScheme="#2a977d"
                  variant="outline"
                  color={"#2a977d"}
                >
                  Add To Wishlist <SlBag />
                </Button>
              </VStack>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>

    </>
  );
};

export default SingleProductPage;
