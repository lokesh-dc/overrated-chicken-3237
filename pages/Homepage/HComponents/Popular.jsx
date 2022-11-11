import React, { useState } from "react";
import {Text, Box, IconButton, useBreakpointValue, Image } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Popular() {
 
  const [slider, setSlider] = useState({});

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    
    {
      title3: "Woman's Fashion",
      title31:"15% OFF upto ₹200",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://wallpaperaccess.com/full/2267830.jpg",
    },
    {
      title4: "Multivitamins Tablets",
      title41:"15% OFF upto ₹200",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://c8.alamy.com/comp/A6409H/rows-of-vitamin-pills-and-food-supplements-in-health-store-england-A6409H.jpg",
    },
    {
      title2: "Kid's wear",
      title21: "15% OFF upto ₹200",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://img.freepik.com/free-photo/cute-stylish-children_155003-8330.jpg?w=2000",
    },
    {
      title: "Woman's Fashion",
      title1:"15% OFF upto ₹200",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://wallpaperaccess.com/full/1595330.jpg",
    },
    {
      title: "Kichen Collections",
      title1:"15% OFF upto ₹200",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1",
    },
  ];

  return (
    
    <Box
      mt="30px"
      mb="30px"
      position={"relative"}
      h={{ base: "300px", md: "350px", xl: "450px" }}
      width={"full"}
      overflow={"hidden"}
      textAlign={"center"}
    >
          <Text fontSize='30px' mt="20px"
      mb="20px" alignItems='center' color="red">15 to 20 Percent off on below category products</Text>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
           <>
         
           <Box key={index} position="relative">
           <Text position="absolute" fontSize='40px' ml="22%" mt="4%" color="white" >{card.title}</Text>
           <Text position="absolute" fontSize='20px' ml="22%" mt="9%" color="white" >{card.title1}</Text>
           <Text position="absolute" fontSize='40px' ml="50%" mt="8%" color="white" >{card.title3}</Text>
           <Text position="absolute" fontSize='20px' ml="50%" mt="6%" color="white" >{card.title31}</Text>
           <Text position="absolute" fontSize='40px' ml="43%" mt="1%" color="Red" >{card.title2}</Text>
           <Text position="absolute" fontSize='20px' ml="43%" mt="6%" color="Red" >{card.title21}</Text>
           <Text position="absolute" fontSize='40px' ml="22%" mt="4%" color="#6366F1" >{card.title4}</Text>
           <Text position="absolute" fontSize='20px' ml="22%" mt="9%" color="#6366F1" >{card.title41}</Text>
             <Image
               src={card.image}
               w={{ base: "80%", md: "60%", lg: "60%" }}
               m="auto"
             />
             
           </Box>
           </>
        ))}
      </Slider>
    </Box>
  );
}