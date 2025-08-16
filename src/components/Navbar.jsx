import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import ThemeToggle from "./ThemeToggle";
import Logo from './Logo';
import { theme as getTheme } from './Utils';
import { selectTheme } from '../redux/reducers/theme/themeSlice';

const NavbarComponent = ({onToggleClick}) => {
  const theme = useSelector(selectTheme);

  return (
    <NavbarStyled fixed="top" data-bs-theme={theme} theme={theme} expand="lg">
      <Container>
        <Navbar.Brand>
          <Home to="/">
              <Brand theme={theme} onClick={e => {
                const el = e.currentTarget;
                el.style.animation = 'click 0.4s ease-in-out forwards';
                el.addEventListener('animationend', function handler() {
                  el.style.animation = '';
                  el.removeEventListener('animationend', handler);
                });
              }}>
                <div id='lostwell-text'>Lostwell</div>
                <Logo id='lostwell-logo'/>
              </Brand>
          </Home>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Controls theme={theme}>
            <Route onClick={handleClick} theme={theme} className="nav-link" to="/overview"><LinkWrapper theme={theme}>OVERVIEW</LinkWrapper></Route>
            <Route onClick={handleClick} theme={theme} className="nav-link" to="/experience"><LinkWrapper theme={theme}>EXPERIENCE</LinkWrapper></Route>
            <Route onClick={handleClick} theme={theme} className="nav-link" to="/education"><LinkWrapper theme={theme}>EDUCATION</LinkWrapper></Route>
            <LinkWrapper theme={theme} className="nav-link"><ThemeToggle onClick={() => handleClick(onToggleClick)}/></LinkWrapper>
          </Controls>
        </Navbar.Collapse>
      </Container>
    </NavbarStyled>
  );
};

export default NavbarComponent;

const handleClick = (onClick) => {
  const navbar = document.querySelector('.navbar-toggler');
  const collapse = document.querySelector('.navbar-collapse');
  const page = document.getElementById('page-container');

  if (page) {
    page.scrollTop = 0;
  }

  if (collapse.classList.contains('show')) {
    navbar.click();
  }

  if (typeof onClick === 'function') {
    onClick();
  }
}

const NavbarStyled = styled(Navbar)`
  background-color: ${getTheme('cardFill')};
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  backdrop-filter: ${getTheme('backdropBlur')};
  -webkit-backdrop-filter: ${getTheme('backdropBlur')};
  box-shadow: ${getTheme('boxShadows')};
  border-bottom: 3px solid ${getTheme('cardStroke')};

  .navbar-toggler {
    background-color: ${getTheme('highlightFill')};
  }

  @media (max-width: 990px){
    & .navbar-nav{
      height: 90vh;
      margin-top: 12px;
      padding: 60px 0;

      a {
        height: 10vh;
        width: 100%;
        font-size: 1.5em;
        border-radius: 0;
        margin: 20px 0;
      }

      .theme-toggle{
        width: 80px;
        height: 80px;
        font-size: 2em;
        margin: 20px 0;
        background-color: ${getTheme('highlightFill')};
      }
    }
  }
`;

const Brand = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1.5em;
  color: ${getTheme('fontColor')};
  margin: 5px 50px 0 0;
  transition: scale 0.25s;

  @keyframes click {
    0%, 100% {
      scale: 1;
    }
    20% {
      scale: 0.95;
    }
    80% {
      scale: 1.05;
    }
  }
`;

const LinkWrapper = styled.span`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 4px 15px 2px 15px;
  font-size: 0.8em;
  line-height: 1em;
`;

const Controls = styled(Nav)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 5px 0 0 0;

  @media (max-width: 990px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${getTheme('highlightFill')};
    backdrop-filter: blur(20px);
    box-shadow: ${getTheme('boxShadowContainer')};
    border-radius: 20px;
  }
`;

const Route = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50px;
  text-decoration: none;
  color: ${getTheme('fontColor')};
  margin: 0 10px;
  overflow: hidden;
  transition: 
    scale 0.25s,
    color 0.25s,
    background-color 0.25s;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: ${getTheme('accentColor')};
    left: 12px;
    opacity: 0;
    border-radius: 10px;
    transition: opacity 0.25s;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: ${getTheme('accentColor')};
    right: 12px;
    opacity: 0;
    border-radius: 10px;
    transition: opacity 0.25s;
  }

  &:hover{
    scale: 1.15;
  }

  &.active{
    & span{
      color: ${getTheme('accentColor')};
    }
    background-color: ${getTheme('fontColor')};

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 990px){
    margin: 20px 0;

    &::before {
      width: 8px;
      height: 8px;
      left: 25%;
    }
    &::after {
      width: 8px;
      height: 8px;
      right: 25%;
    }
  }
`;

const Home = styled(Link)`
  text-decoration: none;

  & #lostwell-logo {
    margin: -5px 0 0 10px;
    width: 40px;
    height: 35px;

    @media (max-width: 575px){
      width: 25px;
      height: 25px;
    }
  }

  & #lostwell-text {
    font-size: 1em;

    @media (max-width: 575px){
      font-size: 0.85em;
      margin-left: 5px;
    }
  }
`;