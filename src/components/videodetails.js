import React from 'react';
const VideoDetail=(props)=>{
    if(!props.video){
        return(
            <p>loading....</p>
        );
    }
    const url='https://www.youtube.com/embed/'+props.video.id.videoId;
    console.log("props"+props);
    var Style2={
        color:"White",
        fontSize:"40px",
        fontFamily:"Verdana"
    };
    return(
        <div>
            <div >
                <iframe allowFullScreen={"allowFullScreen"} height={400} width={700} src={url}/>
            </div>
            <div className="details">
                <div style={Style2}>{props.video.snippet.title}</div>
                <div >{props.video.snippet.description}</div>
            </div>
        </div>
    );
}
export  default VideoDetail;