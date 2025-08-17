import styled from 'styled-components';
import { theme } from '../../Utils';

const media = (component) => styled(component)`
  @media (min-width: 0px) and (max-width: 320px) {
    &::after {
      background-position: ${theme('backgroundPositionSmall')};
      background-size: ${theme('backgroundSizeSmall')};
    }
  }

  @media (min-width: 321px) and (max-width: 500px) {
    &::after {
      background-position: ${theme('backgroundPositionMobile')};
      background-size: ${theme('backgroundSizeMobile')};
    }
  }

  @media (min-width: 501px) and (max-width: 990px) {
    &::after {
      background-position: ${theme('backgroundPositionTablet')};
      background-size: ${theme('backgroundSizeTablet')};
    }
  }

  @media (min-width: 991px) and (max-width: 1440px) {
    &::after {
      background-position: ${theme('backgroundPositionLaptop')};
      background-size: ${theme('backgroundSizeLaptop')};
    }
  }
`;

export default media;