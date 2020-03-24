import React from 'react';

const Player = ({ active: { video } })=>{
  console.log(video)
  return(
      <video src={video} className="position-absolute w-100 h-100 bg-dark" style={{ top: 0, left:0}} controls>

      </video>
  );
};

export default Player;