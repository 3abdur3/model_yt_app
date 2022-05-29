import React from "react";

const VideoDetail = ({ video }) => {
  //Again instead of props.video, we could destructure just {video}
  // return <div>{props.singleVideoDetail.snippet.title}</div>;

  /*It means if there is no-video. Because in our app function we have 
  initial value of selectedVdeo=null. Thats why we must pass this lis of condition */
  if (!video) {
    return <div>Loading...</div>;
  }

  //We make a variable to store video source link
  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSRC} title="video Player"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
