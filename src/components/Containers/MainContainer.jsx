import styled from 'styled-components';
import { theme } from '../Utils';
import media from './media/MainContainerMedia';

let MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  transform-origin: 50% 100%;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    background-image: ${theme('backgroundTexture')};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    filter: ${theme('backgroundTextureFilter')};
    opacity: ${theme('backgroundTextureOpacity')};
    pointer-events: none;

    /* Mask to fade out edges */
    mask-image: radial-gradient(60% 60% at 50% 50%, black 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(60% 60% at 50% 50%, black 70%, transparent 100%);
    mask-size: cover;
    mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    -webkit-mask-repeat: no-repeat;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image: ${theme('backgroundImage')};
    background-position: ${theme('backgroundPosition')};
    background-size: ${theme('backgroundSize')};
    background-repeat: no-repeat;
    opacity: ${theme('backgroundOpacity')};
    filter: ${theme('backgroundFilter')};
    pointer-events: none;
  }
`;

MainContainer = media(MainContainer);

export default MainContainer;