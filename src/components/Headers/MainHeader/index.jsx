import styled from 'styled-components'
import { theme } from '../../Utils';

const MainHeader = styled.h1`
  font-size: 5.5em;
  line-height: 1em;
  font-weight: 600;
  color: ${theme('fontColor')};
  /* text-shadow: -6px 0 0 ${theme('iconFill')}; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin-top: 12px;
`

export default MainHeader;