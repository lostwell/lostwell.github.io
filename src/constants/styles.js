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
import profileMin from '../resources/images/featured/Profile-min.png';

const colors = {
  light: {
    logo: `${lostwellLight}`,
    background: "#c0f2e5",
    fontColor: "#303030",
    headerColor: '#303030',
    accentColor: '#fbe771',
    backdropBlur: 'none',
    highlightBackdropBlur: 'blur(6px)',
    progressBar: "#7a988f",
    progress: "#bfeddf",
    mailColor: '#8ebfb2',
    imageFill: 'rgb(240,252,249, 1)',

    iconFill: '#fffc33',
    iconStroke: '#303030',
    // cardStroke: '#303030',
    cardStroke: 'transparent',
    // cardFill: 'rgb(240,252,249, 0.6)',
    cardFill: 'transparent',
    cardFillOpaque: '#effbf8',
    highlightFill: 'rgb(240,252,249, 0.8)',
    separatorFill: '#303030',
    // wrapperStroke: 'rgba(48,48,48,1)',
    wrapperStroke: 'transparent',
    // boxShadows: `
    //   0 1px 1px rgba(128, 193, 177, 0.2),
    //   0 2px 2px rgba(128, 193, 177, 0.2),
    //   0 4px 4px rgba(128, 193, 177, 0.2),
    //   0 8px 8px rgba(128, 193, 177, 0.2),
    //   0 16px 16px rgba(128, 193, 177, 0.2)
    // `,
    boxShadows: 'none',

    particlesConfig: particlesConfig.light,
    backgroundImage: `url(${dandelionBackground})`,

    backgroundPosition: "40% calc(100% + 280px)",
    backgroundSize: "110%",

    backgroundPositionSmall: "46% calc(100% + 100px)",
    backgroundSizeSmall: "300%",

    backgroundPositionMobile: "45% calc(100% + 130px)",
    backgroundSizeMobile: "300%",

    backgroundPositionTablet: "45% calc(100% + 150px)",
    backgroundSizeTablet: "150%",

    backgroundPositionLaptop: "40% calc(100% + 180px)",
    backgroundSizeLaptop: "110%",

    overview: `${overviewLight}`,
    experience: `${experienceLight}`,
    education: `${educationLight}`,
    profile: `${profile}`,
    profileMin: `${profileMin}`,
  },
  
  dark: {
    logo: `${lostwellDark}`,
    background:"#27302d",
    fontColor: "#fff",
    headerColor: '#fffb70',
    accentColor: '#354742',
    backdropBlur: 'none',
    highlightBackdropBlur: 'blur(6px)',
    progressBar: "#b3cec2",
    progress: "#354742",
    mailColor: '#fffb70',
    imageFill: 'rgba(160,182,174,0.5)',

    iconFill: '#fffc33',
    iconStroke: '#fffc33',
    cardStroke: 'transparent',
    // cardFill: 'rgba(100,122,114,0.6)',
    cardFill: 'transparent',
    cardFillOpaque: 'rgba(100,122,114,1)',
    // highlightFill: 'rgba(160,182,174,0.5)',
    highlightFill: 'rgba(100,122,114,0.6)',
    separatorFill: '#fff',
    wrapperStroke: 'rgba(177,239,223,0)',
    // boxShadows: `
    //   0 1px 1px rgba(92, 142, 129, 0.05),
    //   0 2px 2px rgba(92, 142, 129, 0.05),
    //   0 4px 4px rgba(92, 142, 129, 0.05),
    //   0 8px 8px rgba(92, 142, 129, 0.05),
    //   0 16px 16px rgba(92, 142, 129, 0.05)
    // `,
    boxShadows: 'none',

    particlesConfig: particlesConfig.dark,
    backgroundImage: `url(${cloudBackground})`,

    backgroundPosition: "40% calc(100% + 280px)",
    backgroundSize: "110%",

    backgroundPositionSmall: "46% calc(100% + 100px)",
    backgroundSizeSmall: "300%",

    backgroundPositionMobile: "45% calc(100% + 130px)",
    backgroundSizeMobile: "300%",

    backgroundPositionTablet: "45% calc(100% + 150px)",
    backgroundSizeTablet: "150%",

    backgroundPositionLaptop: "40% calc(100% + 180px)",
    backgroundSizeLaptop: "110%",

    overview: `${overviewDark}`,
    experience: `${experienceDark}`,
    education: `${educationDark}`,
    profile: `${profile}`,
    profileMin: `${profileMin}`,
  }
}

export { colors }