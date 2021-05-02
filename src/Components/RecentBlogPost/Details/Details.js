import React, {useState, useEffect} from 'react'; 
import './Details.css';
import { useParams } from 'react-router-dom';
import BlogPostData from '../BlogPostData.json'

const Details = () => {
    const {id} = useParams();
    const [blogPostData,setBlogPostData] = useState([]);
    useEffect(()=>{
        for (let i = 0; i < BlogPostData.length; i++) {
            if (BlogPostData[i].id === id) {
                setBlogPostData(BlogPostData[i]);
            } 
        }
    },[id]);

    const [comment,setComment] = useState('');

    const handleComment = () =>{
        const comments = document.getElementById('comment').value;
        setComment(comments);
        document.getElementById('comment').value = '';
    }

    return (
        <div className="details_page container_fluid">
            <div className='details_post'>
                <img src={blogPostData.image} alt={blogPostData.title} />
                <h5>Autthor: {blogPostData.author}</h5>
                <span>PostDate: {blogPostData.date}</span>
                <h2>{blogPostData.title}</h2>
                <h4>{blogPostData.subtitle}</h4>
                <p>{blogPostData.description}.</p>
            </div>
            <div className="comment_section">
                <h1>Comment Section</h1>
                <from>
                    <textarea required placeholder='Comment Here:' id="comment"></textarea>
                    <button onClick={handleComment}>Comment</button>
                </from>
            </div>
            <div className="comments">
                <img src={blogPostData.image} alt={blogPostData.title}/>
                <p><span>Comments by:</span> {blogPostData.author}</p>
                <h4>{comment}</h4>
            </div>

        </div>
        
    );
};

export default Details;