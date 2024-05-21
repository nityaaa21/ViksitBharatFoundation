import React from 'react'
import './Programs.css'
//import program_1 from '../../assets/program-1.png'
//import program_2 from '../../assets/program-2.png'
//import program_3 from '../../assets/program-3.png'
//import program_icon_1 from '../../assets/program-icon-1.png'
//import program_icon_2 from '../../assets/program-icon-2.png'
//import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
          <img src={require('../../assets/program-1.png').default} alt="" />
          <div className="caption">
            <img src={require('../../assets/program-icon-1.png').default} alt="" />
            <p>Degree</p>
          </div>
    </div>
    <div className="program">
    <img src={require('../../assets/program-2.png').default} alt="" />
    <div className="caption">
            <img src={require('../../assets/program-icon-2.png').default} alt="" />
            <p> M Degree</p>
          </div>
</div>
<div className="program">
          <img src={require('../../assets/program-3.png').default} alt="" />
          <div className="caption">
            <img src={require('../../assets/program-icon-3.png').default} alt="" />
            <p> P Degree</p>
          </div>
    </div>
    </div>
  )
}

export default Programs
