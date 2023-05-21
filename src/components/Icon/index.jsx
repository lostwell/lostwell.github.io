import FeatherIcon from 'feather-icons-react';
import { useSelector } from 'react-redux';

import { themeValue } from '../Utils';
import { selectTheme } from '../../redux/reducers/theme/themeSlice';

const Icon = (props) => {
  const theme = useSelector(selectTheme)
  const StyledIcon = FeatherIcon

  const newProps = {
    size: 24,
    fill: themeValue(theme, 'iconFill'),
    stroke: themeValue(theme, 'iconStroke'),
    ...props,
  }

  return <StyledIcon {...newProps}/>
}

export default Icon;