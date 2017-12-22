import React from 'react';
import ReactDOM from 'react-dom';
import VideoList_item from './video_list_item';
const VideoList=(props)=>{
    const videoListItem=props.videos.map((video)=>{
        return(
            <VideoList_item key={video.id.videoId} video={video}
                            onVideoSelect={props.onVideoSelect}/>
        )
    });
    var Style1={
        color:"White",
        fontSize:"17px",
        fontFamily:"Verdana"
    };
    return (
        <div style={Style1}>
              {videoListItem}
        </div>

    );

}
export default VideoList;
