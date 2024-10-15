import React from 'react'
import Header from '../../../Components/Signup.jsx/Header'
import nett from "../../../assests/Netflix-Logo.wine.svg";
import Bottom from '../../../Components/Bottom/Bottom';
import "./Step4.css";

const Step4 = () => {
  return (
    <div className='step4'>
        <Header netlogo={nett}/>
        <div className="align">
      <div className="step04">STEP <b>1</b> OF <b>3</b></div>
      <div className="welcome">
        <p>Welcome back!</p>
        <p>Joining Netflix is easy.</p>
        </div>
        <p className='pass'>Enter your password and you'll be watching in no <br></br>time. </p>
        <div className="mail">
        <p>Email</p>
        <p className='abc'>abc@gmail.com</p>
        </div>
        <input type='text' placeholder='Enter your password'/>
        <br></br>
        <p className='blue'>Forgot your password?</p>
        </div>
      
      <div className="nextt">
<button className='next2'>Next</button>
</div>
      <Bottom/>
    </div>
  )
}

export default Step4
