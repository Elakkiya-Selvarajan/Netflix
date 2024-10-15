import React from 'react'
import './Signin.css'
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';



const Signin = () => {
  return (
<>
    <div className='sign'>
      <div className="forms">
        <div className='head'>Sign In</div>
        <form action="">
            <input type="text" placeholder='Email or mobile number' />
            <br></br>
            <br></br>
            <input type="password" placeholder="Password" id="" /><br></br>
            <br></br> 
            <button className='red'>Sign In</button>
            <br></br><br></br>
            <p>OR</p>
            <Link to={'/Signpass'}>
            <button className='use'>Use a Sign-in code</button>
            </Link>
            <br></br><br></br>
            <div className='forgot'>Forgot password?</div>
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

export default Signin;
