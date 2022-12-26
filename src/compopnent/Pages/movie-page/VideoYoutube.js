import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
const VideoYoutube = ({videoKey}) => {

    const opts = {
        height: '200',
        width: '300',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    return<YouTube videoId={videoKey} opts={opts}  />
};

export default VideoYoutube;