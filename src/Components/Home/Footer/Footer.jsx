import React from 'react'
import './Footer.css'

import logo from '../../../Assets/img/logo.svg'

export default function Footer() {
  return (
    <div>
        
     
     <div className="footermaindiv">
     <div>
            <img src={logo} alt="" />
        </div>


        <div>
            <h2>About US</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Buy</a></li>
                <li><a href="/">Sell</a></li>
                <li><a href="/">Rent</a></li>
            </ul>
        </div>
        <div>
            <h2>Car</h2>
            <ul>
                <li><a href="/">Rent a car</a></li>
                <li><a href="/">Car Detail</a></li>
            </ul>
        </div>
        <div>
            <h2>Contact Info</h2>
            <ul>
                <li><a href="/">+92313000000</a></li>
                <li><a href="/">Afan@gmail.com</a></li>
            </ul>
        </div>


     </div>
    </div>
  )
}
