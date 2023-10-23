import styled from 'styled-components';
import media from './media/HeaderWrapperMedia';

let HeaderWrapper = styled.div`
  position: fixed;
  top: 20%;
  display: flex;
  padding: 5px;
`;

HeaderWrapper = media(HeaderWrapper);

export default HeaderWrapper;