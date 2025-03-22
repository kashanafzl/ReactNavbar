import React from 'react'
import './Buy.css'

import whitecarimg from '../../../Assets/img/whitecar.svg'

export default function Buy() {
  return (
    <div>

        <div className="buycarmainflexdiv">
        <div className='buycontent'>
            <button>NEW</button>
            <h2>Know your buying power</h2>
            <p>How much car can you afford? Find out, then see vehicles <br />
             that match your budget</p>
            <img src={whitecarimg} alt="" />
        </div>

        <div className='ratediv'>
            <h1>$25,000</h1>
            <p>Based on 8.06% APR</p>
        </div>
        </div>
      
    </div>
  )
}
