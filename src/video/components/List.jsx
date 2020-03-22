import React from 'react';

import ListItem from './ListItem';
import StyledList from '../styled/StyledList';

const List = ()=>{
  return(
    <div className="row w-100 p-0 mx-auto">
      <div className="col-12 p-2" 
        style={{
          backgroundColor: '#212121'
        }}
      >
        <h3 className="text-white h4">List item</h3>
        <h4 className="text-white h6 font-weeight-ligther">list</h4>
      </div>
      <StyledList>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />

      </StyledList>
    </div>
  );
};

export default List;