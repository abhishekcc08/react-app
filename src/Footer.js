import React from 'react'
import Logo from "./image/india.png"
import Logo1 from "./image/instagram.png"
import Logo2 from "./image/linkedin.png"
import Logo3 from "./image/facebook.png"
import Logo4 from "./image/twitter.png"

import "./App.css"
import "./Navbar.css"
function Footer() {
  return (
    <div className='row4'>
<div className='row5'>
<div className='col1'>
    <img src={Logo}/><h4>StartupFlora</h4>
    <p className='fs-6 lh-base'>Startup consultancy services to start and grow<br/> business at an affordable cost.</p>
 </div>
    <div className='col2'>
    <p>Home</p>    
    <p>Terms And Conditions</p>
    <p>Privacy Policy</p>
    <p>Refund Policy</p>
    <p>Jobs at StartupFlora</p>
    <p>Contact Us</p>
    </div>
    <div className='col3'>
<p>7th floor, Kothari Avenue,</p>
<p>Tonk Road, Jaipur, 302015</p>
<p className='lh-lg'>info@startupflora.com</p>
<p className='lh-lg'>+91 9251699283</p>
  </div>
</div>
<p className='fs-6 text-start my-3'>© 2023 Acolyte Technologies Pvt. Ltd., All Rights Reserved.</p>
<img src={Logo1} style={{marginLeft:"700px"}}/>
<img src={Logo2}/>
<img src={Logo3}/>
<img src={Logo4}/>

    </div>
  )
}

export default Footer;