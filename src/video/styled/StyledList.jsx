import styled from 'styled-components';

const StyledList = styled.div`
  width: 100%;
  height: 0%;
  padding-bottom: calc(100vh - 50% - 56px);
  background-color: #212121;
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 992px){
    width: 33.33%;
    height: 0%;
    padding-bottom: calc(100vh - 56px);
  }
`;

export default StyledList;