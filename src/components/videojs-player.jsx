import React, { useRef } from "react";
import VideoJS from "./videojs";
import { buildSrc } from "@imagekit/react";

const VideoJSPlayer = () => {
  const playerRef = useRef(null);

  const urlEndpoint = "https://ik.imagekit.io/roadsidecoder";
  const videoPath = "/yt/example.mp4";

  const hlsUrl = buildSrc({
    urlEndpoint,
    src: `${videoPath}/ik-master.m3u8`,
    transformation: [{ streamingResolutions: "240_360_480_720_1080" }],
  });

  // Video.js configuration with HLS for quality switching
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: false,
    muted: true,
    sources: [
      {
        // Using ImageKit's HLS manifest for demo purposes
        src: hlsUrl,
        type: "application/x-mpegURL",
      },
    ],
    poster:
      "https://ik.imagekit.io/roadsidecoder/yt/example.mp4/ik-thumbnail.jpg?tr=w-1200,h-680,so-5",
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // Log when player events occur
    player.on("waiting", () => {
      console.log("Player is waiting");
    });

    player.on("loadedmetadata", () => {
      console.log("Video metadata loaded");
    });

    player.on("dispose", () => {
      console.log("Player will dispose");
    });
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Video.js Player with Quality Selection</h2>

      <div style={{ maxWidth: "800px" }}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>

      <div style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
        <p>✅ Quality switching available (click gear icon)</p>
        <p>❌ Requires complex setup (3 npm packages)</p>
        <p>❌ Manual HLS manifest creation needed</p>
        <p>❌ Server-side encoding infrastructure required</p>
        <p>❌ Multiple encoded files needed for each quality</p>
      </div>
    </div>
  );
};

export default VideoJSPlayer;
