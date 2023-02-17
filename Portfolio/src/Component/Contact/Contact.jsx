import React from 'react';
import './Contact.css'
const Contact = () => {

    return (
        <section className='container contact' >
            <div className="header"> 
                <h1>Get in touch</h1>
                <p>Although I'm currently looking for a opportunities, my inbox is always open. 
                if you have any for me or just want to say hi, I'll try my best to get back to you!</p>
            </div>
            <div className='form'>
                <form>
                        <input type="text"  name='user_name' placeholder=' Enter your Full name' required/>
                        <input type="email" name='user_email' placeholder='Enter your Email' required />
                    <textarea name='message' cols="30" rows="10"></textarea>
                 <button type="submit" value="Send" className='btn' >Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
