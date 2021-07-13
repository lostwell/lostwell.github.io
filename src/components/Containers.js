import styled from 'styled-components'
import { getThemeAccessor } from './utils/utils'

const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 0;
  
  background-color: ${getThemeAccessor('background')};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const IconContainer = styled.span`
  cursor: pointer;
  /* padding: 10px 12px; */
  /* border: 7px solid ${getThemeAccessor('iconStroke')}; */
  border-radius: 100%;
  display: block;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover{
    transform: rotate(360deg);
  }
`

const HeaderContainer = styled.div`
  cursor: pointer;
  margin: auto 0px;
  border: 7px solid ${getThemeAccessor('borderStroke')};
  /* border-radius: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  /* background-color: ${getThemeAccessor('background')}; */

  .theme-toggle{
    margin: 0 0 0 20px;
    
  }

  .inner-line{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* border-bottom: 8px solid ${getThemeAccessor('borderStroke')}; */
  }

  .inner-line:first-of-type{
    padding: 25px 35px 10px 35px;
    border-bottom: 3px solid ${getThemeAccessor('borderStroke')};
  }

  .inner-line:last-of-type{
    padding: 20px 35px 20px 35px;
    color: ${getThemeAccessor('fontColor')};
    font-weight: bold;
  }

  &:hover{
    /* background-color: ${getThemeAccessor('background')}; */
    /* box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.3); */
    transform: scale(1.2);

    .theme-toggle{
      transform: rotate(360deg);
    }
  }
`

export {
  MainContainer,
  IconContainer,
  HeaderContainer,
}