import styled from 'styled-components'
import { getThemeAccessor } from './utils/utils'

const MainHeader = styled.h1`
  font-size: 5.5em;
  line-height: 1em;
  font-weight: 600;
  color: ${getThemeAccessor('fontColor')};
  /* text-shadow: -6px 0 0 ${getThemeAccessor('iconFill')}; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin-top: 12px;
`

export {
  MainHeader
}