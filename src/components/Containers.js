import styled from 'styled-components'
import { getThemeAccessor } from './utils/utils'

const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 0;
  
  background-color: ${getThemeAccessor('background')};
  background-image: ${getThemeAccessor('backgroundImage')};
  background-position: ${getThemeAccessor('backgroundPosition')};
  background-size: ${getThemeAccessor('backgroundSize')};
  background-repeat: no-repeat;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  transform-origin: 50% 100%;

  @media (min-width: 0px) and (max-width: 321px){
    background-position: ${getThemeAccessor('backgroundPositionSmall')};
    background-size: ${getThemeAccessor('backgroundSizeSmall')};
  }

  @media (min-width: 321px) and (max-width: 426px){
    background-position: ${getThemeAccessor('backgroundPositionMobile')};
    background-size: ${getThemeAccessor('backgroundSizeMobile')};
  }

  @media (min-width: 426px) and (max-width: 769px){
    background-position: ${getThemeAccessor('backgroundPositionTablet')};
    background-size: ${getThemeAccessor('backgroundSizeTablet')};
  }

  @media (min-width: 769px) and (max-width: 1024px){
    background-position: ${getThemeAccessor('backgroundPositionLaptop')};
    background-size: ${getThemeAccessor('backgroundSizeLaptop')};
  }
`

const IconContainer = styled.span`
  cursor: pointer;
  /* padding: 10px 12px; */
  border: 3.5px solid ${getThemeAccessor('cardStroke')};
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${getThemeAccessor('cardFill')};
  padding: 8px 9px;

  position: fixed;
  top: 1.5em;

  &.disabled, &.disabled > *{
    cursor: wait;
  }

  @media (min-width: 0px) and (max-width: 321px){
    top: 0.8em;
    transform: scale(0.6);
  }

  @media (min-width: 321px) and (max-width: 426px) {
    top: 1em;
    transform: scale(0.8);
  }

  @media (min-width: 426px) and (max-width: 767px) {
    top: 1em;
    transform: scale(1);
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    top: 1.5em;
    transform: scale(1);
  }

  @media (min-width: 1023px) {
    top: 1.5em;
    right: 1.5em;
    transform: scale(1);
  }
`

const HeaderContainer = styled.div`
  /* cursor: pointer; */
  font-size: 1em;
  background-color: ${getThemeAccessor('cardFill')};
  border: 7px solid ${getThemeAccessor('cardStroke')};
  /* border-radius: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  overflow: hidden;
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
    /* border-bottom: 8px solid ${getThemeAccessor('cardStroke')}; */
  }

  .inner-line:first-of-type{
    padding: 18px 35px 19px 35px;
    border-bottom: 3px solid ${getThemeAccessor('separatorFill')};
  }

  .inner-line:last-of-type{
    padding: 20px 40px 20px 40px;
    color: ${getThemeAccessor('fontColor')};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    div{
      display: flex;
      flex-direction: row;
      align-items: center;

      svg{
        margin-right: 6px;
      }
    }
  }
`

export {
  MainContainer,
  IconContainer,
  HeaderContainer,
}