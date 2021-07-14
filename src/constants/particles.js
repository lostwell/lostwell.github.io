import dandelionWhite from '../resources/images/dandelion-white.svg'
import dandelionYellow from '../resources/images/dandelion-yellow.svg'
import dandelionWhite2 from '../resources/images/dandelion-white-2.svg'
import dandelionYellow2 from '../resources/images/dandelion-yellow-2.svg'

import star from '../resources/images/star.svg'
import starWhite from '../resources/images/star-white.svg'

const particlesConfig = {}

particlesConfig.light = {
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#fffc33"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 10,
        "color": "#303030"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": [
        // {
        //   "src": `${cloudDark}`,
        //   "width": 589,
        //   "height": 173
        // },
        // {
        //   "src": `${cloudDarkBorder}`,
        //   "width": 589,
        //   "height": 173
        // },
        // {
        //   "src": `${cloudLight}`,
        //   "width": 589,
        //   "height": 173
        // },
        // {
        //   "src": `${cloudLightBorder}`,
        //   "width": 589,
        //   "height": 173
        // },
        {
          "src": `${dandelionWhite}`,
          "width": 168,
          "height": 182
        },
        {
          "src": `${dandelionYellow}`,
          "width": 168,
          "height": 182
        },
        {
          "src": `${dandelionWhite2}`,
          "width": 168,
          "height": 182
        },
        {
          "src": `${dandelionYellow2}`,
          "width": 168,
          "height": 182
        },
      ]
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.959040959040959,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 30,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 250,
      "color": "#303030",
      "opacity": 1,
      "width": 5
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "top-right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 500,
        "rotateY": 500
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 30,
        "duration": 1,
        "opacity": 1,
        "speed": 5
      },
      "repulse": {
        "distance": 150,
        "duration": 2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

particlesConfig.dark = {
  "particles": {
    "number": {
      "value": 15,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#fffc33"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#fffc33"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": [
        {
          "src": `${star}`,
          "width": 100,
          "height": 100
        },
        {
          "src": `${starWhite}`,
          "width": 100,
          "height": 100
        },
      ]
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.959040959040959,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 20,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 50,
        "size_min": 10,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 250,
      "color": "#fff",
      "opacity": 0.8,
      "width": 4
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "random",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 200,
        "rotateY": 200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 50,
        "duration": 1,
        "opacity": 1,
        "speed": 5
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

export default particlesConfig