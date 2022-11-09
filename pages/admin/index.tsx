import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { CgBriefcase } from 'react-icons/cg'
import { HiOutlineIdentification } from 'react-icons/hi'
import { FiPieChart } from 'react-icons/fi'

import dashBack from '../../Resources/dashboard.svg'
import AllTable from './Table/AllTable'

const Admin = () => {
  return (
    <Tabs
            variant="soft-rounded"
            colorScheme="purple"
            minH="100vh"
            defaultIndex={3}
            bg="whitesmoke"
            isLazy='true'
            overflow='hidden'
         >
            <TabList
               flexDir="column"
               p={{ base: 0, md: 4 }}
               h="100%"
               w="14%"
               position="fixed"
               justifyContent="space-between"
            //    borderRight="1px solid lightgray"
               boxShadow="lg"
               bg={"black"}
               borderTopRightRadius={"xl"}
            >
               <VStack spacing={8}>
                  <Tab
                     fontSize={"lg"}
                     bg="black"
                     transition="0.2s ease-out"
                     color='white'
                     _hover={{
                        background:  "#c3c8fd",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'#553C9A'
                     }}
                     w="100%"
                     display={{ base: "none", lg: "flex" }}
                     gap={3}
                     justifyContent="flex-start"
                  >
                     {" "}
                     <AiOutlineHome fontSize="26px" color="gray" />
                     Dashboard
                  </Tab>

                  <Tab
                     fontSize={"lg"}
                     transition="0.2s ease-out"
                     _hover={{
                        background: "#c3c8fd",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'#553C9A'
                     }}
                     w="100%"
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg="black"
                     color='white'
                     justifyContent="flex-start"
                  >
                     <BiTimeFive fontSize="26px" color="gray" /> All Users
                  </Tab>

                  <Tab
                     fontSize={"lg"}
                     transition="0.2s ease-out"
                     _hover={{
                        background: "#c3c8fd",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'#553C9A'
                     }}
                     w="100%"
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg="black"
                     color='white'
                     justifyContent="flex-start"
                  >
                     <CgBriefcase fontSize="26px" color="gray" /> All Brands
                  </Tab>

                  <Tab
                     fontSize={"lg"}
                     transition="0.2s ease-out"
                     _hover={{
                        background: "#c3c8fd",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'#553C9A'
                     }}
                     w="100%"
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg="black"
                     color='white'
                     justifyContent="flex-start"
                  >
                     <HiOutlineIdentification fontSize="26px" color="gray" />{" "}
                     All Products
                  </Tab>

                  <Tab
                     fontSize={"lg"}
                     transition="0.2s ease-out"
                     _hover={{
                        background: "#c3c8fd",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'#553C9A'
                     }}
                     w="100%"
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg= "black"
                     color='white' 
                     justifyContent="flex-start"
                  >
                     <AiOutlineTeam fontSize="26px" color="gray" /> Create Products
                  </Tab>

                  <Tab
                     fontSize={"lg"}
                     transition="0.2s ease-out"
                     _hover={{
                        background: "#c3c8fd",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'#553C9A'
                     }}
                     w="100%"
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg= "black"
                     color='white'
                     justifyContent="flex-start"
                  >
                     <FiPieChart fontSize="26px" color="gray" />{" "}
                     Create Brands
                  </Tab>
               </VStack>

               <Box>
                <Tab
                 fontSize={"lg"}
                     transition="0.2s ease-out"
                     _hover={{
                        background: "#c3c8fd",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'#553C9A'
                     }}
                     w="100%"
                     gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg= "black"
                     color='white'
                     justifyContent="flex-start">
                    <FiPieChart fontSize="26px" color="gray" />{" "}
                    LogOut
                </Tab>
               </Box>

            </TabList>

            <TabPanels p={2} pl="15%" bgImage={dashBack.src} backgroundSize='cover' h='100vh'>

               <TabPanel border='1px solid blue'>ABC</TabPanel>

               <TabPanel >
                    <Box p={6} w='100%' h='95vh'  bgColor='rgba(0, 0, 0, .15)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' overflowY='scroll'>
                        <Text fontSize='4xl' color='white'>Users</Text>
                        <AllTable/>
                    </Box>
               </TabPanel>

               <TabPanel>
               <Box w='100%' h='95vh'  bgColor='rgba(0, 0, 0, .15)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>

                </Box>
               </TabPanel>

               <TabPanel>
               <Box w='100%' h='95vh'  bgColor='rgba(0, 0, 0, .15)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>

                </Box>
               </TabPanel>

               <TabPanel>
               <Box w='100%' h='95vh'  bgColor='rgba(0, 0, 0, .15)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>

                </Box>
               </TabPanel>

               <TabPanel>
               <Box w='100%' h='95vh'  bgColor='rgba(0, 0, 0, .15)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>

                </Box>
               </TabPanel>
               
            </TabPanels>
         </Tabs>
  )
}

export default Admin