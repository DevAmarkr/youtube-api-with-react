import './videolist.css'
import React from 'react';

const VideoList = (props) =>{
    
    console.log(props.data.snippet.thumbnails.medium.url)
    return [
        <div className ="list-box">
            <div className="image-box">
               <img src={props.data.snippet.thumbnails.medium.url} alt=""/>
            </div>
            <div className="imgae-text">
                <h3>{props.data.snippet.title}</h3>
                <p>{props.data.snippet.channelTitle}</p>
            </div>
        </div>
    ]
}
export default VideoList

