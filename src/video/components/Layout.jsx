import React from 'react';

import ListItem from './ListItem';
import VideoContainer from '../styled/StyledVideo';
import StyledList from '../styled/StyledList';
import ListHeader from '../components/ListHeader';
import StyledPlayList from '../styled/StyledPlayList';

const Layout = ({children})=>{
  return(
    <div className="row w-100 m-0 align-items-start" style={{height: 'calc(100vh - 57px)', maxHeight: '100%'}}>
      <VideoContainer className="col-12 col-lg-8">
        { children }
      </VideoContainer>
      <StyledList className="col-12 col-lg-4 position-relative m-0 px-0">
        <ListHeader />
        <StyledPlayList className="w-100 position-absolute overflow-auto">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </StyledPlayList>
      </StyledList>
    </div>
  );
}

export default Layout;