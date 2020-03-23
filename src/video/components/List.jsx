//// NO REQUIRED

import React from 'react';

import ListItem from './ListItem';
import StyledList from '../styled/StyledList';
import Div from '../styled/StyledDiv';

const List = ()=>{
  return(
    <div className="row w-100 p-0 mx-auto">
      <Div className="col-12 p-2">
        <h3 className="text-white h4">List item</h3>
        <h4 className="text-white h6 font-weeight-ligther">list</h4>
      </Div>
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