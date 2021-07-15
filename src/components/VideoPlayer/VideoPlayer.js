import React from "react";
import ReactPlayer from "react-player/youtube";
const VideoPlayer = () => {
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          modestbranding = "1"
          allowfullscreen = "0"
          url="https://www.youtube.com/watch?v=UOhSJImXSlg?"
          controls={false}
          loop="true"
          height="850px"
          width="100%"
          muted="true"
          playing="true"
          // playIcon="false"
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                disablekb: 1,
                controls: 0,
                playsinline: 1,
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default VideoPlayer;
