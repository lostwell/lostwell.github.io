import styled from 'styled-components'
import { colors } from '../constants/styles'

const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  z-index: 0;
  
  background-color: ${colors.background};
`

export {
  MainContainer
}