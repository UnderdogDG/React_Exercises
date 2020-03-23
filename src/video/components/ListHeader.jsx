import React from 'react';

import Div from '../styled/StyledDiv';

const ListHeader = ()=>{
  return(
    <Div className="row w-100 mx-auto">
      <div className="col-12 py-2 px-3">
        <h3 className="h4">Play List</h3>
      </div>
    </Div>
  );
};

export default ListHeader;