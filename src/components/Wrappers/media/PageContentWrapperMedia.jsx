import styled from 'styled-components';
import { theme } from '../../Utils';

const media = (component) => styled(component)`
  @media (min-width: 0px) and (max-width: 321px){
    width: 100%;
    border-radius: 0;
    border: none;
    border-top: 2px solid ${theme('wrapperStroke')};
    border-bottom: 2px solid ${theme('wrapperStroke')};
    padding: 5px 0;
  }

  @media (min-width: 321px) and (max-width: 426px) {
    width: 100%;
    border-radius: 0;
    border: none;
    border-top: 2px solid ${theme('wrapperStroke')};
    border-bottom: 2px solid ${theme('wrapperStroke')};
    padding: 5px 0;
  }

  @media (min-width: 426px) and (max-width: 767px) {
    width: 90%;
  }

  @media (min-width: 767px) and (max-width: 1445px) {
    width: 90%;
  }

  @media (min-width: 1800px) {
    width: 70%;
  }
`;

export default media;