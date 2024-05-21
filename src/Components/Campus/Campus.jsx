import React from 'react'
import './Campus.css'
//import gallery_1 from '../../assets/gallery-1.png'
//import gallery_2 from '../../assets/gallery-2.png'
//import gallery_3 from '../../assets/gallery-3.png'
//import gallery_4 from '../../assets/gallery-4.png'
//import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={require('../../assets/gallery-1.png').default} alt="" />
        <img src={require('../../assets/gallery-2.png').default} alt="" />
        <img src={require('../../assets/gallery-3.png').default} alt="" />
        <img src={require('../../assets/gallery-4.png').default} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={require('../../assets/white-arrow.png').default} alt="" /></button>
    </div>
  )
}

export default Campus
