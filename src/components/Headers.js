import styled from 'styled-components'
import { colors } from '../constants/styles'

const MainHeader = styled.h1`
  font-size: 6em;
  position: fixed;
  z-index: 2;
  top: 0;
  color: ${colors.fontColor};
`

export {
  MainHeader
}