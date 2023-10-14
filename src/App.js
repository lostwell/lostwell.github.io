import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Particles from './components/Particles';
import { MainContainer } from './components';
import { MainPage } from './routes';
import { AppContainer } from './components/Containers';
import { selectTheme, toggleTheme } from './redux/reducers/theme/themeSlice';
import { selectToggleState, setToggleState } from './redux/reducers/theme/toggleStateSlice';
import './App.css';

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
      <AppContainer>
        <MainContainer className="main-container" theme={theme}>
          <Particles 
            id="main-particles"
            width="100%"
            height="100%"
            style={{ position: "fixed", zIndex: -1, top: "0", left: "0"}}
            className={"test-canvas"}
          />
          { theme === 'light' && 
            <Particles 
              id="supp-particles"
              width="100%"
              height="100%"
              style={{ position: "fixed", zIndex: -1, top: "0", left: "0"}}
              className={"test-canvas"}
              config="spore"
            />
          }
          <Switch>
            <Route path="/">
              <MainPage theme={theme} toggleState={toggleState}/>
            </Route>
          </Switch>
          <Navbar onToggleClick={onToggleClick}/>
        </MainContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
