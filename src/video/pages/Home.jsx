import React, { useState, useRef } from 'react';
import { useSprings, animated } from 'react-spring';

import ListItem from '../components/ListItem';
import VideoContainer from '../styled/StyledVideo';
import Player from '../components/Player';
import StyledList from '../styled/StyledList';
import ListHeader from '../components/ListHeader';
import StyledPlayList from '../styled/StyledPlayList';

const Home = ({ match, history, location })=>{
  const fn = (order, down, originalIndex, curIndex, y) => index => 
  down && index === originalIndex
    ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' }
    : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false };
    
  const videos = JSON.parse(document.getElementById('videos').value);
  const [ state, setState ] = useState({
    playList: videos.playlist,
    activeVideo: videos.playlist[0],
    autoplay: false
  });

  const order = useRef(videos.playlist.map((_, index)=>index));
  const [ springs, setSprings ] = useSprings(order.current.length, fn(order.current));

  console.log({match, history, location, videos});

  return(
    <div className="row w-100 m-0 align-items-start" style={{height: 'calc(100vh - 57px)', maxHeight: '100%'}}>
      <VideoContainer className="col-12 col-lg-8">
        <Player active={ state.activeVideo }/>
      </VideoContainer>
      <StyledList className="col-12 col-lg-4 position-relative m-0 px-0">
        <ListHeader />
        <StyledPlayList className="w-100 position-absolute overflow-auto">
            {
              springs.map((_, i) =>{
                return (
                  <animated.div key={i}>
                    <ListItem 
                      {...videos.playlist[i]}
                    />
                  </animated.div>
                )
              })
            }
        </StyledPlayList>
      </StyledList>
    </div>
  );
}

export default Home;