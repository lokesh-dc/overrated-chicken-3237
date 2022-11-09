import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const AllTable = () => {

    var arr = new Array(20).fill(0)

  return (
    <TableContainer bgColor='rgba(0, 0, 0, 0)' color='white' w='100%' >
        <Table variant='simple' size='lg' >
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
            <Tr >
                <Th color='white' w='5%'  border='1px solid white' textAlign='center' isNumeric>No.</Th>
                <Th color='white' w='30%' border='1px solid white' textAlign='center' >User</Th>
                <Th color='white' w='30%' border='1px solid white' textAlign='center'>Role</Th>
                <Th color='white' w='15%' border='1px solid white' textAlign='center' isNumeric>Total Purchases(in Rs)</Th>
                <Th color='white' w='15%' border='1px solid white' textAlign='center' isNumeric></Th>
            </Tr>
            </Thead>
            <Tbody fontSize='20px'>
                                <Tr mt='10px' >
                                <Td textAlign='center' isNumeric>99</Td>
                                <Td textAlign='center'>Aaryan</Td>
                                <Td textAlign='center'>Admin</Td>
                                <Td textAlign='center' isNumeric>2500</Td>
                                <Td textAlign='center' >Edit</Td>
                            </Tr>
                            <Tr mt='10px' >
                                <Td textAlign='center' isNumeric>99</Td>
                                <Td textAlign='center'>Aaryan</Td>
                                <Td textAlign='center'>Admin</Td>
                                <Td textAlign='center' isNumeric>2500</Td>
                                <Td textAlign='center' >Edit</Td>
                            </Tr>
                            <Tr mt='10px' >
                                <Td textAlign='center' isNumeric>99</Td>
                                <Td textAlign='center'>Aaryan</Td>
                                <Td textAlign='center'>Admin</Td>
                                <Td textAlign='center' isNumeric>2500</Td>
                                <Td textAlign='center' >Edit</Td>
                            </Tr>
                            <Tr mt='10px' >
                                <Td textAlign='center' isNumeric>99</Td>
                                <Td textAlign='center'>Aaryan</Td>
                                <Td textAlign='center'>Admin</Td>
                                <Td textAlign='center' isNumeric>2500</Td>
                                <Td textAlign='center' >Edit</Td>
                            </Tr>
            {
                arr.map((item,j) => {
                    for(var i = 0; i<20; i++){
                        return (
                            <Tr mt='10px' >
                                <Td textAlign='center' isNumeric>{j+1}</Td>
                                <Td textAlign='center'>Aaryan</Td>
                                <Td textAlign='center'>Admin</Td>
                                <Td textAlign='center' isNumeric>2500</Td>
                                <Td textAlign='center' >Edit</Td>
                            </Tr>
                        )
                    }
                })
            }

            </Tbody>
            <Tfoot>
            <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
            </Tr>
            </Tfoot>
        </Table>
        </TableContainer>
  )
}

export default AllTable