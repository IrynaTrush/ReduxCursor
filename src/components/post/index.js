import React from 'react';
import './style.css';

const Post = (props) => {
 return(
    <div className="postWrapper">
    <div className="user">
        <img src={props.photo} className="userImage" alt="easter"/>
        <div className="content">
            <div className="userInfo">
            <div className="username">{props.name}</div>
            <i className="fas fa-check-square"></i>
            <div className="userlink">{props.nickname} </div>
            <div className="userdate">"28 apr"</div>
            <div className="open">
            <i className="fas fa-chevron-down"></i>
            </div>
            </div>
            <div className="message">{props.content}</div>
        </div>
    </div>
    <div className="ray">
        <img src={props.image} className="rayImage" alt="another"/>
    </div>
    <div className="footer">
        <div className="item"><i className="far fa-comment"></i><span>{props.comments}</span></div>
        <div className="item"><i className="fas fa-random"></i><span>{props.shares}</span></div>
        <div className="item"><i className="far fa-heart"></i><span>{props.likes}</span></div>
        <div className="item"><i className="fas fa-cloud-upload-alt"></i></div> 
    </div>
</div>
 )
}

export default Post;