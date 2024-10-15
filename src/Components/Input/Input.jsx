import React from 'react'
import './Input.css'
import { Link } from 'react-router-dom'
import Step0 from '../../pages/auth/Step0/Step0'

const Input = () => {
  return (
    <div className='start'>
       <div>
            <form action="">
                <input type="text" placeholder="Email address"/> 
            </form>
        </div>
        <div className="arrow">
          <Link to={'/Step0'}>
            <button>Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
</Link>
            </div>
        
    </div>
  )
}

export default Input
