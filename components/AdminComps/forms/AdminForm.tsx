import { Button, HStack, Input, Select, Textarea, VStack } from '@chakra-ui/react'
import React, {useRef} from 'react'

const AdminForm = ({currPage, handleCreateProduct, handleCreateBrand, allBrands}:any) => {

  const titleRef:any = useRef(null)
  const priceRef:any = useRef(null)
  const imageRef:any = useRef(null)
  const descRef:any = useRef(null)
  const brandRef:any = useRef(null)

  function abc (){
    console.log('abc')
  }

  return (
    <VStack  w='80%' m='auto'  spacing={6} py={10}>
        <HStack>
            <Input ref={titleRef} bg='white' placeholder={currPage == "newProd" ? 'Product Name...': 'Brand Name...'} required/>
            {currPage == "newProd" && <Input ref={priceRef} bg='white' type='number' placeholder='Product Price' />}
        </HStack>
        <Input ref={imageRef} bg='white' placeholder='Image URL' />
        {currPage == "newProd" && <Textarea onChange={() => abc()} ref={descRef} bg='white' placeholder={currPage == "newProd" ? 'Product Description': 'Brand Description...'} />}
        {currPage == 'newProd' && <Select ref={brandRef} bg='white' placeholder='Select Brand'>
           {
            allBrands?.map((item:any) => (
              <option>{item.name}</option>
            ))
           }
        </Select>}
        {currPage == "newProd" && <Button onClick={() => handleCreateProduct(
          titleRef.current.value,
          priceRef.current.value,
          imageRef.current.value,
          descRef.current.value,
          brandRef.current.value
        )} >Create Product </Button>}
        {currPage == 'newBrand' && <Button onClick={() => { 
          handleCreateBrand(titleRef.current.value, imageRef.current.value)
         }}>Create Brand</Button>}
    </VStack>
  )
}

export default AdminForm