
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'


const Contact = () => {
 const [done, setDone] = useState(false)

 const form = useRef();
    const handleForm = ()=>{
    setTimeout(()=>{
        setDone(false)
        form.resetFields()
    }, 3000)
   setDone(true)
}

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rwj2cgd', 'template_2u5hi9u', form.current, 'JirwjugDbAevkhZQH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section className='container'>
            <div className="contact_container">
                <div className='contact_form'>
                    <form ref={form} onSubmit={sendEmail}>
                            <input type="text"  name='user_name' placeholder=' Enter your Full name' required/>
                            <input type="email" name='user_email' placeholder='Enter your Email' required />
                        <textarea name='message' cols="30" rows="10"></textarea>
                        <button type="submit" value="Send" className='btn' onClick={() => handleForm()} >Send</button>
                        <span>{done && 'Thanks for contacting me!'}</span>
                    </form>
                </div>
                <div className="header"> 
                    <h1>Get in touch</h1>
                    <p>Although I'm currently looking for a opportunities, my inbox is always open. 
                    if you have any for me or just want to say hi, I'll try my best to get back to you!</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
