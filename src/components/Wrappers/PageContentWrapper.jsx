import styled from 'styled-components';
import media from './media/PageContentWrapperMedia';
import { theme } from '../Utils';

let PageContentWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  display: flex;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid ${theme('wrapperStroke')};
`;

PageContentWrapper = media(PageContentWrapper);

export default PageContentWrapper;