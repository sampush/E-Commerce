import React from 'react'
import Hero from '../Component/Hero/Hero';
import Duties from '../Component/Duties/Duties';
import New from '../Component/New/New';
import Collaboration from '../Component/Collaboration/Collaboration'
import Men from '../Component/Men/Men'
import Mailing from '../Component/Mailing/Mailing';
import Follow from '../Component/Follow/Follow';
import Profile from '../Component/Profilee/Profile';
import Iconics from '../Component/Iconics/Iconics';

function Homepage() {
  return (
    <div>
      
       <Hero/>
       <Profile/>
       <Duties/>
       <Iconics/>
       <New/>
       
       <Collaboration/>
       <Men/>
       <Follow/>
       <Mailing/>
    </div> 
  )
}

export default Homepage