import { Button, HStack, Input, Select, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'

const AdminForm = ({currPage}:any) => {
  return (
    <VStack  w='80%' m='auto'  spacing={6} py={10}>
        <HStack>
            <Input bg='white' placeholder={currPage == "newProd" ? 'Product Name...': 'Brand Name...'} required/>
            {currPage == "newProd" && <Input bg='white' type='number' placeholder='Product Price' />}
        </HStack>
        <Input bg='white' placeholder='Image URL' />
        <Textarea bg='white' placeholder={currPage == "newProd" ? 'Product Description': 'Brand Description...'} />
        {currPage == 'newProd' && <Select bg='white' placeholder='Select Brand'>
            <option>Addidas</option>
            <option>Nike</option>
            <option>Onida</option>
            <option>Apple</option>
        </Select>}
        <Button>Create {currPage == "newProd" ?  "Product" : "Brand"}</Button>
    </VStack>
  )
}

export default AdminForm