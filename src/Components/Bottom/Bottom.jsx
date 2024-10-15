import React from 'react'
import Background from '../Background/Background'
import "./Bottom.css"
import Button from '../Button/Button'


const Bottom = () => {
  return (
    <div className='bot'>
      <div className="phone">
      <Background value={<p>Questions? Call <span> 000-800-919-1694</span></p>}/>
      </div>
      <div className="link">
      <Background value={<p>FAQ</p>}/>
      <Background value={<p>Help center</p>}/>
      <Background value={<p>Netflix Shop</p>}/>
      <Background value={<p>Terms of Use</p>}/>
      <Background value={<p>Privacy</p>}/>
      <Background value={<p>Cookie Preferences</p>}/>
      <Background value={<p>Corporate Information</p>}/>
      </div>
      <Button/>
    </div>
    
  )
}

export default Bottom
