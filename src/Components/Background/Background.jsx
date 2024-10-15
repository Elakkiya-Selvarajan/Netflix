import React from 'react'
import "./Background.css"
const Background = ({size,value,color,position,className}) => {
  return (
      <div className='bg'>
        <p className={`${size} ${color} ${size-1} ${color-1} ${className} ${size-2} ${color-2} ${position} ${position-1} ${position-2} ${size-3} ${color-3} ${position-3}  ${size-4} ${color-4} ${position-4} ${size-5} ${color-5} ${position-5} ${size-5} ${color-5} ${position-5} ${size-6} ${color-6} ${position-6} ${size-7} ${color-7} ${position-7} ${size-8} ${color-8} ${position-8} ${size-9} ${color-9} ${position-9}`} >{value}</p>
      </div>
  )
}

export default Background
