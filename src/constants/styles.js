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

    backgroundPosition: "30% calc(100% + 180px)",
    backgroundSize: "105%",

    backgroundPositionSmall: "23% calc(100% + 130px)",
    backgroundSizeSmall: "400%",

    backgroundPositionMobile: "23% calc(100% + 180px)",
    backgroundSizeMobile: "400%",

    backgroundPositionTablet: "25% calc(100% + 320px)",
    backgroundSizeTablet: "400%",

    backgroundPositionLaptop: "25% calc(100% + 400px)",
    backgroundSizeLaptop: "400%",
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

    backgroundPosition: "30% calc(100% + 220px)",
    backgroundSize: "105%",

    backgroundPositionSmall: "22% calc(100% + 170px)",
    backgroundSizeSmall: "350%",

    backgroundPositionMobile: "22% calc(100% + 220px)",
    backgroundSizeMobile: "350%",

    backgroundPositionTablet: "24% calc(100% + 360px)",
    backgroundSizeTablet: "350%",

    backgroundPositionLaptop: "24% calc(100% + 440px)",
    backgroundSizeLaptop: "350%",
  }
}

export { colors }