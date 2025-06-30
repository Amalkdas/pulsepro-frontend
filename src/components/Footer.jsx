import React from 'react'
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
   <>
   <div className="row p-5" style={{backgroundColor:'gray'}}>
    <div className="col ">

        <ul>
            <li>About us</li>
            <li>Programs</li>
            <li>Blog</li>
            <li>FAQS</li>
        </ul>
    </div>
    <div className="col">
        <ul>
            <li>Success Stories</li>
            <li>Partnerships</li>
            <li>Carrers</li>
            <li>Support</li>
        </ul>
    </div>
    <div className="col">
         <ul>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
            <li>Cookie Policy</li>
            <li>Disclaimer</li>
        </ul>
    </div>
    <div className="col">
        <ul>
            <li>Guides & Articles</li>
            <li>Fitness tools</li>
            <li>Webinars & Events</li>
            <li>TroubleShooting</li>
        </ul>
        </div></div>
        <div className="row d-flex p-3  align-items-center justify-content-center text-center " style={{backgroundColor:'black'}}><p style={{fontSize:'0.6em'}} className='mb-0 text-light'><i class="fa-solid fa-copyright text-light me-2"  style={{color:'white'}}></i>2025 PulsePro. All rights reserved.</p></div></>
  )
}

export default Footer
