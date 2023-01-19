import React from 'react'
import Checkout from '../Component/Checkout/Checkout'
import Side from '../Component/Side/Side'
import './Contact.css';


function Contact() {
  return (
    <div className='contact_wrapper'>
      <Checkout/>
      <Side/>
    </div>
  )
}

export default Contact