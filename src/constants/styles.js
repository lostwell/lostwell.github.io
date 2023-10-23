import particlesConfig from "./particles";

import dandelionBackground from '../resources/images/background/dandelion-bg.png';
import cloudBackground from '../resources/images/background/cloud-bg.png';

import lostwellLight from '../resources/images/icon/lostwell-light.svg';
import lostwellDark from '../resources/images/icon/lostwell-dark.svg';

import overviewLight from '../resources/images/featured/overview-light.png';
import overviewDark from '../resources/images/featured/overview-dark.png';

import experienceLight from '../resources/images/featured/experience-light.png';
import experienceDark from '../resources/images/featured/experience-dark.png';

import educationLight from '../resources/images/featured/education-light.png';
import educationDark from '../resources/images/featured/education-dark.png';
import profile from '../resources/images/featured/Profile.png';

const colors = {
  light: {
    logo: `${lostwellLight}`,
    background: "#B1EFDF",
    fontColor: "#303030",
    headerColor: '#303030',
    accentColor: '#fbe771',
    backdropBlur: 'blur(10px)',
    progressBar: "#7a988f",
    progress: "#bfeddf",
    mailColor: '#8ebfb2',

    iconFill: '#fffc33',
    iconStroke: '#303030',
    cardStroke: '#303030',
    cardFill: 'rgba(250,250,250,0.6)',
    cardFillOpaque: '#fafefc',
    highlightFill: 'rgba(255,255,255,0.7)',
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

    overview: `${overviewLight}`,
    experience: `${experienceLight}`,
    education: `${educationLight}`,
    profile: `${profile}`,
  },
  
  dark: {
    logo: `${lostwellDark}`,
    background: "#354742",
    fontColor: "#fff",
    headerColor: '#fffb70',
    accentColor: '#354742',
    backdropBlur: 'blur(10px)',
    progressBar: "#b3cec2",
    progress: "#1f2422",
    mailColor: '#fffb70',

    iconFill: '#fffc33',
    iconStroke: '#fffc33',
    cardStroke: 'transparent',
    cardFill: 'rgba(100,122,114,0.6)',
    cardFillOpaque: 'rgba(100,122,114,1)',
    highlightFill: 'rgba(160,182,174,0.5)',
    separatorFill: '#fff',
    wrapperStroke: 'rgba(177,239,223,0)',
    boxShadows: `
      0 1px 1px rgba(92, 142, 129, 0.05),
      0 2px 2px rgba(92, 142, 129, 0.05),
      0 4px 4px rgba(92, 142, 129, 0.05),
      0 8px 8px rgba(92, 142, 129, 0.05),
      0 16px 16px rgba(92, 142, 129, 0.05)
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

    overview: `${overviewDark}`,
    experience: `${experienceDark}`,
    education: `${educationDark}`,
    profile: `${profile}`,
  }
}

export { colors }