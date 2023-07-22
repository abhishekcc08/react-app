import React from 'react'
import './App.css'
import Logo from "./image/india.png"
import img1 from "./image/login.png"
import img2 from "./image/bag.png"
import "./Navbar.css";
import { Link } from 'react-router-dom'
// import { a } from "react-router-dom"
function Navbar() {
  return (
    <div className='navbar'>
    <div className="centerside">
    <img src={Logo}/>
    </div>
    <div className="rightside">
    <a to="/"><h4>StartupFlora</h4>
    <div className="">
    <button className="btn  " type="button" data-bs-toggle="" aria-expanded="false">
      
    </button>
    <ul className='dropdown-menu d-none'></ul></div></a>
    <a to="/startup">Startup
    <div className="dropdown">
  <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" type="button" to="/startupreg">Startup India Registration</Link></li>
    <li><button className="dropdown-item" type="button">Startup India Tax Exemption</button></li>
    <li><button className="dropdown-item" type="button">One Person Company</button></li>
    <li><button className="dropdown-item" type="button">Limited Liability Partnership</button></li>
    <li><button className="dropdown-item" type="button">Private Limited Company</button></li>
    <li><button className="dropdown-item" type="button">ISO Registration</button></li>
    <li><button className="dropdown-item" type="button">Digital Signature</button></li>
    <li><button className="dropdown-item" type="button">Section 8 Company Registraion</button></li>
    <li><button className="dropdown-item" type="button">IEC Code</button></li>
    <li><button className="dropdown-item" type="button">Trust Registration</button></li>
    <li><button className="dropdown-item" type="button">Society Registration</button></li>
    <li><button className="dropdown-item" type="button">Partnership Firm Registration</button></li>
    <li><button className="dropdown-item" type="button">Share Transfer</button></li>
    <li><button className="dropdown-item" type="button">MSME/UDYAM Registration</button></li>
  </ul>
</div></a>
    <a to="/digitalmarketing">Digital Marketing
    <div className="dropdown">
    <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      
    </button>
    <ul className="dropdown-menu">
      <li><button className="dropdown-item" type="button">Social Media Marketing</button></li>
      <li><button className="dropdown-item" type="button">Truecaller Marketing</button></li>
      <li><button className="dropdown-item" type="button">Brand Kit</button></li>
      <li><button className="dropdown-item" type="button">Content Writing</button></li>
      <li><button className="dropdown-item" type="button">Logo Designing</button></li>
      <li><button className="dropdown-item" type="button">Search Engine Optimization</button></li>
      <li><button className="dropdown-item" type="button">Google Ads</button></li>
 </ul>
 </div></a>
    <a to="/incometex">Income Tax
    <div className="dropdown">
    <button className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
      
    </button>
    <ul className="dropdown-menu">
      <li><button className="dropdown-item" type="button">ITR-1</button></li>
      <li><button className="dropdown-item" type="button">ITR-2</button></li>
      <li><button className="dropdown-item" type="button">ITR-3</button></li>
      <li><button className="dropdown-item" type="button">ITR-4</button></li>
      <li><button className="dropdown-item" type="button">ITR-5</button></li>
      <li><button className="dropdown-item" type="button">ITR-6</button></li>
      <li><button className="dropdown-item" type="button">ITR-7</button></li>
      <li><button className="dropdown-item" type="button">Personal Tax Filing</button></li>
      <li><button className="dropdown-item" type="button">Business Tax Filing</button></li>
      <li><button className="dropdown-item" type="button">TDS Return Filing</button></li>
 </ul>
 </div></a>
    <a to="/accountandbookkeeping">Accounting and Bookkeeping
    <div className="">
    <button className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false"> 
    </button>
    <ul className="dropdown-menu d-none"></ul></div></a>
    <a to="/seedfunding">Seed funding
    <div className="">
    <button className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
      
    </button>
    <ul className="dropdown-menu d-none"></ul></div></a>
    <a to="/trademark">Trademark
    <div className="dropdown">
    <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      
    </button>
    <ul className="dropdown-menu">
      <li><button className="dropdown-item" type="button">Social Media Marketing</button></li>
      <li><button className="dropdown-item" type="button">Trademark Objection</button></li>
      <li><button className="dropdown-item" type="button">Trademark Opposition</button></li>
      <li><button className="dropdown-item" type="button">Trademark Renewal</button></li>

 </ul>
 </div></a>
  
   
   <img src={img1}/>
   <a to="/login">Log in
   <div className="">
    <button className="btn  " type="button" data-bs-toggle="" aria-expanded="false">
      
    </button>
    <ul className='dropdown-menu d-none'></ul></div></a>
    <img src={img2}/>
    
    </div>
    
    </div>
  )
}

export default Navbar;