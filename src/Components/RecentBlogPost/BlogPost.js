import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = (props) => {
    const {image,title,subtitle,description,date,author,id} = props.post;
    return (
        <div className="recent_post">
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

export default BlogPost;