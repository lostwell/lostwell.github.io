import particlesConfig from "./particles"
import dandelionBackground from '../resources/images/background/dandelion-bg.png'
import cloudBackground from '../resources/images/background/cloud-bg.svg'
import lostwellLight from '../resources/images/icon/lostwell-light.svg'
import lostwellDark from '../resources/images/icon/lostwell-dark.svg'

const colors = {
  light: {
    logo: `${lostwellLight}`,
    background: "#B1EFDF",
    fontColor: "#303030",
    accentColor: '#D1D027',

    iconFill: '#fffc33',
    iconStroke: '#303030',
    cardStroke: '#303030',
    cardFill: 'rgba(255,255,255,0.65)',
    cardFillOpaque: '#e9f9f4',
    separatorFill: '#303030',
    wrapperStroke: 'rgba(48,48,48,1)',
    boxShadows: `
      0 1px 1px rgba(128, 193, 177, 0.2),
      0 2px 2px rgba(128, 193, 177, 0.2),
      0 4px 4px rgba(128, 193, 177, 0.2),
      0 8px 8px rgba(128, 193, 177, 0.2),
      0 16px 16px rgba(128, 193, 177, 0.2)
    `,

    particlesConfig: particlesConfig.light,
    backgroundImage: `url(${dandelionBackground})`,

    backgroundPosition: "30% calc(100% + 190px)",
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
    logo: `${lostwellDark}`,
    background: "#354742",
    fontColor: "#fff",
    accentColor: '#fffb70',

    iconFill: '#fffc33',
    iconStroke: '#fffc33',
    cardStroke: 'transparent',
    cardFill: 'rgba(177,239,223,0.4)',
    cardFillOpaque: '#6e8981',
    separatorFill: '#fff',
    wrapperStroke: 'rgba(177,239,223,0)',
    boxShadows: `
      0 1px 1px rgba(192, 242, 229, 0.05),
      0 2px 2px rgba(192, 242, 229, 0.05),
      0 4px 4px rgba(192, 242, 229, 0.05),
      0 8px 8px rgba(192, 242, 229, 0.05),
      0 16px 16px rgba(192, 242, 229, 0.05)
    `,

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