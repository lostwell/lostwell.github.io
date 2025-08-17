import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { theme } from './Utils';
import { selectTheme } from '../redux/reducers/theme/themeSlice';

const Featured = (props) => {
  const theme = useSelector(selectTheme);

  const newProps = {
    theme,
    ...props,
  }

  return <FeaturedWrapper theme={theme}><StyledFeatured {...newProps}/></FeaturedWrapper>;
}

export default Featured;

const StyledFeatured = styled.div`
  top: 0px;
  width: 1048px;
  height: 600px;
  background-image: url(${(props) => theme(props.featured)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: ${theme('featureFilter')};
  display: block;
  position: relative;
  opacity: 0.95;

  @media (max-width: 1024px) {
    top: 20px;
    width: 798px;
    height: 569px;
  }

  @media (max-width: 800px) {
    width: 698px;
    height: 469px;
  }

  @media (max-width: 500px) {
    top: 100px;
    width: 588px;
    height: 359px;
  }

  @media (max-width: 380px) {
    width: 548px;
    height: 319px;
  }

  @media (max-width: 340px) {
    width: 528px;
    height: 299px;
  }
`;

const FeaturedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  border-radius: 0 0 40px 40px;
  /* background-color: ${theme('cardFill')}; */
`;