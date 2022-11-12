import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { CgBriefcase } from 'react-icons/cg'
import { HiOutlineIdentification } from 'react-icons/hi'
import { FiPieChart } from 'react-icons/fi'

import dashBack from '../../Resources/dashboard.svg'
import AllTable from '../../components/AdminComps/Table/AllTable'
import Dashboard from '../../components/AdminComps/Dashboard/Dashboard'
import AdminForm from '../../components/AdminComps/forms/adminForm'
// import AllTable from '../../components/AdminComps/Table/AllTable'

const Admin = () => {
  return (
    <Tabs
            variant="soft-rounded"
            colorScheme="purple"
            minH="100vh"
            defaultIndex={0}
            bg="whitesmoke"
            isLazy={true}
            overflow='hidden'
         >
            <TabList
               flexDir="column"
               p={{ base: 0, md: 4 }}
               h="100%"
               w="15%"
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
                     // gap={3}
                     display={{ base: "none", lg: "flex" }}
                     bg= "black"
                     color='white' 
                     justifyContent="flex-start"
                  >
                     <AiOutlineTeam fontSize="26px" color="gray" /> 
                     <Text>Create Products</Text>
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
                     gap={1}
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

               <TabPanel >
                     <Box className='tbl' p={6} w='100%' h='90vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' >
                        <Dashboard/>
                    </Box>
               </TabPanel>

               //* FOR ALL USERS
               <TabPanel >
                    <Box className='tbl' p={6} w='100%' h='90vh'  bgColor='rgba(0, 0, 0, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' overflowY='scroll'>
                        <Text fontSize='4xl' color='white'>Users</Text>
                        <AllTable title="User" roleHeading="role" role="Admin" amount="2500" totalP="Total Purchases(in Rs)" user='Aaryan Sinha' email="aaryansinha16@gmail.com"/>
                    </Box>
               </TabPanel>

               //* FOR ALL BRANDS
               <TabPanel>
                  <Box p={6} w='100%' h='90vh'  bgColor='rgba(0, 0, 0, .15)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' overflowY='scroll'>
                        <Text fontSize='4xl' color='white'>Brands</Text>
                        <AllTable title="User" roleHeading="role" role="Admin" amount="2500" totalP="Total Purchases(in Rs)" user='Aaryan Sinha' email="aaryansinha16@gmail.com"/>
                  </Box>
               </TabPanel>

               //* FOR ALL PRODUCTS
               <TabPanel>
                  <Box w='100%' p={6} h='90vh'  bgColor='rgba(0, 0, 0, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' overflowY='scroll'>
                        <Text fontSize='4xl' color='white'>Products</Text>
                        <AllTable title="Products" roleHeading="Brand" role="Addidas" amount="4.5" totalP="Ratings" user='Sneakers' />
                  </Box>
               </TabPanel>

               //* CREATING PRODUCTS
               <TabPanel>
                  <Box w='100%' p={6} h='90vh'  bgColor='rgba(0, 0, 0, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>
                     <Text fontSize='4xl' color='white'>Create a new Product</Text>
                     <AdminForm currPage="newProd"/>
                  </Box>
               </TabPanel>

               //* CREATING BRANDS
               <TabPanel>
               <Box w='100%' p={6} h='90vh'  bgColor='rgba(0, 0, 0, .15)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>
                     <Text fontSize='4xl' color='white'>Create a new Brand</Text>
                     <AdminForm currPage="newBrand" />
                </Box>
               </TabPanel>
               
            </TabPanels>
         </Tabs>
  )
}

export default Admin