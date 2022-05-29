import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  /* Because we want to get a list of results from the search. So initially
   we better have an empty arry for "videos". */
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  /*To handle default search, we need "componentDidMount(lifecycle method)".
  But when we are using function-componenets, then we can use "useEffect" 
  instead. And 'useEffect' is roughly equivallent to lifecyclemethod like 
  "componnetDidMount()". And 2nd argumnet is [empty array] , means run
  this function ONLY one time. */
  useEffect(() => {
    onTermSubmit("Belgium waffel");
  }, []);

  const onTermSubmit = async (term) => {
    // console.log(term);
    //This is now pre-configured instance of AXIOS we created (youtube.js)
    const response = await youtube.get("/search", {
      params: {
        q: term, //"q"(query). This parameter is requirment form youtubeApi site
      },
    });
    // console.log(response); //Little test what "response" object can give
    // console.log(response.data.items);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
    /* When user search submit, then then the firstitem[0] will be now 
    our default video */
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      {/* I have{" "} {this.state.videos.length} videos. */}
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {/* 'eleven/five' means out of default 16 column. All these design are from semenetic-ui website */}
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              /* If there is only one argument in arrowFunction, then dont to create
              arrowFunction, rather just direct update earlier created "useState" Hook.
              ex- onVideoSelect={(video) => setSelectedVideo(video)}          
              */
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
