import React from "react";

const BasicVideoPlayer = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h2>Basic HTML5 Video Player</h2>

      <video
        src="https://ik.imagekit.io/roadsidecoder/yt/example.mp4?tr=orig"
        width="800"
        height="450"
        controls
        poster="https://ik.imagekit.io/roadsidecoder/yt/example.mp4/ik-thumbnail.jpg"
      />
    </div>
  );
};

export default BasicVideoPlayer;
