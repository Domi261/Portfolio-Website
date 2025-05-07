import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

// enter your own web3 forms access key below

    formData.append("access_key", "xxxxxxxxxxxxxxxxxxxxxxxx");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    
      alert(res.message);
    
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Kontakt</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>greatstackdev@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+772-825-524</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>CA, United States</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Ihr Name</label>
            <input type="text" placeholder='Geben Sie ihren Namen ein' name='name' />
            <label htmlFor="">Ihre Email</label>
            <input type="email" placeholder='Geben Sie ihre Email ein' name='email' />
            <label htmlFor="">Geben Sie hier Ihre Nachricht ein</label>
            <textarea name="message" rows="8" placeholder='Ihr Anliegen'></textarea>
            <button type='submit' className="contact-submit">Anfrage einreichen</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
