import React, { useRef } from 'react'
import './Testimonials.css'
//import next_icon from '../../assets/next-icon.png'
//import back_icon from '../../assets/back-icon.png'
//import user_1 from '../../assets/user-1.png'
//import user_2 from '../../assets/user-2.png'
//import user_3 from '../../assets/user-3.png'
//import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

     const slider = useRef();
     let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={require('../../assets/next-icon.png').default} alt="" className='next-btn' onClick={slideForward}/>
      <img src={require('../../assets/back-icon.png').default} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={require('../../assets/user-1.png').default} alt="" />
                        <div>
                            <h3>Ankit Srivastav 1</h3>
                            <span>CreditInsta, India</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my foundation at CreditInsta was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={require('../../assets/user-2.png').default} alt="" />
                        <div>
                            <h3>Ankit Srivastav 2</h3>
                            <span>CreditInsta, India</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my foundation at CreditInsta was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={require('../../assets/user-3.png').default} alt="" />
                        <div>
                            <h3>Ankit Srivastav 3</h3>
                            <span>CreditInsta, India</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my foundation at CreditInsta was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={require('../../assets/user-4.png').default} alt="" />
                        <div>
                            <h3>Ankit Srivastav 4</h3>
                            <span>CreditInsta, India</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my foundation at CreditInsta was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
