import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HLine from '../styled/HLine';

const StyledLink = styled(Link)`
  position: relative;
  color: ${props=>props.theme.color};
  text-decoration: none;

  :hover{
    color: ${props=>props.theme.colorHover};
    text-decoration: none;
  }
`;

const ListItem = ({num, id, title, video, duration})=>{
  return(
    <StyledLink to={`/${id}`}>
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
            <h5 className="mt-2">
              { title }
            </h5>
            <p className="my-0">
              Author
            </p>
            <p className="my-0">
              { duration }
            </p>
        </div>
      </div>
      <HLine />
    </StyledLink>
  );
};

export default ListItem;