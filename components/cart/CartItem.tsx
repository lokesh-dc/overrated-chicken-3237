import { Box, CloseButton, Flex, Link, Select, SelectProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { AddReview } from '../SingleProduct/AddReview'


const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export const CartItem = (props:any) => {
  const {productId}:any = props
  console.log(props, 'cart Item')

  const onChangeQuantity = (e:any) => {
    console.log(e)
  }

  return (
    <>
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" boxShadow='lg' px={4} py={5} rounded='2xl'>
     <CartProductMeta
        name={productId.title}
        description={"Hello world"}
        image={productId.src}
        // isGiftWrapping={isGiftWrapping}
      />

     {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        <QuantitySelect
          value={productId.quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />
        <PriceTag price={productId.price} currency={"INR"} />
        <CloseButton aria-label={`Delete ${productId.title} from cart`} onClick={() => props.handleDelete(productId._id)} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          // value={productId.quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />
        <PriceTag price={productId.price} currency={"INR"} />
      </Flex>  
      <Box w='200px'>
        <AddReview/>
      </Box>
    </Flex>
    </>
  )
}