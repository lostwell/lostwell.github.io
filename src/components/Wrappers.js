import styled from 'styled-components'
import { getThemeAccessor } from './utils/utils'

const withNoPointerEvents = (component) =>{
  const ResultWrapper = styled(component)`
    pointer-events: none;
  `

  return (props) =>{
    return (
      <ResultWrapper {...props} />
    )
  }
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 20%;
  display: flex;
  /* border: 2px solid ${getThemeAccessor('wrapperStroke')};  */
  padding: 5px;

  /* &:hover{
    transform: scale(1.1);

    .theme-toggle{
      transform: rotate(360deg);
    }
  } */

  @media (min-width: 0px) and (max-width: 321px){
    transform: scale(0.45);
    &:hover{
      transform: scale(0.5);
    }
  }

  @media (min-width: 321px) and (max-width: 426px) {
    transform: scale(0.6);
    &:hover{
      transform: scale(0.65);
    }
  }

  @media (min-width: 426px) and (max-width: 767px) {
    transform: scale(0.7);
    &:hover{
      transform: scale(0.75);
    }
  }

  @media (min-width: 767px) and(max-width: 1023px) {
    transform: scale(0.8);
    &:hover{
      transform: scale(0.85);
    }
  }
`

export {
  withNoPointerEvents,
  HeaderWrapper,
}