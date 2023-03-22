import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y9ulqjq', 'template_wj6k1mb', form.current, 'jqZC19BoXjMsT1B3y')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>naomiokorodudu@gmail.com</h5>
          </article>
        </div>
        {/* END CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
