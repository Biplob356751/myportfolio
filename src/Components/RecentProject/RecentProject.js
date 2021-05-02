import React from 'react';
import './RecentProject.css';

const RecentProject = (props) => {
    const {image_url, url, title,body} = props.rcntProject;
    return (
        <div className='container_fluid'>
            <div className='project'>
                <div className='project_image'>
                    <a href={url} target='_blank'><img src={image_url} alt='image'/></a>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default RecentProject;