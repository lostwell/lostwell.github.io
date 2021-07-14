import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, toggleTheme } from './redux/reducers/theme/themeSlice'

import { MainContainer, HeaderContainer } from './components/Containers'
import { MainHeader } from './components/Headers'
import ThemeToggle from './components/ThemeToggle';
import Particles from './components/Particles';

function App() {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch();

  return (
    <MainContainer className="main-container" theme={theme}>
      <Particles 
        style={{ position: "fixed", zIndex: -1, top: "0", left: "0" }}
        className={"test-canvas"}
      />
      <HeaderContainer theme={theme} onClick={() => {dispatch(toggleTheme())}}>
        <div className="inner-line">
          <MainHeader theme={theme}>Lostwell</MainHeader>
          <ThemeToggle />
        </div>
        <div className="inner-line">
         Louel Lagasca | louellagasca@gmail.com | +63 933 826 6165
        </div>
      </HeaderContainer>
    </MainContainer>
  );
}

export default App;
