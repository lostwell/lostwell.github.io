import styled from 'styled-components';
import { theme } from '../Utils';
import media from './media/MainContainerMedia';

let MainContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 0;
  
  background-color: ${theme('background')};
  background-image: ${theme('backgroundImage')};
  background-position: ${theme('backgroundPosition')};
  background-size: ${theme('backgroundSize')};
  background-repeat: no-repeat;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  transform-origin: 50% 100%;
  overflow: hidden;
`;

MainContainer = media(MainContainer);

export default MainContainer;