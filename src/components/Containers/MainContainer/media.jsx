import styled from 'styled-components';
import { theme } from '../../Utils';

const media = (component) => styled(component)`
  @media (min-width: 0px) and (max-width: 321px){
  background-position: ${theme('backgroundPositionSmall')};
  background-size: ${theme('backgroundSizeSmall')};
  }

  @media (min-width: 321px) and (max-width: 426px){
  background-position: ${theme('backgroundPositionMobile')};
  background-size: ${theme('backgroundSizeMobile')};
  }

  @media (min-width: 426px) and (max-width: 769px){
  background-position: ${theme('backgroundPositionTablet')};
  background-size: ${theme('backgroundSizeTablet')};
  }

  @media (min-width: 769px) and (max-width: 1024px){
  background-position: ${theme('backgroundPositionLaptop')};
  background-size: ${theme('backgroundSizeLaptop')};
  }
`;

export default media;