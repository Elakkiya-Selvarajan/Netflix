import React from 'react'
import './Step5.css'
import Header from '../../../Components/Signup.jsx/Header'
import Bottom from '../../../Components/Bottom/Bottom'
import { Link } from 'react-router-dom'
const Step5 = ({netfl}) => {
  return (
    <div>
     <Header/>
      <div className="step5">
        <div className='fliximage1'>
    <img src={netfl} alt="" />
    </div>
        <div className="step05">STEP <b>1</b> OF <b>3</b></div>
        <p className='password'>Create a password to start<br></br> your membership</p>
        <p className='few'>Just a few more steps and you're done!<br></br>We hate paperwork too.</p>
        <input type="text" placeholder='Email'/>
        <br></br><br></br>
        <input type="text" placeholder='Add a password' />
        <br></br>
        <Link to={'/home'}>
        <button className='nextbut'>Next</button>
        </Link>
      </div>
      <Bottom/>
    </div>
  )
}

export default Step5
