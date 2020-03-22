import styled from 'styled-components';

const StyledList = styled.div`
  width: 100%;
  height: 0%;
  padding: 0;
  margin: 0;
  padding-bottom: calc(100vh - 50% - 56px);
  position: relative;
  background-color: #212121;
  box-sizing:border-box;
  /* width: 100vw;
  max-width: 100%;
  height: 72vh;
  overflow-Y: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: #212121; */


  @media (min-width: 992px){
    width: 33.33%;
    height: 0%;
    padding-bottom: calc(100vh - 56px);
  }

  ::-webkit-scrollbar{
    width: 5px;
  }

  ::-webkit-scrollbar-track{
    background: transparent;
  }

  ::-webkit-scrollbar-thumb{
    background: #888;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover{
    background: #F50057;
  }
`;

export default StyledList;