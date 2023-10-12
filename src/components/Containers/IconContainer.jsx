import styled from 'styled-components';
import { theme } from '../Utils';
import media from './media/IconContainerMedia';

let IconContainer = styled.span`
  cursor: pointer;
  /* padding: 10px 12px; */
  border: 3.5px solid ${theme('cardStroke')};
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme('cardFill')};
  padding: 8px 9px;

  position: fixed;
  top: 1.5em;

  &.disabled, &.disabled > *{
    cursor: wait;
  }
`;

IconContainer = media(IconContainer);

export default IconContainer;