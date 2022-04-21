import React from 'react'

const VideoPlayer = ( {selectedVideoId} ) => {
    
 console.log({selectedVideoId})





//  var player;
//   function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player'), {
//         events: {
//           'onReady': onPlayerReady,
//           'onStateChange': onPlayerStateChange
//         }
//     };
//   }
//     function onPlayerReady(event) {
//         event.target.playVideo();
//   }
//     function onPlayerStateChange(event){
//         console.log('state changed')
//     }
  return (
    <div>
    <iframe
      id="player"
      type="text/html"
      width="640"
      height="390"
      frameBorder="0"
      src={`http://www.youtube.com/embed/${selectedVideoId}?enablejsapi=1`}
    ></iframe>
 </div>
    

    
  )}
export default VideoPlayer;

<script></script>
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

