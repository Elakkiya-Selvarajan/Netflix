import React from 'react'
import "./Top.css"
const Top = ({netlogo}) => {
  return (
    <div className="header">
    <div className='logonet'>
      <img src={netlogo} alt="" />
    </div>

    <div className='signout'>
        <button>Signout</button>
    </div>
    </div>
  )
}

export default Top
