import styled from 'styled-components';

const StyledPlayList = styled.div`
  height: calc(100% - 54px);
  top: 53px;
  left: 0;

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

export default StyledPlayList;