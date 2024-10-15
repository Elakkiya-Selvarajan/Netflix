import React from 'react'
import './Footer2.css'
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
const Footer2 = () => {
  return (
    <div className="footer2">
      <div className='footicons'>
        <div className="face"><FaFacebook></FaFacebook></div>
        <div className="insta"><FaInstagram></FaInstagram></div>
        <div className="twit"><FaTwitter></FaTwitter></div>
        <div className="yout"><FaYoutube></FaYoutube></div>
      </div>
<div className="audio">
      <li>Audio Description</li>
      <li>Investor Relations</li>
      <li>Legal Notices</li>
      <li>Help Centre</li>
      <li>Jobs</li>
      <li>Cookie Preferences</li>
      <li>Gift Cards</li>
      <li>terms of Use</li>
      <li>Corporate information</li>
      <li>Media Center</li>
      <li>Privacy</li>
      <li>Contact Us</li>
      </div>
      <button className='service'>Service Code</button>
      <p className='num'><FaCopyright></FaCopyright>  1997-2024 Netflix,Inc.</p>
      </div>
    
  )
}

export default Footer2
