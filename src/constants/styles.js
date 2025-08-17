import particlesConfig from "./particles";

import dandelionBackground from '../resources/images/background/dandelion-bg.png';
import skyTexture from '../resources/images/background/sky-texture-min.jpg';
import galaxyTexture from '../resources/images/background/galaxy-texture-min.jpg';
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
    cardStroke: 'transparent',
    cardFill: 'transparent',
    cardFillOpaque: '#effbf8',
    highlightFill: 'rgb(240,252,249, 0.8)',
    separatorFill: 'rgba(0, 0, 0, 0.3)',
    wrapperStroke: 'transparent',
    boxShadows: 'none',
    boxShadowContainer: `
      0 0 12px 1px rgba(99, 208, 170, 0.3),
      inset 0 0 8px 4px rgba(205, 255, 237, 1)
    `,

    particlesConfig: particlesConfig.light,
    backgroundImage: `url(${dandelionBackground})`,
    backgroundTexture: `url(${skyTexture})`,
    backgroundTextureFilter: 'hue-rotate(-40deg) brightness(1.05) contrast(1) blur(4px)',
    backgroundTextureOpacity: '0.4',
    backgroundGradient: `radial-gradient(150% 100% at 50% 90%,
    rgba(150, 223, 212, 0) 0% 60%,
    rgba(155, 255, 220, 1) 100%)`,

    backgroundOpacity: '0.7',
    backgroundFilter: 'drop-shadow(0 0 15px rgba(99, 208, 170, 0.5)) blur(1px)',
    galleryOverlayFill: 'rgba(54, 146, 115, 1)',
    routeMobileFill: 'rgba(183, 245, 224, 0.6)',
    routeMobileShadow:`
      0 0 12px 1px rgba(99, 208, 170, 0.3),
      inset 0 0 8px 4px rgba(205, 255, 237, 1)
    `,
    
    featureFilter: 'drop-shadow(0 0 15px rgba(99, 208, 170, 0.5))',

    scrollbarColor: '#fbe771',

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
    cardFill: 'transparent',
    cardFillOpaque: 'rgba(100,122,114,1)',
    highlightFill: 'rgba(87, 110, 101, 0.8)',
    separatorFill: 'rgba(173, 255, 221, 0.2)',
    wrapperStroke: 'rgba(177,239,223,0)',
    boxShadows: 'none',
    boxShadowContainer: `
      0 0 10px 0 rgba(205, 255, 237, 0.3),
      inset 0 0 20px 0 rgba(138, 234, 194, 0.25)
    `,

    particlesConfig: particlesConfig.dark,
    backgroundImage: `url(${cloudBackground})`,
    backgroundTexture: `url(${galaxyTexture})`,
    backgroundTextureFilter: 'grayscale(0) hue-rotate(-30deg) brightness(2) contrast(0.8) blur(20px)',
    backgroundTextureOpacity: '0.3',
    backgroundGradient: `radial-gradient(120% 100% at 50% 80%,
    rgba(138, 234, 194, 0) 0% 60%,
    rgba(138, 234, 194, 0.1) 100%)`,

    backgroundOpacity: '0.75',
    backgroundFilter: 'drop-shadow(0 0 15px rgba(205, 255, 237, 0.15)) blur(3px)',
    galleryOverlayFill: 'rgba(24, 113, 81, 1)',
    routeMobileFill: 'rgba(191, 251, 231, 0.2)',
    routeMobileShadow:`
      0 0 10px 0 rgba(205, 255, 237, 0.3),
      inset 0 0 20px 0 rgba(138, 234, 194, 0.25)
    `,

    featureFilter: 'drop-shadow(0 0 15px rgba(205, 255, 237, 0.15))',

    scrollbarColor: '#fffc33',

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