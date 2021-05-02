import React, { useEffect, useState } from 'react';
import './Blog.css';
import BlogPostData from '../RecentBlogPost/BlogPostData.json';
import Blogs from './Blogs'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(BlogPostData);
    }, [])
    return (
        <div className="blog_banner">
            <div className="banner_blog">
                <h1>Blog Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.Lorem ipsum dolor sit amet, consectetur proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborumLorem ipsum dolor sit amet, consectetur proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum</p>
            </div>

            <div className="blog_page">
                {
                    blogs.map(blog => <Blogs blog={blog}></Blogs>)
                }
            </div>
        </div>

    );
};

export default Blog;