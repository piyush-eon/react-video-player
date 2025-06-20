import React from "react";
import "./App.css";
import VideoJSPlayer from "./components/videojs-player";
import ImageKitBasicPlayer from "./components/imagekit-player";
import BasicVideoPlayer from "./components/video-player";

function App() {
  return (
    <div className="App">
      <VideoJSPlayer />
    </div>
  );
}

export default App;
