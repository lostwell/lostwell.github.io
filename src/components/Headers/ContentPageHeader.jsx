import styled from 'styled-components';
import { theme } from '../Utils';

const ContentPageHeader = styled.div`
  width: 100%;
  height: 'fit-content';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & h2 {
    font-family: 'Lobster';
    color: ${theme('headerColor')};
    text-shadow: 3px 3px 0 ${theme('accentColor')};
    font-size: 3.5em;
    margin-bottom: 0;
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
  }

  @media (max-width: 1230px) {
    justify-content: center;
    align-items: flex-start;

    & h2 {
      font-size: 2.3em;
    }

    & h3 {
      font-size: 1em;
      letter-spacing: 10px;
      padding: 5px 10px 5px 18px;
    }
  }

  @media (max-width: 991px) {
    justify-content: center;
    align-items: center;

    & h2 {
      font-size: 2em;
      text-shadow: 2px 2px 0 ${theme('accentColor')};
    }
    & h3 {
      font-size: 1em;
      letter-spacing: 10px;
    }
  }

  @media (max-width: 560px) {
    justify-content: center;
    align-items: center;
    
    & h2 {
      font-size: 1.7em;
    }
    & h3 {
      font-size: 0.8em;
      letter-spacing: 10px;
      padding: 5px 10px;
    }
  }

  @media (max-width: 380px) {
    justify-content: center;
    align-items: center;
    
    & h2 {
      font-size: 1.5em;
    }
    & h3 {
      font-size: 0.8em;
      letter-spacing: 6px;
      padding: 3px 5px;
    }
  }

  @media (max-width: 340px) {
    justify-content: center;
    align-items: center;
    
    & h2 {
      font-size: 1.3em;
    }
    & h3 {
      font-size: 0.8em;
      letter-spacing: 6px;
      padding: 3px 5px;
    }
  }
`;

export default ContentPageHeader;