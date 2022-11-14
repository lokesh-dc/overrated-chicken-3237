import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Advertise from './HComponents/Advertise'
import CaptionCarousel from "./HComponents/CaptionCarousel"
import ChakPro from './HComponents/ChakPro'
import Essential from "./HComponents/Essential"
import NewArrivals from './HComponents/NewArrivals'
import Popular from "./HComponents/Popular"

import hom from '../../Resources/homeBg.svg'

import blob1 from '../../Resources/blob1.svg'
import blob2 from '../../Resources/blob2.svg'
import blob3 from '../../Resources/blob3.svg'

const Homepage = () => {
  return (
    <Box pb='50px' mt='-30px'  bgColor='rgba(237, 245, 224, 0.7)' style={{backdropFilter: 'blur(7px)'}}>
    <Advertise/>
      <Image display={{base:'none', md:'block'}} src={blob3.src} w='300px' position='fixed' top='78%' left='10%'  zIndex='-5'/>
      <Image display={{base:'none', md:'block'}} src={blob3.src} w='200px' position='fixed' top='14%' left='80%'  zIndex='-5'/>
      <Image display={{base:'none', md:'block'}} src={blob3.src} w='200px' position='fixed' top='60%' left='80%'  zIndex='-5'/>
      <Image display={{base:'none', md:'block'}} src={blob2.src} w='200px' position='fixed' top='30%' left='80%' zIndex='-10' />
      <Image display={{base:'none', md:'block'}} src={blob2.src} w='200px' position='fixed' top='10%' left='20%' zIndex='-10' />
    {/* <CaptionCarousel/> */}
    <Popular tit='category'/>
    <Essential/>
    <Box py={7} bgImage={hom.src} backgroundSize='contain'>
      <ChakPro/>
    </Box>
    <NewArrivals/>
    <Popular tit='traditional'/>
    </Box>
  )
}

export default Homepage