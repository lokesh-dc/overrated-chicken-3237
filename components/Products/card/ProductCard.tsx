import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    IconButton,
    useToast,
  } from '@chakra-ui/react';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  
  // interface RatingProps {
  //   rating: number;
  //   numReviews: number;
  // }
  
  function Rating({ rating, numReviews }:any) {
    // console.log(rating, typeof numReviews)
    return (
      <Flex alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Flex>
    );
  }

  
  function ProductCard({
    id,
    image,
    name,
    brand,
    available,
    price,
    rating,
    number_of_reviews,
    description,
    currPage

  }:any) {

    // const {handleAddCart} = useContext(AppContext)
    console.log(currPage, 'this is current page')
    return (
      <Flex alignItems="center" justifyContent="center" bgColor='rgba(255, 255, 255, .15)' _hover={{bgColor:'rgba(255, 255, 255, .55)'}} style={{backdropFilter: 'blur(7px)'}}
         rounded='xl' shadow='lg'
      >
        <Box
          // bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          // borderWidth="1px"
          // rounded="lg"
          // shadow="lg"
          // _hover={{boxShadow: '2xl'}}
          >
          {/* {available && (
            <Circle
            size="10px"
            bg="red.200"
            />
            )} */}
  
          <Link href={`/products/${id}`}>
          <Image
            src="https://burst.shopifycdn.com/photos/set-of-custom-enamel-pins.jpg?width=373&format=pjpg&exif=1&iptc=1"
            alt={`Picture of ${name}`}
            roundedTop="lg"
            />
          </Link>
          {
            currPage == 'wishlist' ?
              <Tooltip
              label="Remove"
              bg="white"
              placement={'bottom'}
              color={'gray.800'}
              fontSize={'0.8em'}>
                <DeleteIcon color='red' cursor='pointer' position='absolute' top='3%' left="87%" background='white' fontSize='26px'  padding="5px" borderRadius='13px'/>
              </Tooltip>
              :
              <Tooltip
              label="Add to Favourite"
              bg="white"
              placement={'bottom'}
              color={'gray.800'}
              fontSize={'0.8em'}>
                <AiOutlineHeart style={{color:'red' ,cursor:'pointer' ,position:'absolute', top:'3%', left:"87%", background:'white' , fontSize:'26px',  padding:"5px" ,borderRadius:'13px'}} />
              </Tooltip>

          }

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              {available && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                >
                {name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'0.8em'}>
                <IconButton aria-label='add-to-cart' variant='ghost' size='lg' colorScheme='yellow' icon={<FiShoppingCart height={9} width={9} alignSelf={'center'}/>}/>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={rating} numReviews={number_of_reviews} />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                {price}.00
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductCard;