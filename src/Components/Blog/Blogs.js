import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'

const Blogs = (props) => {
    const {image,title,subtitle,date,author,description,id} = props.blog;
    return (
        <div className="single_blogs_post">
             <img src={image} alt={title}/>
             <div className="single_post">
                <h4>{title}</h4>
                <p>{subtitle}</p>
                <span>Date: {date}</span>
                <span> Author: {author}</span>
                <Link to={`/details/${id}`}>View More</Link>
             </div>
        </div>
    );
};

export default Blogs;