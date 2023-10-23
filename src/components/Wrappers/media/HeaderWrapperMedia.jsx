import styled from 'styled-components';

const media = (component) => styled(component)`
  @media (min-width: 0px) and (max-width: 321px){
    transform: scale(0.6);
  }

  @media (min-width: 321px) and (max-width: 426px) {
    transform: scale(0.7);
  }

  @media (min-width: 426px) and (max-width: 767px) {
    transform: scale(0.8);
  }

  @media (min-width: 767px) and(max-width: 1023px) {
    transform: scale(0.9);
  }
`;

export default media;