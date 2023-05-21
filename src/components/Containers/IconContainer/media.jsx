import styled from 'styled-components';

const media = (component) => styled(component)`
  @media (min-width: 0px) and (max-width: 321px){
  top: 0.8em;
  transform: scale(0.6);
  }

  @media (min-width: 321px) and (max-width: 426px) {
  top: 1em;
  transform: scale(0.8);
  }

  @media (min-width: 426px) and (max-width: 767px) {
  top: 1em;
  transform: scale(1);
  }

  @media (min-width: 767px) and (max-width: 1023px) {
  top: 1.5em;
  transform: scale(1);
  }

  @media (min-width: 1023px) {
  top: 1.5em;
  right: 1.5em;
  transform: scale(1);
  }
`;

export default media;