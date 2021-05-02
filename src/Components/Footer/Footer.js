import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
             <div className="loction">
                <Link to='/'><h3>BIPLOB.<span>ME</span></h3></Link>
                <div className="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-whatsapp"></i>
                    <i class="fab fa-youtube"></i>
                </div>
             </div>
             <div className="copyright_section">
                <p>CopyRight All Right Reserved <span>Md.Biplob Hossain</span></p>
             </div>
        </div>
    );
};

export default Footer;