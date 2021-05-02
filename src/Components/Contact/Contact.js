import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact container_fluid">
            <h1>Contact us anytime to order!</h1>
            <from>
                <input type="email" placeholder="Email Address:" required/>
                <textarea placeholder="Massge:" required></textarea>
                <input type="submit" value="Submit"/>
            </from>
        </div>
    );
};

export default Contact;