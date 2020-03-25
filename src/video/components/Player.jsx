import React from 'react';

const Player = ({ active: { video } })=>{
  console.log(video);
  return(
    <iframe title="the title" className="position-absolute w-100 h-100 bg-dark" src={ video } frameBorder="0" allowFullScreen />
  );
};

export default Player;