const VideoPlayer = ({}) => {
    let player;
    function onYouTubeIframeAPIReady(){
        player = new YT.Player('player',{
            height: '390',
            width: '640',
            videoID: '',
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange' : onPlayerStateChange
            }
        });
    }
    return ( 
<iframe id="player" type= "text/html" width={640} height = {390}
src= "http://www.youtube.com/embed/M71c1UVf-VE?enablejsapi=1&origin=http://example.com"  >
</iframe> );

    
}
 
export default VideoPlayer;