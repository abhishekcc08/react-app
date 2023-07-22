import React from 'react'
import Footer from './Footer'
import img3 from "./image/startup.jpg"
import img4 from "./image/digital marketing.jpg"
import img5 from "./image/seedfunding.jpg"
import girls from "./image/girls laptop.jpg"
import girl from "./image/img6.jpg"
import girl1 from "./image/score.jpg"
import money from "./image/dollor.jpg"
import money1 from "./image/plant.jpg"
import money2 from "./image/student.jpg"
import money3 from "./image/copyright.jpg"
import money4 from "./image/mess.jpg"

import "./App.css"
const startupflora = () => {
  return (
    <div><p>StartupFlora</p>
    <h5>We help you<br/>
    build your dream.</h5>
    StartupFlora provides comprehensive guidance and support to entrepreneurs at every stage of their journey.<br/>

Whether you're just starting out or looking to take your business to the next level, we can help you achieve your goals.<br/>

We bring a wealth of knowledge and experience to every project, and we are passionate about helping our clients succeed.<br/>
<button  className="btn1">Get Started</button>
<h6>Featured Services</h6>
<div className='row'>
<img src={img3}/>
<img src={img4}/>
<img src={img5}/>
</div>
<h2>Why Us?</h2>
<h5>Welcome to StartupFlora.</h5>
<p1>
We understand that starting a new business can be both exciting and<br/> overwhelming. That's why our team is here to provide you with the <br/>support and guidance you need to make your startup journey a success.</p1>


<div className='card1'>
<div className="card">
  <img src={img3} className="card-img-top" style={{width:210}} alt="..."/>
  <div className="card-body">
    <p className="card-text">Experienced Team</p>
  </div>
</div>
<div className="card">
  <img src={img4} className="card-img-top" style={{width:210}} alt="..."/>
  <div className="card-body">
    <p className="card-text">Collaborative Approach</p>
  </div>
</div>
 <div className="card" >
  <img src={img5} className="card-img-top" style={{width:210}} alt="..."/>
  <div className="card-body">
    <p className="card-text">Tailored<br/>Solutions</p>
  </div>
</div>
</div>
<p1>At StartupFlora, we are committed to helping you turn your business ideas into reality.<br/>
Contact us today to learn how we can help you achieve your goals and take your<br/>
 startup to the next level.</p1><br/>
<button  className="btn1">Contact Us</button>
<h2>Our Serevices</h2>
<h5>Put StartupFlora to work<br/>
Invest your time where it's needed</h5>
<div className="div">
<img src={girls} alt="" />
<div className='body'><h2>Startup Services</h2>
<h6>We help you build and grow</h6>
With StartupFlora, entrepreneurs can quickly and<br/> efficiently establish their business, attain<br/> compliance, make policies and avail more <br/>serivces, allowing them to focus on what really<br/> matters - building and growing their company.<br/>
<button  className="btn1">Get Started</button>
</div>
</div>
<div className="div2">
<div className='body'><h2>Digital Marketing</h2>
<h6>Data-Driven Strategies for Maximum ROI<br/> and Business Growth.</h6>
We turn businesses into brands. With our proven<br/> strategies and customized solutions, we can help you<br/> improve your online visibility, drive traffic, and<br/> increase conversions. Don't miss out on potential<br/> customers - let us help you reach your target <br/>audience with precision and impact.
<br/>
<button  className="btn1">Start Now</button>
<img src={girl} alt="" />
<img src={girl1} style={{width:250,height:400,marginTop:-250,translate: 530 -30,position:"relative",zIndex:-1}}alt="" />
</div>
</div>
<div className="div3">
<img src={money} alt="" />
<div className='body'>
<h6>Seed Funding Services.</h6>
<h2>Nurture your ideas, and grow your business<br/> with seed funding services</h2>
Seed funding is critical for many startups, as it <br/> provides the financial resources needed to validate<br/>  their ideas and develop their products or services.<br/>  With StartupFlora, entrepreneurs can access the <br/> capital and resources needed to turn their ideas into<br/>  successful businesses.
<br/>
<button  className="btn1">Get Started</button>
</div></div>
<div className="div4">
<h6>Our Clients<br/>
Why companies <br/>like StartupFlora?</h6>
<div className="body">
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={girl} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={girl} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={girl} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div></div>
</div>
<div className="div5">
<h2>Resources</h2>
<h5>The latest from StartupFlora</h5>
<div className="card-group1">
  <div className="card">
    <img src={money1} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title fs-5">The Power Of Seed<br/> Funding: How <br/>StartupFlora Is Helping Entrepreneurs Grow</h5>
      <p className="card-text fs-6">At StartupFlora, we understand the power of seed funding. Investing in seed.</p>
    </div>
  </div>
  <div className="card">
    <img src={money2} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title fs-5">Startup India: The Best<br/> Way To Boost Your <br/>Business</h5>
      <p className="card-text fs-6">If you're looking for a way to boost your business, you must learn about Startup
</p>
    </div>
  </div>
  <div className="card">
    <img src={money3} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title fs-5">Copyright Claims vs.<br/> Copyright Strikes: How Do<br/> They Differ?</h5>
      <p className="card-text fs-6">In the world of online content, copyright<br/> claims and copyright strikes can be.</p>
      </div>
  </div>
</div>
<button  className="btn1 mx-auto">All Resources</button>
</div>
<img src={money4} style={{width:"120px",margin:"auto",marginTop:"-250px"}} alt="" /><br/>
<h2 style={{fontSize:"43px"}}>Subscribe to our newsletter<br/>
to get all the updates about StartupFlora.</h2>
<input type='email' name='email' style={{width:"500px",height:"44px",border:"2px 0 2px 2px solid black",borderRadius:"7px",marginTop:"-200px"}}/><button  className="btn1" style={{marginLeft:"-10px"}}>Subscribe</button>
<Footer/>
</div>
  )
}

export default startupflora;