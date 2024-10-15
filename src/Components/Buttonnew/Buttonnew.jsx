import React from 'react'

const Buttonnew = ({size,icon,color,bg,value1,home1,home2}) => {
  return (
    <div>
      <button className={`${size} ${icon} ${color} ${bg} ${home1} ${home2}`}>{value1}</button>
    </div>
  )
}

export default Buttonnew
