import React from 'react';
import ListItem from '../components/ListItem';

const withListItem = Wrapper => ({video, ...props}) =>{
  return (
    <Wrapper {...props}>
      <ListItem {...video} />
    </Wrapper>
  );
};

export default withListItem;