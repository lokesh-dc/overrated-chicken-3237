import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import { AiOutlineStar } from 'react-icons/ai';
import { AddReview } from './AddReview';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      // _after={{
      //   content: `""`,
      //   w: 0,
      //   h: 0,
      //   borderLeft: 'solid transparent',
      //   borderLeftWidth: 16,
      //   borderRight: 'solid transparent',
      //   borderRightWidth: 16,
      //   borderTop: 'solid',
      //   borderTopWidth: 16,
      //   borderTopColor: useColorModeValue('white', 'gray.800'),
      //   pos: 'absolute',
      //   bottom: '-16px',
      //   left: '50%',
      //   transform: 'translateX(-50%)',
      // }}
      >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles({handleSubmitReview,showReviews,deleteReview,loggedIn}:any) {
  console.log(showReviews)
  const handleDelete=()=>{
    deleteReview()
  }
  console.log(loggedIn)
  return (
    <Box maxH={"100vh"} overflowY="scroll">
      <AddReview handleSubmitReview={handleSubmitReview}/>
      <Container  maxW={'8xl'} py={16} as={Stack} spacing={12} >
        <SimpleGrid
            columns={[1,2,3]}
            gap="20"
          >
          {showReviews?.map((e:any)=>{
            console.log(e)
          return <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                <Box display={"flex"} gap="10px">
                    {Array(5)
                    .fill("")
                    .map((_, i) => (
                        <BsStarFill key={i} color={i < 4 ? "orange" : "gray"}/>
                    ))}
                </Box>
                </TestimonialHeading>
              <TestimonialText>
                <Text fontSize={"17px"}>{e.content}</Text>
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={e.userId.firstName}
              title={e.date}
            />
            {e.userId.email=== loggedIn ? <Button marginTop={"10px"} onClick={handleDelete}>Delete Your Review</Button> : null}
          </Testimonial>
          }
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
