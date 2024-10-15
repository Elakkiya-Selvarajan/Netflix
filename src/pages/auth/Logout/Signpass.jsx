import React from 'react'
import "./Signpass.css"
import Footer from '../../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
const Signpass = () => {
  return (
    <>
    <div className='sign'>
    <div className="forms">
      <div className='head'>Sign In</div>
      <form action="">
          <input type="text" placeholder='Email or mobile number' />
          <br></br>
          <br></br>
          <p className='message'>Message and data rates may apply</p>
          <button className='red'> Send sign in-code</button>
          <br></br><br></br>
          <p>OR</p>
          <Link to={'/Signin'}>
          <button className='use'>Use Password</button>
          </Link>
          <br></br><br></br>
          <div className='forgot'>Forgot email or phone number?</div>
          <div className='rem'>
            <form>
              <input type="checkbox"></input>
              </form>Remember me</div>
          <div className='new'>New to Netflix? 
            <Link to={'/Step0'}>
            <button>Sign-up now.</button>
            </Link>
             </div>
          <div className='page'>This page is protected by Google reCAPTCHA to <br></br>ensure you're not a bot. <span>Learn more.</span></div>
      </form>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Signpass
