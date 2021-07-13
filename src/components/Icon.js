import FeatherIcon from 'feather-icons-react'
import { getThemeValue } from './utils/utils'
import { useSelector } from 'react-redux'
import { selectTheme } from '../redux/reducers/theme/themeSlice'
import styled from 'styled-components'

const Icon = (props) => {
  const theme = useSelector(selectTheme)
  const StyledIcon = styled(FeatherIcon)`
    cursor: pointer;
    transition: 0.4s;
  `

  const newProps = {
    size: 24,
    fill: getThemeValue(theme, 'iconFill'),
    stroke: getThemeValue(theme, 'iconStroke'),
    ...props,
  }

  return <StyledIcon {...newProps}/>
}

export default Icon