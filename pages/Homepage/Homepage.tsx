import React from 'react'
import Advertise from './HComponents/Advertise'
import CaptionCarousel from "./HComponents/CaptionCarousel"
import Essential from "./HComponents/Essential"
import NewArrivals from './HComponents/NewArrivals'
import Popular from "./HComponents/Popular"

const Homepage = () => {
  return (
    <div>
    <Advertise/>
    <CaptionCarousel/>
    <Essential/>
    <NewArrivals/>
    <Popular/>
    </div>
  )
}

export default Homepage