import React from 'react'
import './Duties.css';
import logo1 from '../logo1.png';
import logo2 from '../logo2.png';
import logo3 from '../logo3.png';

function Duties() {
  return (
    <div className='container-du'>
        <div >
            <img src={logo1} alt=''/>
            <h5>FREE SHIPPING</h5>
            <p>ON ALL ORDERS OVER $500.OO</p>
        </div>

        <div>
            <img src={logo2} alt=''/>
            <h5>DUTIES AND TAXES MAY VARY</h5>
            <p>Extra Charges may apply outside U.S</p>
        </div>

        <div>
            <img src={logo3} alt=''/>
            <h5>HERE FOR YOU</h5>
            <p>Email us at Pushkeba@gmail.com</p>
        </div>
    </div>
  )
}

export default Duties