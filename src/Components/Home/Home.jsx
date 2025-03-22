import React from 'react'
import Navbar from './Navbar/Navbar'
import Main from './Mainsection/Main'
import Buy from './BuyingPower/Buy'
import Ourservices from './OurServices/Ourservices'
import Favtbrand from './FavtBrand/Favtbrand'
import Topcar from './Topcar/Topcar'
import Slider from './Peoplearesayingslider/Slider'
import Footer from './Footer/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Main/>
        <Buy/>
        <Ourservices/>
        <Favtbrand/>
        <Topcar/>
        <Slider/>
        <Footer/>
    </div>
  )
}
