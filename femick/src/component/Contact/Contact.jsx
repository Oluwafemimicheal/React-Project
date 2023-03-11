import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
       <section>
        <div className="container contact-container">
            <article>
                <h2>How to Choose<br/> a Femicklization Solution</h2>
                <small>Make sure you're asking the right question by<br/> reading our free ebook now.</small>
                <div className='buttons'>
                    <a className='btn btn-primary' href="">REQUEST A DEMO</a>
                    <a className='btn btn-black'  href="">CONTACT US</a>
                 </div>
            </article>
            <span className='design'></span>
        </div>
       </section>
    );
}

export default Contact;
