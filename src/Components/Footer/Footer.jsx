import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
        <div className="final">
            <div className="first">
               <p>Questions ? Call 000-800-919-1694</p>
               <ul>
              <li> <a href="/">FAQ</a></li>
              <li> <a href="/">Cookie Preferences</a></li>
               </ul>
               <div className="butt1">
               <select name="" id="">
                    <option value="English">English</option>
                    <option value="Hindi">हिन्दी</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
</svg>
</div>

            </div>

            <div className="second">
                <ul>
               <li> <a href="/">Help Center</a></li> 
               <li><a href="/">Corporate Information</a></li> 
                </ul>
            </div>

            <div className="third">
                <ul>
               <li> <a href="/">Terms of use</a></li> 
               </ul>
            </div>

            <div className="fourth">
            <ul>
            <li><a href="/">Privacy</a></li>

            </ul>
            </div>

        </div>
  )
}

export default Footer
