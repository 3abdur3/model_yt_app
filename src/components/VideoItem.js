import "./VideoItem.css";
import React from "react";

const VideoItem = (props) => {
  // Here ALMOST all the "CLASSNAMES" are used from "Sementic.-ui.com"
  return (
    <div
      onClick={() => props.onVideoClick(props.singleVideo)}
      className="item video-item"
    >
      <img
        className="ui image"
        src={props.singleVideo.snippet.thumbnails.medium.url}
        alt={props.singleVideo.snippet.title}
      />
      <div className="content">
        <div className="header">{props.singleVideo.snippet.title}</div>
      </div>
    </div>
    //Here props.videoItem, because we bring it as prop from "VideoList"
  );
};

export default VideoItem;
