import { Box } from '@chakra-ui/react'
import React from 'react'
import Advertise from './HComponents/Advertise'
import CaptionCarousel from "./HComponents/CaptionCarousel"
import ChakPro from './HComponents/ChakPro'
import Essential from "./HComponents/Essential"
import NewArrivals from './HComponents/NewArrivals'
import Popular from "./HComponents/Popular"

import hom from '../../Resources/homeBg.svg'

const Homepage = () => {
  return (
    <Box mb='50px'>
    <Advertise/>
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