import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section  name='Contact' className='container' >
            <div className="header"> 
                <h1>Get in touch</h1>
                <p>Although I'm currently looking for a opportunities, my inbox is always open. 
                if you have any for me or just want to say hi, I'll try my best to get back to you!</p>
            </div>
            <div className='form'>
                <form>
                        <input type="text" placeholder=' Enter your Full name' required/>
                        <input type="text" placeholder='Enter your number'required />
                        <input type="email" placeholder='Enter your Email' required />
                    <textarea cols="30" rows="10"></textarea>
                </form>
                 <button>Send Message</button>
            </div>
        </section>
    );
}

export default Contact;
