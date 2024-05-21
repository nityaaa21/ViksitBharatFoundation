import React from 'react'
import './Contact.css'
//import msg_icon from '../../assets/msg-icon.png'
//import mail_icon from '../../assets/mail-icon.png'
//import phone_icon from '../../assets/phone-icon.png'
//import location_icon from '../../assets/location-icon.png'
//import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6a3cfe55-5cce-4ff6-8839-c80c785ee50f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={require('../../assets/msg-icon.png').default} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={require('../../assets/mail-icon.png').default} alt="" />gautamnitya2017@gmail.com</li>
            <li><img src={require('../../assets/phone-icon.png').default} alt="" />+91 936-865-6919</li>
            <li><img src={require('../../assets/location-icon.png').default} alt="" />Azad Nagar Khandari, Agra<br/> UP 282002, India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={require('../../assets/white-arrow.png').default} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
