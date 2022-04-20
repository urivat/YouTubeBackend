import { useEffect } from "react";

const VideoPlayer = ({ selectedVideoId }) => {


  return (
    <iframe
      id="player"
      type="text/html"
      width="640"
      height="390"
      frameBorder="0"
      src={`http://www.youtube.com/embed/${selectedVideoId}?enablejsapi=1&origin=http://example.com`}
    ></iframe>
  );
};

export default VideoPlayer;
