import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import ServiceData from '../MyService/ServiceData/ServiceData.json';
import PriceData from './PriceData.json';

const Services = () => {
    const [myData, setMyData] = useState([]);
    useEffect(()=>{
        setMyData(ServiceData);
    },[]);
    const [price, setPrice] = useState([]);
    useEffect(()=>{
        setPrice(PriceData);
    },[])
    return (
        <div className="service_page">
            <div className="service_banner">
                <h1>The Services That I Provide</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                <Link to="/contact">Hire Me</Link>
            </div>
            <div className="service container_fluid">
                {
                    myData.map(myService => 
                    <div className="my_services" key={myService.title}>
                        <div className="services_item">
                            <i className={myService.icon}></i>
                            <h3>{myService.title}</h3>
                            <p>{myService.description}</p>
                        </div>
                    </div>)
                }
            </div>
            <div className="price_table container_fluid">
                <h1>Pricing Table</h1>
                <div className="price_level">
                    {
                        price.map(price => 
                            <div className="pricing_table">
                                <h2>{price.title}</h2>
                                <div className="prices">
                                    <h3>{price.price}$</h3>
                                    <h4>{price.subtitle}</h4>
                                    <span>{price.page}</span>
                                    <p>{price.description}</p>
                                    <Link to='/contact'>Get Start</Link>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;