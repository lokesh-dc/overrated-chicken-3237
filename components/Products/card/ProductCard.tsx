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
    Text,
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
    _id,
    src,
    title,
    brand,
    available,
    price,
    ratings,
    number_of_reviews,
    description,
    quantity,
    currPage,
    handleWishlist,
    handleDelWishlist
  }:any) {

    title= title.slice(0,25)
    // const {handleAddCart} = useContext(AppContext)
    console.log(currPage, 'this is current page')

    return (
      <Flex alignItems="center" justifyContent="center" bgColor='rgba(255, 255, 255, .15)' _hover={{bgColor:'rgba(255, 255, 255, .55)'}} style={{backdropFilter: 'blur(7px)'}}
         shadow='lg' rounded='xl'
      >
        <Box
          maxW="sm"
          h={{base:'auto', lg:'500px'}}
          // mixBlendMode='multiply'
          >
  
          <Link href={`/products/${_id}`}>
          <Image
            mixBlendMode='multiply'
            // borderRadius='full'
            src={src}
            alt={`Picture of ${title}...`}
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
                <DeleteIcon onClick={() => handleDelWishlist(_id)} color='red' cursor='pointer' position='absolute' top='3%' left="87%" background='white' fontSize='26px'  padding="5px" borderRadius='13px'/>
              </Tooltip>
              :
              <Tooltip
              label="Add to Favourite"
              bg="white"
              placement={'bottom'}
              color={'gray.800'}
              fontSize={'0.8em'}>
                <Box onClick={() => handleWishlist(_id)} cursor='pointer' position='absolute' top='3%' left="87%" background='white'  fontSize='20px'  padding="5px" borderRadius='13px'
                _hover={{bg:'pink'}}>
                  <AiOutlineHeart style={{color:'red'}} />
                </Box>
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
                {title}...
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'0.8em'}>
                <IconButton aria-label='add-to-cart' variant='ghost' size='lg' colorScheme='yellow' icon={<FiShoppingCart />}/>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={ratings} numReviews={quantity} />
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