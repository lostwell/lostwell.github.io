import styled from 'styled-components';
import { theme } from '../Utils';

let AppContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 0;
  
  background-color: ${theme('background')};
  background-image: ${theme('backgroundGradient')};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default AppContainer;