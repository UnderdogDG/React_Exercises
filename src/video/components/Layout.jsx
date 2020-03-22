import React from 'react';

import ListItem from './ListItem';
import VideoContainer from '../styled/StyledVideo';
import StyledList from '../styled/StyledList';

const Layout = ({children})=>{
  return(
    <div className="row w-100 m-0 align-items-start" style={{height: 'calc(100vh - 56px)', maxHeight: '100%'}}>
      <VideoContainer>
        { children }
      </VideoContainer>
      <StyledList>
        <div className="w-100 h-100 position-absolute" style={{ overflowY: 'auto'}}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />

        </div>
      </StyledList>
    </div>
  );
}

export default Layout;