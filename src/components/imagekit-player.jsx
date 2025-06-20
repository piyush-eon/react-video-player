import React from "react";
import { Video, ImageKitProvider } from "@imagekit/react";

const ImageKitBasicPlayer = () => {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/roadsidecoder">
      <div style={{ margin: "20px 0" }}>
        <h2>ImageKit Basic Video Player</h2>

        <Video
          src="/yt/example.mp4"
          controls
          width={800}
          height={450}
          transformation={[{ quality: 80 }, { format: "auto" }]}
          poster="/yt/example.mp4/ik-thumbnail.jpg?tr=w-800,h-450"
        />
      </div>
    </ImageKitProvider>
  );
};

export default ImageKitBasicPlayer;
