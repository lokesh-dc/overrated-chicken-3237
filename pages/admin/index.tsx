import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Box, Heading, Text, useToast, Button } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { CgBriefcase } from 'react-icons/cg'
import { HiOutlineIdentification } from 'react-icons/hi'
import { FiPieChart } from 'react-icons/fi'

import dashBack from '../../Resources/dashboard.svg'
// import dashBack from '../../Resources/mesh1.png'
import AllTable from '../../components/AdminComps/Table/AllTable'
import Dashboard from '../../components/AdminComps/Dashboard/Dashboard'
import AdminForm from '../../components/AdminComps/forms/AdminForm'
import axios from 'axios'
import { useRouter } from 'next/router'
// import AllTable from '../../components/AdminComps/Table/AllTable'

export async function getServerSideProps({req}:any) {
   // let resp:any = await axios.get("http://localhost:3000/api/products")

   if(!req.cookies.mohallaMartJwt){
       return {
           redirect: {
               destination: '/products',
               permanent: false,
           },
       }
   }
   
   return {
     props: {props: req.cookies.mohallaMartJwt}, // will be passed to the page component as props
   }
 }

const Admin = ({props}:any) => {
   const [users ,setUsers] = useState<any>([]) 
   const [brands, setBrands] = useState<any>([])
   const [products, SetProducts] = useState<any>([])
   const [change, setChange] = useState<any>(false)
   const [role, setRole] = useState<String>("")
   const router = useRouter()

   var token = JSON.parse(props).token
   console.log( 'PROPS, ADMIN', token)

   useEffect(() => {
      axios.get('/api/users/rolecheck').then((res) => setRole(res.data))
   }, [])

   const toast = useToast()

   const handleCreateProduct = (title:any, price:any, src:any, description:any, brand:any) => {
      // console.log('trigger')
      console.log(title, price, typeof price, description)
      axios.post('/api/products', {title, price, src, description}).then((res) => {
         console.log(res.data,'created product')
         toast({
            title: 'Product Created.',
            description: "Congrats! your new product has been added.",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
      }).catch((e) => {
         console.log(e, 'error')
         toast({
            title: 'Something went wrong.',
            description: "Oops!, please try again.",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
      })
      setChange(!change)
   }

   const handleCreateBrand = (name:any, logo:any) => {
      axios.post('/api/brands', {name, logo}).then((res) => {
         console.log(res, 'brand created')
      }).catch((e) => {
         console.log(e, 'error creating brand')
      })

      setChange(!change)
   }


   const [allOrders, setAllOrders] = useState([])
   const [allBrands, setAllBrands] = useState([])

    useEffect(() => {
      axios.get('/api/brands').then((res) => setBrands(res.data))
      .catch((e) => console.log(e))
   }, [change])
   useEffect(() => {
      axios.get("/api/users").then((res) => setUsers(res.data))
      .catch((e) => console.log(e,'e users'))
   }, [change])
   useEffect(() => {
      axios.get('/api/products').then((res) => SetProducts(res.data))
      .catch((e) => console.log(e, "PRODUCTS FETCH ERROR"))

      axios.get('/api/orders/allorders').then((res) => {
         console.log(res.data,'ALL ORDERS')
         setAllOrders(res.data)
      })
      .catch((e) => console.log(e, 'ERROR , ALL ORDERS'))

      axios.get('/api/brands').then((res) => {
         console.log(res.data, 'ALL BRANDS')
         setAllBrands(res.data)
      }).catch((e) => console.log(e, 'BRANDS ERROR'))
   }, [change])

   const handleLogout = () => {
      axios.get('/api/users/logout').then((res) => {
         console.log(res, 'LOGOUT SUCCESS')
         toast({
             title: 'Logout Successfull.',
             description: "You have logged out successfully.",
             status: 'info',
             duration: 9000,
             isClosable: true,
           })
     })
     router.push("/products")
   }


  return (
    <Tabs
            variant="soft-rounded"
            colorScheme="purple"
            minH="100vh"
            defaultIndex={0}
            bg="whitesmoke"
            isLazy
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
                     isDisabled={role != 'Admin' && true}
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
                     isDisabled={role != 'Admin' && true}
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
                <Button
                  onClick={handleLogout}
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
                </Button>
               </Box>

            </TabList>

            <TabPanels p={2} pl="15%" bgImage={dashBack.src} backgroundSize='cover' h='100vh'>

               <TabPanel >
                     <Box className='tbl' p={6} w='100%' h='90vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' >
                        <Dashboard allUsers={users} allBrands={brands} allProducts={allOrders}/>
                    </Box>
               </TabPanel>

               //* FOR ALL USERS
               <TabPanel >
                    <Box className='tbl' p={6} w='100%' h='90vh'  bgColor='rgba(0, 0, 0, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' overflowY='scroll'>
                        <Text fontSize='4xl' color='white'>Users</Text>
                        <AllTable data={users} title="User" roleHeading="role" totalP="Total Purchases(in Rs)" />
                    </Box>
               </TabPanel>

               //* FOR ALL BRANDS
               <TabPanel>
                  <Box p={6} w='100%' h='90vh'  bgColor='rgba(0, 0, 0, .15)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' overflowY='scroll'>
                        <Text fontSize='4xl' color='white'>Brands</Text>
                        <AllTable data={brands} title="Brands" />
                  </Box>
               </TabPanel>

               //* FOR ALL PRODUCTS
               <TabPanel>
                  <Box w='100%' p={6} h='90vh'  bgColor='rgba(0, 0, 0, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' overflowY='scroll'>
                        <Text fontSize='4xl' color='white'>Products</Text>
                        <AllTable data={products} title="Products" roleHeading="Price"  totalP="Ratings" />
                  </Box>
               </TabPanel>

               //* CREATING PRODUCTS
               <TabPanel>
                  <Box w='100%' p={6} h='90vh'  bgColor='rgba(0, 0, 0, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>
                     <Text fontSize='4xl' color='white'>Create a new Product</Text>
                     <AdminForm handleCreateProduct={handleCreateProduct} allBrands={allBrands} currPage="newProd"/>
                  </Box>
               </TabPanel>

               //* CREATING BRANDS
               <TabPanel>
               <Box w='100%' p={6} h='90vh'  bgColor='rgba(0, 0, 0, .15)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>
                     <Text fontSize='4xl' color='white'>Create a new Brand</Text>
                     <AdminForm handleCreateBrand={handleCreateBrand} currPage="newBrand" />
                </Box>
               </TabPanel>
               
            </TabPanels>
         </Tabs>
  )
}

export default Admin