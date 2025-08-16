import styled from 'styled-components';
import { theme } from './Utils';

const TimelineContainer = styled.div`
  width: 100%;
  height: 'fit-content';
  padding: 50px 20px;
  border-radius: 20px;
  background-color: ${theme('highlightFill')};
  backdrop-filter: ${theme('highlightBackdropBlur')};
  margin-top: 30px;
  box-shadow: ${theme('boxShadowContainer')};

  & .details{
    margin-left: 20px;
    margin-bottom: 30px;
    color: ${theme('progressBar')};

    li {
      padding: 5px 0;
      font-size: 1em;
      
      @media (max-width: 500px) {
          font-size: 0.8em;
      }
    }
  }

  label {
    background-color: ${theme('accentColor')};
    outline: 5px solid ${theme('fontColor')};
  }

  p {
    background-color: ${theme('headerColor')};
    color: ${theme('accentColor')};
    margin-bottom: 40px;
    font-size: 1em;
    font-family: 'Staatlitches';
  }

  li {
    font-family: 'Expletus Sans';
  }
  
  div > ul::before{
    background-color: ${theme('fontColor')};
  }

  h3 {
    font-family: 'Staatlitches';
  }
  
  @media (max-width: 1230px) {
    padding: 50px 20px;

    & h3 {
      font-size: 1.7em;
    }

    & h4 {
      font-size: 1.2em;
    }
  }

  @media (max-width: 1000px) {
    padding: 40px 10px;

    & h3 {
      font-size: 1.5em;
    }

    & h4 {
      font-size: 1em;
    }
  }

  @media (max-width: 500px) {
    padding: 30px 0;

    & h3 {
      font-size: 1.5em;
    }

    & h4 {
      font-size: 1em;
    }
  }

  @media (max-width: 380px) {
    padding: 20px 0;

    & h3 {
      font-size: 1.5em;
    }

    & h4 {
      font-size: 1em;
    }
  }

  @media (max-width: 340px) {   
    padding: 20px 0;

    & h3 {
      font-size: 1.3em;
    }
    & h4 {
      font-size: 0.8em;
    }
  }
`;

export default TimelineContainer;