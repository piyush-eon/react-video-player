import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

import "videojs-contrib-quality-levels";
import "videojs-http-source-selector";

const VideoJS = ({ options, onReady }) => {
  const playerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered", "video-js");
      videoRef.current.appendChild(videoElement);

      const player = videojs(videoElement, options, () => {
        videojs.log("Player is ready");
        onReady && onReady(player);
      });

      console.log(player);

      player.ready(() => {
        if (typeof player.httpSourceSelector === "function") {
          player.httpSourceSelector({ default: "auto" });
        }
      });

      playerRef.current = player;
    }
  }, [options, onReady]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;
