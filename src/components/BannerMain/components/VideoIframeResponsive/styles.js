import styled from 'styled-components';

export const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding-top: 56.26%; 
  width: 100%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;