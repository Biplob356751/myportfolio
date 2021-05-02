import React from 'react';
import './MyPortfolio.css';

const MyPortfolio = (props) => {
    const {image_url, url, title,body} = props.portfolio;
    return (
        <div className="my_portfolio">
            <a href={url} target="_blank">
                <img src={image_url} alt={title}/>
            </a>
            <div className="portfolio_content">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default MyPortfolio;