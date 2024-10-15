import React from 'react'
import './Step1.css';
import net from"../../../assests/Netflix-Logo.wine.svg";
import Bottom from '../../../Components/Bottom/Bottom';
import Top from '../../../Components/Signup.jsx/Top';


const Step1 = () => {
  return (
    <div className='Step'>
       <Top netlogo={net}/>
      <div className="tick"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div>
      <div className="choose1">
        <p className='ste1'>STEP <b>1</b> OF <b>3</b></p>
        <p className='plan'>Choose your plan.</p>
</div>
<div className="tickred">
        <div className="no">
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</div>
        <div className=''>No commitments, cancel anytime.</div>
        </div>
        <br></br>

        <div className="no">
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</div>
        <div>Everything on Netflix for one low price.</div>
        </div>
        <br></br>

        <div className="no">
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</div>
        <div>No ads and no extra fees. Ever.</div>
        </div>
    
     <br></br>
        
        <button className='next'>Next</button>
        </div>
        <div className="bot">
        <Bottom/>
        </div>
  
    </div>
  )
}

export default Step1
