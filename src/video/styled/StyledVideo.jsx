import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;
  height: 0%;
  padding-bottom: 50%;
  position: relative;
  overflow: hidden;
  box-sizing:border-box;

  @media (min-width: 992px){
    width: 66.66%;
    padding-bottom: 33.33%;
    position: relative;
  }
`;

export default VideoContainer;