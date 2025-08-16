import styled from 'styled-components';
import media from './media/HeaderWrapperMedia';

let HeaderWrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  padding: 5px;
`;

HeaderWrapper = media(HeaderWrapper);

export default HeaderWrapper;