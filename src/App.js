import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, toggleTheme } from './redux/reducers/theme/themeSlice'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { MainPage } from './routes/MainPage';
import { MainContainer } from './components/Containers'
import ThemeToggle from './components/ThemeToggle';
import Particles from './components/Particles';

function App() {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch();

  return (
    <Router>
      <MainContainer className="main-container" theme={theme}>
        <Particles 
          style={{ position: "fixed", zIndex: -1, top: "0", left: "0" }}
          className={"test-canvas"}
        />
        { theme === 'light' && 
          <Particles 
            style={{ position: "fixed", zIndex: -1, top: "0", left: "0" }}
            className={"test-canvas"}
            config="spore"
          />
        }

        <Switch>
          <Route path="/">
            <MainPage theme={theme} />
          </Route>
        </Switch>

        <ThemeToggle onClick={() => {dispatch(toggleTheme())}}/>
      </MainContainer>
    </Router>
  );
}

export default App;
