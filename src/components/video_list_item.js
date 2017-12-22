import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const VideoList_item=(props)=>{
    const video=props.video;

    return (
        <div onClick={()=>{props.onVideoSelect(video)}}>
            <img className="media-object" src={video.snippet.thumbnails.default.url}/>

            {video.snippet.title}
        </div>

    );

}
export default VideoList_item;