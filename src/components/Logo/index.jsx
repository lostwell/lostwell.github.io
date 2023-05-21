import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { themeValue } from '../Utils';
import { selectTheme } from '../../redux/reducers/theme/themeSlice';

const Logo = (props) => {
  const theme = useSelector(selectTheme)
  const logo = themeValue(theme, 'logo')

  const StyledLogo = styled.div`
    width: 70px;
    height: 70px;
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
  `

  const newProps = {
    ...props,
  }

  return <StyledLogo {...newProps}/>
}

export default Logo;