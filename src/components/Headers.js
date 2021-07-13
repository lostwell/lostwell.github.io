import styled from 'styled-components'
import { getThemeAccessor } from './utils/utils'

const MainHeader = styled.h1`
  font-size: 5.5em;
  line-height: 1em;
  font-weight: 600;
  color: ${getThemeAccessor('fontColor')};
  /* text-shadow: 0px 5px 0px ${getThemeAccessor('iconFill')}; */
`

export {
  MainHeader
}