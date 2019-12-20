import React from 'react';
import Video from 'react-native-video';


const Player: Function = (props: any) => {
  return (
    <Video
      source={{
        uri: 'https://lsqvc1us-lh.akamaihd.net/i/lsqvc1us_01@809353/master.m3u8'
      }}
      
      style={props.style}
    />
  );
};

export default Player;