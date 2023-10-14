import styled from 'styled-components';
import { theme } from '../Utils';

let HeaderContainer = styled.div`
  /* cursor: pointer; */
  font-size: 1em;
  background-color: ${theme('cardFill')};
  border: 7px solid ${theme('cardStroke')};
  /* border-radius: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: ${theme('boxShadows')};
  /* background-color: ${theme('background')}; */

  .theme-toggle{
    margin: 0 0 0 20px;
    
  }

  .inner-line{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* border-bottom: 8px solid ${theme('cardStroke')}; */
  }

  .inner-line:first-of-type{
    padding: 20px 35px 20px 35px;
    border-bottom: 3px solid ${theme('separatorFill')};
  }

  .inner-line:last-of-type{
    padding: 20px 40px 20px 40px;
    color: ${theme('fontColor')};
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
`;

export default HeaderContainer;