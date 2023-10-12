import styled from 'styled-components';

const media = (component) => styled(component)`
  @media (min-width: 0px) and (max-width: 321px){
  transform: scale(0.45);
  &:hover{
      transform: scale(0.5);
  }
  }

  @media (min-width: 321px) and (max-width: 426px) {
  transform: scale(0.6);
  &:hover{
      transform: scale(0.65);
  }
  }

  @media (min-width: 426px) and (max-width: 767px) {
  transform: scale(0.7);
  &:hover{
      transform: scale(0.75);
  }
  }

  @media (min-width: 767px) and(max-width: 1023px) {
  transform: scale(0.8);
  &:hover{
      transform: scale(0.85);
  }
  }
`;

export default media;