import React from 'react'

const VideoPlayer  = ({video}) =>{
    // console.log(video.id.videoId)
    if(!video){
        return <div style ={{
            marginBottom:"20rem",
            position: "absolute",
            top: "10rem"}}>Loading...</div>
    }
    return <div style ={{marginBottom:"20rem",position: "absolute",top: "6rem"}}>
    <iframe width="660" height="375" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>{video.snippet.title}</h3>
    </div>
    
}
export default VideoPlayer