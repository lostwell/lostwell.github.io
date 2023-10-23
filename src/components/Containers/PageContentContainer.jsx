import styled from 'styled-components';
import { theme } from '../Utils';

let PageContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 50px;
  min-height: 100vh;
  font-size: 1em;
  background-color: ${theme('cardFill')};
  border: 5px solid ${theme('cardStroke')};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  overflow: hidden;
  backdrop-filter: ${theme('backdropBlur')};
  -webkit-backdrop-filter: ${theme('backdropBlur')};
  box-shadow: ${theme('boxShadows')};
  color: ${theme('fontColor')};

  @media (max-width: 1250px) {
    padding: 0 40px;
  }

  @media (max-width: 990px) {
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    border-radius: 0;
    border: none;
    border-top: 5px solid ${theme('cardStroke')};
    border-bottom: 5px solid ${theme('cardStroke')};
    padding: 0;
  }
`;

export default PageContentContainer;