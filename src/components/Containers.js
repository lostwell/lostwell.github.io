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
  background-color: ${getThemeAccessor('cardFill')};
  cursor: pointer;
  border: 7px solid ${getThemeAccessor('cardStroke')};
  /* border-radius: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 25%;
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
    /* border-bottom: 8px solid ${getThemeAccessor('cardStroke')}; */
  }

  .inner-line:first-of-type{
    padding: 25px 35px 10px 35px;
    border-bottom: 3px solid ${getThemeAccessor('separatorFill')};
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

  
  @media (min-width: 0px) and (max-width: 321px){
    transform: scale(0.35);
    &:hover{
      transform: scale(0.45);
    }
  }

  @media (min-width: 321px) and (max-width: 426px) {
    transform: scale(0.45);
    &:hover{
      transform: scale(0.55);
    }
  }

  @media (min-width: 426px) and (max-width: 767px) {
    transform: scale(0.55);
    &:hover{
      transform: scale(0.65);
    }
  }

  @media (min-width: 767px) and(max-width: 1023px) {
    transform: scale(0.65);
    &:hover{
      transform: scale(0.75);
    }
  }
`

export {
  MainContainer,
  IconContainer,
  HeaderContainer,
}