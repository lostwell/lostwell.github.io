import styled from 'styled-components';
import { theme } from '../Utils';

let PageContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  z-index: 0;
  overflow: hidden auto;
  top: 80px;

  scrollbar-color: ${theme('iconFill')} transparent;
  scrollbar-width: thin;
`;

export default PageContainer;