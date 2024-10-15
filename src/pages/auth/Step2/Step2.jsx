import React from 'react'
import Header from '../../../Components/Signup.jsx/Header'
import nett from "../../../assests/Netflix-Logo.wine.svg";
import "./Step2.css"
import Bottom from '../../../Components/Bottom/Bottom';
const Step2 = () => {
  return (
    <div className='right'>
       <Header netlogo={nett}/>
       <div className="step2">
        <p>STEP <b>1</b> OF <b>3</b></p>
        <p className='right'>Choose the plan that’s right for you</p>
       </div>

        <div className="container">

       <div className="premium">
        <div className="hdr">
            <p>Premium</p>
            <p>4K + HDR</p>
        </div>

        <div className="price">
            <p className='gray'>Monthly price</p>
            <p>649</p>
            <hr />

            <p className='gray'>Video and sound quality</p>
            <p>Best</p>
            <hr />

            <p className='gray'>Resolution</p>
            <p>4K (Ultra HD) + HDR</p>
            <hr />

            <p className='gray'>Spatial audio (immersive sound)</p>
            <p>Included</p>
            <hr />

            <p className='gray'>Support devices</p>
            <p>TV,computer,mobile phone,tablet</p>
            <hr />

            <p className='gray'>Devices your household can watch at<br></br> the same time</p>
            <p>4</p>
            <hr />

            <p className='gray'>Download devices</p>
            <p>6</p>
        </div>

       </div>

       <div className="premium">
        <div className="hdr2">
            <p>Standard</p>
            <p>1080p</p>
        </div>

        <div className="price">
            <p className='gray'>Monthly price</p>
            <p>499</p>
            <hr />

            <p className='gray'>Video and sound quality</p>
            <p>Great</p>
            <hr />

            <p className='gray'>Resolution</p>
            <p>1080p(Full HD)</p>
            <hr />

            <p className='gray'>Supported devices</p>
            <p>TV,computer,mobile phone,tablet</p>
            <hr />

            <p className='gray'>Devices your household can watch at<br></br> the same time</p>
            <p>2</p>
            <hr />

            <p className='gray'>Download devices</p>
            <p>2</p>
        </div>

       </div>

       <div className="premium">
        <div className="popular">Most popular</div>
        <div className="hdr1">
            <p>Basic</p>
            <p>720p</p>
        </div>

        <div className="price">
            <p className='gray'>Monthly price</p>
            <p>199</p>
            <hr />

            <p className='gray'>Video and sound quality</p>
            <p>Good</p>
            <hr />

            <p className='gray'>Resolution</p>
            <p>720p(HD)</p>
            <hr />

            <p className='gray'>Supported devices</p>
            <p>TV,computer,mobile phone,tablet</p>
            <hr />

            <p className='gray'>Devices your household can watch at<br></br> the same time</p>
            <p>1</p>
            <hr />

            <p className='gray'>Download devices</p>
            <p>1</p>
        </div>

       </div>


       <div className="premium">
        <div className="hdr3">
            <p>Mobile</p>
            <p>480p</p>
        </div>

        <div className="price">
            <p className='gray'>Monthly price</p>
            <p>149</p>
            <hr />

            <p className='gray'>Video and sound quality</p>
            <p>Fair</p>
            <hr />

            <p className='gray'>Resolution</p>
            <p>480p</p>
            <hr />

            <p className='gray'>Supported devices</p>
            <p>Mobile phone,tablet</p>
            <hr />

            <p className='gray'>Devices your household can watch at<br></br> the same time</p>
            <p>1</p>
            <hr />

            <p className='gray'>Download devices</p>
            <p>1</p>
        </div>
       </div>
       </div> 

       <div className="fullhd">
        <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <span>Terms of Use </span>for more details.
Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
</p>
<div className="nextt">
<button className='next1'>Next</button>
</div>
       </div>
       <Bottom/>
        



    </div>
  )
}

export default Step2
