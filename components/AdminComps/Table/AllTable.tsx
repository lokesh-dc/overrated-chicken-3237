import { Avatar, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'

const AllTable = ({title, role, amount, totalP, user, email, roleHeading}:any) => {

    var arr = new Array(20).fill(0)

  return (
    <TableContainer bgColor='rgba(0, 0, 0, 0)' color='white' w='100%' >
        <Table variant='simple' size='lg' >
            <Thead>
            <Tr >
                <Th color='white' w='5%'   textAlign='center' isNumeric>No.</Th>
                <Th color='white' w='30%'  textAlign='center' >{title}</Th>
                <Th color='white' w='30%'  textAlign='center'>{roleHeading}</Th>
                <Th color='white' w='15%'  textAlign='center' isNumeric>{totalP}</Th>
                <Th color='white' w='15%'  textAlign='center' isNumeric></Th>
            </Tr>
            </Thead>
            <Tbody fontSize='20px'>
                              
            {
                arr.map((item,j) => {
                    for(var i = 0; i<20; i++){
                        return (
                            <Tr  >
                                <Td textAlign='center' isNumeric>{j+1}</Td>
                                <Td textAlign='center' justifyContent='center' alignItems='center' gap={3} display='flex'>
                                    <Avatar src='https://bit.ly/dan-abramov' borderRadius='2xl'/> 
                                    <VStack spacing={0}>
                                        <Text fontSize='20px'>{user}</Text>
                                        <Text fontSize='14px'>{email}</Text>
                                    </VStack>
                                </Td>
                                <Td textAlign='center'>{role}</Td>
                                <Td textAlign='center' isNumeric>{amount}</Td>
                                <Td textAlign='center' >Edit</Td>
                            </Tr>
                        )
                    }
                })
            }

            </Tbody>
            <Tfoot >
            <Tr>
                <Th color='white'>Total Users : 20</Th>
                <Th color='white'></Th>
                <Th color='white'></Th>
                <Th color='white' isNumeric>Total Purchase: 50,000Rs</Th>
                <Th color='white'></Th>
            </Tr>
            </Tfoot>
        </Table>
        </TableContainer>
  )
}

export default AllTable