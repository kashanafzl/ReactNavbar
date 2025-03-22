import React from 'react'
import './Main.css'

import { IoIosSearch } from "react-icons/io";

export default function Main() {
  return (
    <div>

        <div className="bgimgdiv">
            <div className="maincontent">
            <h1>The Ultimate Guide to <br />
             Choosing Your Perfect Rid</h1>
             <p>Choosing the perfect vehicle requires careful consideration of your needs, budget, and preferences. This guide walks you through essential factors like performance, features, and reliability. Make an informed decision and drive away with confidence in your ideal car.</p>
            
            <div className='inputsearchdiv'>
            <IoIosSearch className='searchicon' />
            <input type="text" placeholder='Search..' />
            </div>
            </div>
        </div>
    </div>
  )
}
