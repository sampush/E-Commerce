import React from 'react'
import './Men.css';
import Hot from '../../Component/shot.png';
import lot from '../../Component/sign2.png';

function Men() {
  return (
    <div className='top-men'>
        <div className='line-text'>
            <div>
                <h2>BY MEN</h2>
                <h2>FOR MEN</h2>
            </div>
            <div className='new-pon'>
                <p>BADE IS A BRAND FOR MEN,BY MEN. WE ARE A SMALL</p>
                <p>TEAM OF TEN MEN,WHO ARE COMMITED TO THE MALE </p>
                <p>BODY AND A DESIRE FOR EXCELLENCE. WE ARE ALL</p>
                <p>DRIVEN BY THE SAME DREAM TO CONTINOUSLY</p>
                <p>IMPROVE SO YOU'RE ALWAYS SURPISED AND</p>
                <p>BEAUTIFUL</p>
            </div>
            
            <div className="sphere">
                <p>Get To Know Us</p>
            </div>
            <div className='lot-tin'>
                <img src={lot} alt=''/>
            </div>
        
        </div>
        <div className='hot-im'>
            <img src={Hot} alt=''/>
        </div>
        

    </div>
  )
}

export default Men