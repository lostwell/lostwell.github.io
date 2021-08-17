import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, toggleTheme } from './redux/reducers/theme/themeSlice'
import { selectToggleState, setToggleState } from './redux/reducers/theme/toggleStateSlice';
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
  const toggleState = useSelector(selectToggleState)
  const dispatch = useDispatch();
  const onToggleClick = ()=>{
    if(toggleState !== 'disabled'){
      dispatch(setToggleState('disabled'))
      dispatch(toggleTheme())
    }
  }

  return (
    <Router>
      <MainContainer className="main-container" theme={theme}>
        <Particles 
          style={{ position: "fixed", zIndex: -1, top: "0", left: "0", width: "100%", height: "100%" }}
          className={"test-canvas"}
        />
        { theme === 'light' && 
          <Particles 
            style={{ position: "fixed", zIndex: -1, top: "0", left: "0", width: "100%", height: "100%"  }}
            className={"test-canvas"}
            config="spore"
          />
        }

        <Switch>
          <Route path="/">
            <MainPage theme={theme} toggleState={toggleState}/>
          </Route>
        </Switch>

        <ThemeToggle onClick={onToggleClick}/>
      </MainContainer>
    </Router>
  );
}

export default App;
