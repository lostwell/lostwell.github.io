import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

import ThemeToggle from "./ThemeToggle";
import Logo from './Logo';
import { themeValue } from './Utils';
import { selectTheme } from '../redux/reducers/theme/themeSlice';

const NavbarComponent = ({onToggleClick}) => {
  const theme = useSelector(selectTheme);
  const color = themeValue(theme, 'fontColor');
  const cardFill = themeValue(theme, 'cardFill');
  const cardFillOpaque = themeValue(theme, 'cardFillOpaque');
  const boxShadows = themeValue(theme, 'boxShadows');
  const cardStroke = themeValue(theme, 'cardStroke');
  const accentColor = themeValue(theme, 'accentColor');

  const NavbarStyled = styled(Navbar)`
    background-color: ${cardFill};
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    backdrop-filter: blur(5px);
    box-shadow: ${boxShadows};
    ${cardStroke !== 'transparent' ? `border-bottom: 3px solid ${cardStroke}`: ''};
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
    color: ${color};
    margin: 5px 50px 0 0;
  `;

  const Link = styled(Nav.Link)`
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${color};

    &:focus{
      color: ${color};
      text-decoration: underline ${accentColor} solid 2px;
    }

    &:hover{
      color: ${color};
      text-decoration: underline ${accentColor} solid 2px;
    }
  `;

  const Controls = styled(Nav)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 5px 0 0 0;

    @media (max-width: 992px){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${cardFillOpaque};
      padding: 20px;
      backdrop-filter: blur(5px);
      box-shadow: ${boxShadows};
    }
  `;

  return (
    <NavbarStyled data-bs-theme={theme} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Brand>
            <span>Lostwell</span>
            <Logo style={{margin: '-5px 0 0 10px', width: '35px', height: '35px'}}/>
          </Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Controls>
            <Link href="/overview">Overview</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/education">Education</Link>
            <Link><ThemeToggle onClick={onToggleClick}/></Link>
          </Controls>
        </Navbar.Collapse>
      </Container>
    </NavbarStyled>
  );
};

export default NavbarComponent;