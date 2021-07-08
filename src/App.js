import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './constants/particles'
import { MainContainer } from './components/Containers'
import { MainHeader } from './components/Headers'


function App() {
  return (
    <MainContainer className="main-container">
      <Particles 
        style={{ position: "relative", zIndex: 1 }}
        className={"test-canvas"}
        params={{...particlesConfig}} 
      />
      {/* <MainHeader>Louel Lagasca</MainHeader> */}
    </MainContainer>
  );
}

export default App;
