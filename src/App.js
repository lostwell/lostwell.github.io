import { useSelector, useDispatch } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Particles from './components/Particles';
import { MainContainer } from './components';
import { MainPage, OverviewPage, ExperiencePage, EducationPage } from './routes';
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
      <AppContainer id="app-container">
        <MainContainer id="main-container" theme={theme}>
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
            <Route exact path="/">
              <MainPage theme={theme} toggleState={toggleState}/>
            </Route>
            <Route path="/overview">
              <OverviewPage theme={theme} toggleState={toggleState}/>
            </Route>
            <Route path="/experience">
              <ExperiencePage theme={theme} toggleState={toggleState}/>
            </Route>
            <Route path="/education">
              <EducationPage theme={theme} toggleState={toggleState}/>
            </Route>
          </Switch>
          <Navbar onToggleClick={onToggleClick}/>
        </MainContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
