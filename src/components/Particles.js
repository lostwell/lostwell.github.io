import ParticlesComponent from 'react-particles-js';
import particlesConfig from '../constants/particles';

import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/reducers/theme/themeSlice';

const Particles = (props) => {
  const theme = useSelector(selectTheme)
  let pConfig = particlesConfig[theme]

  if(props.config) pConfig =  particlesConfig[props.config]

  return (
    <ParticlesComponent 
      params={pConfig} 
      {...props}
    />
  )
}

export default Particles