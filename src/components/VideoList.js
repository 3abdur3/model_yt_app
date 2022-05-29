import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  // const VideoList = ({ videos }) => {
  /* "props.videos" (because, "videos" coming as "prop" form parent(APP) 
  component <VideoList/>). This will be record of different videos. 
  Or, we destructure props.videos to {videos}. */

  const renderedList = props.videos.map((vid) => {
    // const renderedList = videos.map((video) => {
    // console.log(vid);
    return (
      <VideoItem
        onVideoClick={props.onVideoSelect}
        singleVideo={vid}
        key={vid.id.videoId}
      />
    );
    // We gave new prop named "onVideoClick", then gonna bring it to VideoItem component />;
  });

  // return <div>{props.videos.length}</div>;
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
