import styled from 'styled-components';
import { theme } from '../Utils';
import media from './media/IconContainerMedia';

let IconContainer = styled.span`
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme('highlightFill')};
  padding: 8px 8px;
  width: fit-content;
  height: fit-content;
  box-shadow: ${theme('boxShadowContainer')};
  transition: scale 0.25s;

  &:hover {
    scale: 1.15;
  }

  &.disabled, &.disabled > *{
    cursor: wait;
  }
`;

IconContainer = media(IconContainer);

export default IconContainer;