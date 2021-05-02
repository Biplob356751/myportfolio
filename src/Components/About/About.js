import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about_section">
            <div className='about_page'>
                <h1>About MySelf</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</p>
            </div>
            <div className="about_myself">
                <div className="about_image">
                    <img src="https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="profile picture"/>
                </div>
                <div className="about_content">
                    <h3>Name: Md.Biplob Hossian</h3>
                    <p>Education: Diploma In RAC</p>
                    <p>Profession: Frontend Devloper</p>
                    <p>Email: biplobhssain356751@gmail.com</p>
                    <p>Phone: 01302480286</p>
                </div>
                <div className="about_icon">
                     <i class="fab fa-facebook-f"></i>
                     <i class="fab fa-twitter"></i>
                     <i class="fab fa-whatsapp"></i>
                </div>
            </div>
            <div className="my_experience container_fluid">
                <h1>MY SKILLS</h1>
                <div className="experience_level">
                    <h6>HTML5</h6>
                    <div className="level">
                        <div className="span_level">
                            <span>95%</span>
                        </div>
                    </div>
                </div>
                <div className="experience_level">
                    <h6>CSS3</h6>
                    <div className="level">
                        <div className="span_level1">
                            <span>90%</span>
                        </div>
                    </div>
                </div>
                <div className="experience_level">
                    <h6>JAVASCRIPT</h6>
                    <div className="level">
                        <div className="span_level2">
                            <span>75%</span>
                        </div>
                    </div>
                </div>
                <div className="experience_level">
                    <h6>BOOTSTRAP</h6>
                    <div className="level">
                        <div className="span_level3">
                            <span>80%</span>
                        </div>
                    </div>
                </div>
                <div className="experience_level">
                    <h6>REACT</h6>
                    <div className="level">
                        <div className="span_level4">
                            <span>75%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;