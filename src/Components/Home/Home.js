import React, { useEffect, useState } from 'react';
import MyService from '../MyService/MyService';
import './Home.css';
import ServiceData from '../MyService/ServiceData/ServiceData.json';
import RecentProject from '../RecentProject/RecentProject';
import ProjectData from '../RecentProject/ProjectData.json';
import Team from '../MyTeam/Team';
import TeamData from '../MyTeam/TeamData.json';
import Contact from '../Contact/Contact';
import BlogPost from '../RecentBlogPost/BlogPost';
import BlogPostData from '../RecentBlogPost/BlogPostData'


const Home = () => {
    /*  service data section */
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData(ServiceData);
    },[]);
    /*Recent Project Section Data */
    const [recentProjectData, setRecentProjectData] = useState([]);
    useEffect(()=>{
        setRecentProjectData(ProjectData);
    },[]);
    /* Team Data Section */
    const [team,setTeam] = useState([]);
    useEffect(()=>{
        setTeam(TeamData);
    },[]);
    /* Blog Post data Section */
    const [blogPost,setBlogPost] = useState([]);
    useEffect(()=>{
        setBlogPost(BlogPostData);
    },[])
    
    return (
        <div className='home_page'>
            <div className= 'home'>
                <div className='banner_content'>
                    <h4>HEY THERE!</h4>
                    <h1>I AM <span>MD BIPLOB HOSSAIN</span>...</h1>
                    <h2>Frontend Devloper....</h2>
                    <button>Hire Me</button>
                </div>
            </div>

            <div className="service_content container_fluid">
                {
                    data.slice(0,4).map(service=> <MyService service={service}></MyService>)
                }
            </div>
            <div className="recent_project container_fluid">
                <h1>My Recent Project</h1>
                <div className="my_project"> 
                    {
                        recentProjectData.slice(4, 7).map(rcntProject=> <RecentProject rcntProject={rcntProject}></RecentProject>)
                    }
                </div>
            </div>
            <div className="my_team container_fluid">
                <h1>My Team Member</h1>
                <div className="team">
                    {
                        team.map(myTeam=> <Team myTeam={myTeam}></Team>)
                    }
                </div>
            </div>

            <div className="blog_post container_fluid">
                <h1>Recent Blog Posts</h1>
                <div className="recent_posts">
                    {
                        blogPost.slice(3,7).map(post => <BlogPost post={post}></BlogPost>)
                    }
                </div>
            </div>
            <div className="contact_from container_fluid">
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;