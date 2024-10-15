import React from 'react'
import "./Enjoy.css"
const Enjoy = ({img1,img2,img3,img4,vid1,vid2,thin}) => {
  return (
    <div className='black'>
      <div className='tv'>
        <img src={img1} alt="" />
        <img src={img2} alt="" className='strange'/>
        <img src={img3} alt="" className='tv2'/>
        <img src={img4} alt="" className='child'/>

      </div>
      <div className="vid">
                <video src={vid1} alt="video" typeof="m4v" muted autoPlay loop></video>
                <video src={vid2} alt="video" typeof="m4v" muted autoPlay loop className='vide'></video>

       </div>



    </div>
  )
}

export default Enjoy
