import React from 'react';

import HLine from '../styled/HLine';

const ListItem = ()=>{
  return(
    <>
      <div className="row w-100 p-3 align-items-stretch mx-auto">
        <div className="col-4 p-2">
          <div className="w-100 h-100 position-relative px-0" 
            style={{
              paddingBottom: '100%'
            }}
          >
            <img src="./" className="w-100 h-100 position-absolute" alt=""/>
          </div>
        </div>
        <div className="col-8 p-2">
            <h5>
              Item
            </h5>
        </div>
      </div>
      <HLine />
    </>
  );
};

export default ListItem;