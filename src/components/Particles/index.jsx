import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { useSelector } from 'react-redux';

import particlesConfig from '../../constants/particles';
import { selectTheme } from '../../redux/reducers/theme/themeSlice';

const ParticlesComponent = (props) => {
  const theme = useSelector(selectTheme)
  let pConfig = particlesConfig[theme]

  if(props.config) pConfig =  particlesConfig[props.config]

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.info("Particles Successfully Loaded");
  }, []);

  return (
    <Particles 
      init={particlesInit}
      loaded={particlesLoaded}
      options={pConfig} 
      {...props}
    />
  )
}

export default ParticlesComponent