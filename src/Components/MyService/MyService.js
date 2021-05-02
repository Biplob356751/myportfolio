import React from 'react';
import './MyService.css';

const MyService = (props) => {
    const {title, description,icon} = props.service;
    return (
        <div className='my_service'>
            <div className='service_item'>
                <i className={icon}></i>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default MyService;