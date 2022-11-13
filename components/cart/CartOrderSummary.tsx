import {
    Button,
    Flex,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
    VStack,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
  import { formatPrice } from './PriceTag'
  import {useRef} from 'react'
  
  type OrderSummaryItemProps = {
    label: string
    value?: string
    children?: React.ReactNode
  }
  
  const OrderSummaryItem = (props: OrderSummaryItemProps) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = ({makePayment, totalCost}:any) => {

    const nameRef:any = useRef<any>(null)
    const emailRef = useRef<any>(null)
    const contactRef = useRef<any>(null)
    const [name, setName] = React.useState<any>("")

    React.useEffect(() => {
        console.log(nameRef.current.value.length, 'namefer')
    }, [])

    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={formatPrice(totalCost)} />
          
          <Flex flexDir='column' gap={3}>
            <VStack spacing={0} align='flex-start'>
                <label style={{fontSize: '14px'}}>Name</label>
                <Input ref={nameRef} placeholder='Enter Name...' onChange={(e) => setName(e.target.value)}/>
            </VStack>
            <VStack spacing={0} align='flex-start'>
                <label style={{fontSize: '14px'}}>Email</label>
                <Input ref={emailRef} placeholder='Enter Email...'/>
            </VStack>
            <VStack spacing={0} align='flex-start'>
                <label style={{fontSize: '14px'}}>Contact</label>
                <Input ref={contactRef} placeholder='Enter Contact...'/>
            </VStack>
          </Flex>

          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(totalCost)}
            </Text>
          </Flex>
        </Stack>
        <Button disabled={name.length == 0 ? true : false}  colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />} onClick={() => makePayment(nameRef.current.value, emailRef.current.value, Number(contactRef.current.value), totalCost)}>
          Purchase
        </Button>
      </Stack>
    )
  }