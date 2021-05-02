import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import ProjectData from '../RecentProject/ProjectData.json';
import MyPortfolio from './MyPortfolio';


const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() =>{
        setPortfolio(ProjectData);
    },[])
    return (
        <div className="portfolio_page container_fluid">
            <div className="portfolio_banner">
                <h1>My Simple React Project</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque asperiores est Itaque asperiores estendis placeat !</p>
            </div>
            {
                portfolio.map(portfolio => <MyPortfolio portfolio={portfolio}></MyPortfolio>)
            }
        </div>
    );
};

export default Portfolio;