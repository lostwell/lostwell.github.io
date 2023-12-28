import styled from 'styled-components';
import { theme } from '../Utils';
import media from './media/IconContainerMedia';

let IconContainer = styled.span`
  cursor: pointer;
  /* padding: 10px 12px; */
  border: 2px solid ${theme('cardStroke')};
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme('highlightFill')};
  padding: 6px 6px;
  width: fit-content;
  height: fit-content;

  &.disabled, &.disabled > *{
    cursor: wait;
  }
`;

IconContainer = media(IconContainer);

export default IconContainer;