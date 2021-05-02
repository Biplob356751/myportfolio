import React from 'react';
import './Team.css'

const Team = (props) => {
    const {image_url, title, body} = props.myTeam;
    return (
        <div className="my_team_member">
            <img src={image_url} alt={title}/>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Team;


