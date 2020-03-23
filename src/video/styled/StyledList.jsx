import styled from 'styled-components';

const StyledList = styled.div`
  width: 100%;
  height: 0%;
  padding-bottom: calc(100vh - 50% - 57px);
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 992px){
    width: 33.33%;
    height: 0%;
    padding-bottom: calc(100vh - 57px);
  }
`;

export default StyledList;