import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const handleBarClick = () => {
        document.getElementById('menu-bar').style.display = 'block';
        document.getElementById('menu-bar').style.transform = 'scaleY(1)';
        document.getElementById('menu-bar').style.transition = '.4s';
        document.getElementById('bar-times').style.opacity = 1;
        document.getElementById('bar-times').style.visibility = 'visible';
        document.getElementById('bar-icon').style.opacity = 0;
        document.getElementById('bar-icon').style.visibility = 'hidden';
    };
    const handleTimesClick = () => {
        document.getElementById('menu-bar').style.display = 'none';
        document.getElementById('bar-times').style.opacity = 0;
        document.getElementById('bar-times').style.visibility = 'hidden';
        document.getElementById('bar-icon').style.opacity = 1;
        document.getElementById('bar-icon').style.visibility = 'visible';
    };

    return (
        <div className='header clear_fix'>
            <div className='container'>
                <div className='main_menu'>
                    <div className='logo left'>
                        <Link to='/'><h3>BIPLOB.<span>ME</span></h3></Link>
                    </div>
                    <div id='menu-bar' className='menu_bar left'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="bar_icon right">
                        <i onClick={handleBarClick} id="bar-icon" className="fa fa-bars bars_bar"></i>
                        <i onClick={handleTimesClick} id="bar-times" className="fa fa-times bar_times"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;