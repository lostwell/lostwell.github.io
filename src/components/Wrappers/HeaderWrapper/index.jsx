import styled from 'styled-components';
import { theme } from '../../Utils';
import media from './media';

let HeaderWrapper = styled.div`
  position: fixed;
  top: 20%;
  display: flex;
  /* border: 2px solid ${theme('wrapperStroke')};  */
  padding: 5px;

  /* &:hover{
    transform: scale(1.1);

    .theme-toggle{
      transform: rotate(360deg);
    }
  } */
`;

HeaderWrapper = media(HeaderWrapper);

export default HeaderWrapper;