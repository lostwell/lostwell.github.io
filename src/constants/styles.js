import particlesConfig from "./particles"
import dandelionBackground from '../resources/images/background/dandelion-bg.png'
import cloudBackground from '../resources/images/background/cloud-bg.svg'

const colors = {
  light: {
    background: "#99f0da",
    fontColor: "#303030",
    iconFill: '#fffc33',
    iconStroke: '#303030',
    cardStroke: '#303030',
    cardFill: 'rgba(255,255,255,1)',
    separatorFill: '#303030',
    particlesConfig: particlesConfig.light,
    backgroundImage: `url(${dandelionBackground})`,
    backgroundPosition: "0% 180%",
    backgroundSize: "100%",
  },
  dark: {
    background: "#303030",
    fontColor: "#fff",
    iconFill: '#fffc33',
    iconStroke: '#fffc33',
    cardStroke: 'transparent',
    cardFill: 'rgba(153,240,218,0.3)',
    separatorFill: '#fff',
    particlesConfig: particlesConfig.dark,
    backgroundImage: `url(${cloudBackground})`,
    backgroundPosition: "0% 102%",
    backgroundSize: "100%",
  }
}

export { colors }