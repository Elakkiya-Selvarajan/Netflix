import React from 'react'
import "./Header.css"
const Header = ({netlogo}) => {
  return (
    <div className='main'>
       <div className='netlogo'>
        <img src={netlogo} alt="" />
       </div>

       <div className='signout'>
        <button>Sign out</button>
       </div>


      </div>
    
  )
}

export default Header
