import React from 'react'
import Text from '../../../Components/Text/Text'
import Background from '../../../Components/Background/Background'
import Input from '../../../Components/Input/Input'
import Enjoy from '../../../Components/Box/Enjoy'
import a from "../../../assests/tv.png"
import b from "../../../assests/tvVideo1.m4v"
import c from "../../../assests/strangeThings.jpg"
import d from "../../../assests/tvImg2.png"
import e from "../../../assests/tvVideo2.m4v"
import f from "../../../assests/children.png"
import Logo from '../../../Components/Logo/Logo'
import g from "../../../assests/Netflix-Logo.wine.svg"
import Final from '../../../Components/Final/Final'
// import Strange from '../../../Components/Box/Strange'
// import Signin from '../../auth/Login/Signin'
// import Footer from '../../../Components/Footer/Footer'
// import x from "../../../assests/ST_PAYOFF_US_alt1-2-720x1066.webp";
import "./Pages.css";
import Faqs from '../../../Components/Faq/Faq'
// import Netflix from '../../../Components/Netflix/Netflix'
// import flix from "../../../assests/Netflix-Logo.wine.svg"
// import Signpass from '../../auth/Logout/Signpass'
// import Step1 from '../../auth/Step1/Step1'
// import Step0 from '../../auth/Step0/Step0'
// import Step2 from '../../auth/Step2/Step2'
// import Step4 from '../../auth/Step4/Step4'
// import Step3 from '../../auth/Step3/Step3'
// import Step5 from '../../auth/Step5/Step5'


// import Top from '../../../Components/Signup.jsx/Top'
// import nett from "../../../assests/Netflix-Logo.wine.svg"


const Pages = () => {
  return (
    <div>
      <Text/>
      <Background value={"Unlimited movies, TV shows and more"} size="size" color="color" position="position"/>
      <Background value={"Watch anywhere. Cancel anytime."} size="size-1" color="color-1"  position="position-1"/>
      <Background value={"Ready to watch? Enter your email to create or restart your membership."} size="size-2" color="color-2" position="position-2"/> 
      <Input/>
      <Enjoy img1={a} vid1={b} img2={c} img3={d} vid2={e} img4={f} />
      <Background value={"Enjoy on your TV"} size="size-3" color="color-3" position="position-3"/>
      <Background value={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."} position="position-4" color="color-4" size="size-4"/>
      <Background value={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."} position="position-4" color="color-4" size="size-4"/>
      {/* <div className="wat">
      <Strange thin={x}/>
      </div> */}
      <Enjoy/>
      <Background value={"Download your shows to watch offline"} size="size-5" color="color-5" position="position-5"/>
      <Background value={"Save your favourites easily and always have something to watch."} size="size-6" color="color-6" position="position-6" />
      <Enjoy/>
      <Background value={"Watch everywhere"} size="size-7" color="color-7" position="position-7"/>
      <Background value={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}size="size-8" color="color-8" position="position-8"/>
      <Enjoy/>
      <Background value={"Create profiles for kids"}size="size-9" color="color-9" position="position-9"/>
      <Background value={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."}size="size-10" color="color-10" position="position-10"/>
      <Logo net={g}/>
      <h1 className="freq">Frequently asked question</h1>
      <div className="asked">
      <Faqs/>
      <div className="one">
      <p className='enter'>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="in">
        <Input/>
  </div>
  </div>
  </div>
  <Final/>
  {/* <Strange/> */}
   {/* <div>
  <Strange thin={x}/>
  </div> */}
  {/* <Netflix logo={flix}/>
  <Signin/>
  <Footer/>

  <div>
    <Signpass/>
    <Footer/>
  </div>

  <div>
    <Step1/>
  </div>
<div>
  <Step0/>
</div>

<div>
  <Step2/>
</div> 
  
  <div>
    <Step4/>
  </div>

<div>
  <Step3/>
</div> */}


  </div>

  )
}

export default Pages
