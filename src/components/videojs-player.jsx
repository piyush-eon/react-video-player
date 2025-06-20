import React, { useRef } from "react";
import VideoJS from "./videojs";

const VideoJSPlayer = () => {
  const playerRef = useRef(null);

  // Video.js configuration with HLS for quality switching
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: false,
    muted: true,
    playbackRates: [0.25, 0.5, 1, 1.5, 2],
    sources: [
      {
        // Using ImageKit's HLS manifest URL
        src: "https://ik.imagekit.io/roadsidecoder/yt/example.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080",
        // src: "https://ik.imagekit.io/roadsidecoder/yt/example.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080,l-subtitles,i-yt/english.srt,l-end",
        type: "application/x-mpegURL",
      },
    ],
    poster:
      "https://ik.imagekit.io/roadsidecoder/yt/example.mp4/ik-thumbnail.jpg?tr=w-1200,h-680,so-5",

    tracks: [
      {
        kind: "chapters",
        src: "/chapters.vtt",
        srclang: "en",
        label: "Chapters",
        default: true,
      },
      // {
      //   kind: "captions",
      //   src: "/english.vtt",
      //   srclang: "en",
      //   label: "English",
      //   default: true,
      // },
      // {
      //   kind: "captions",
      //   src: "/hindi.vtt",
      //   srclang: "hi",
      //   label: "Hindi",
      //   default: true,
      // },
    ],
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
    </div>
  );
};

export default VideoJSPlayer;
