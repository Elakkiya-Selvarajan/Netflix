import React from 'react'
import Header from '../../../Components/Signup.jsx/Header'
import Bottom from '../../../Components/Bottom/Bottom'
import "./Step0.css"
import {FaLaptop} from 'react-icons/fa';
import {FaTv} from 'react-icons/fa';
import {FaTablet} from 'react-icons/fa';
import {FaMobile} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Step0 = ({netfl}) => {
  return (
    <div className='Step0'>
    <Header/>
    <div className='fliximage'>
    <img src={netfl} alt="" />
    </div>
   <div className="comp">
          <FaLaptop size={"80px"} color='red'/>
          <FaTv size={"100px"} color='red'/>
          <FaTablet size={"60px"} color='red'/>
          <FaMobile size={"20px"} color='red'/>
        </div>
   <div className="finish">
     <p className='topic'>STEP <b>1</b> OF <b>3</b></p>
     <p className='set'>Finish setting up your account</p>
     <div className="create">
     <p>Netflix is personalised for you.
      Create a password to watch on any device at any time.</p>
     </div>
     <Link to={'/Step5'}>
     <button className='next0'>Next</button>
     </Link>
     </div>
     <Bottom/>
     </div>
  )
}

export default Step0
