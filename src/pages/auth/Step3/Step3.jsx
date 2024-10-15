import React from 'react'
import Header from '../../../Components/Signup.jsx/Header'
import Bottom from '../../../Components/Bottom/Bottom'
import nett from "../../../assests/Netflix-Logo.wine.svg";
import "./Step3.css"


const Step3 = () => {
  return (
    <div className='Step3'>
       <Header netlogo={nett}/>
      <div className="lock">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
<div className="small"></div>
      </div>
      <div className="choose">
        <p className='ste'>STEP <b>4</b> OF <b>4</b></p>
        <p className='plan'>Choose how to pay</p>
        <div className="now">
        <p>Your payment is encrypted and you can change your payment method at anytime.</p>
        </div>
        <div className="secure">
        <p>Secure for peace of mind.<br></br>Cancel easily online.</p>
        </div>
       <p className='end'>End-to-end encrypted <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
</svg>

</p>

       <div className="box">
       <button>Credit or Debit card <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
       <br></br><br></br>
       <button>UPI Autopay<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
       </div>
        </div>
        <Bottom/>
  
    </div>
  )
}

export default Step3
