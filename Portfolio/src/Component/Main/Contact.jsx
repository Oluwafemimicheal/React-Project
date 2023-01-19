import React from 'react';

const Contact = () => {
    return (
        <section  name='Contact' className='container' >
            <div className="header">
                <h1>Get in touch</h1>
                <p>Although I'm currently looking for a opportunities, my inbox is always open. 
                if you have any for me or just want to say hi, I'll try my best to get back to you!</p>
            </div>
            <form>
                <div className='row'>
                    <input type="text" placeholder=' Enter your full name'/>
                    <input type="text" placeholder='Enter your phone-number' />
                </div>
                <textarea name="message"cols="30" placeholder='message' rows="10"></textarea>
            </form>
            <button>Send Message</button>
        </section>
    );
}

export default Contact;
