import styled from 'styled-components';
import { theme } from '../Utils';

const ContentPageHeader = styled.div`
  width: 100%;
  height: 'fit-content';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  & h2 {
    font-family: 'Lobster';
    color: ${theme('headerColor')};
    text-shadow: 3px 3px 0 ${theme('accentColor')};
    font-size: 3.5em;
    margin-bottom: 0;
    white-space: nowrap;
  }

  & h3 {
    font-family: 'Staatlitches';
    color: ${theme('fontColor')};
    font-size: 1.2em;
    line-height: 1.2em;
    margin-bottom: 20px;
    letter-spacing: 20px;
    text-indent: 5px;
    background-color: ${theme('highlightFill')};
    backdrop-filter: ${theme('highlightBackdropBlur')};
    border-radius: 50px;
    padding: 5px 5px 5px 20px;
    box-shadow: ${theme('boxShadowContainer')};
    width: fit-content;
    white-space: nowrap;
  }

  @media (max-width: 1230px) {
    justify-content: center;
    align-items: flex-start;

    & h2 {
      font-size: 3em;
    }

    & h3 {
      font-size: 1em;
      letter-spacing: 20px;
      padding: 5px 10px 5px 10px;
      text-align: center;
    }
  }

  @media (max-width: 991px) {
    justify-content: center;
    align-items: center;
    text-align: center;

    & h2 {
      font-size: 2.8em;
      text-shadow: 2px 2px 0 ${theme('accentColor')};
      margin-bottom: 5px;
    }
    & h3 {
      font-size: 1.2em;
      letter-spacing: 15px;
      margin-bottom: 30px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    & h2 {
      font-size: 2.6em;
    }
    & h3 {
      font-size: 1em;
      letter-spacing: 12px;
    }
  }

  @media (max-width: 560px) {
    margin-bottom: 40px;
    
    & h2 {
      font-size: 2em;
    }
    & h3 {
      font-size: 1em;
      letter-spacing: 12px;
      padding: 5px 10px;
    }
  }

  @media (max-width: 380px) {
    
    & h2 {
      font-size: 1.8em;
    }
    & h3 {
      font-size: 0.9em;
      letter-spacing: 12px;
      padding: 3px 5px;
    }
  }

  @media (max-width: 340px) {
    
    & h2 {
      font-size: 1.6em;
    }
    & h3 {
      font-size: 0.8em;
      letter-spacing: 12px;
      padding: 3px 5px;
    }
  }
`;

export default ContentPageHeader;