import dandelionWhiteBorder from '../resources/images/icon/dandelion-white-border.png'
import dandelionWhiteBorder2 from '../resources/images/icon/dandelion-white-border-2.png'
import spore from '../resources/images/icon/spore.svg'

import star from '../resources/images/icon/star.svg'
import starWhite from '../resources/images/icon/star-white.svg'
import starCyan from '../resources/images/icon/star-cyan.svg'

const particlesConfig = {}


particlesConfig.spore = {
  "particles": {
    "number": {
      "value": 5,
      "density": {
        "enable": true,
        "value_area": 800
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
        {
          "src": `${spore}`,
          "width": 50,
          "height": 50
        },
      ]
    },
    "opacity": {
      "value": 1,
      "random": {
        "enable": false,
        "minimumValue": 0.3
      },
      "anim": {
        "enable": false,
        "speed": 0.2,
        "opacity_min": 0.3,
        "sync": true
      }
    },
    "size": {
      "value": 15,
      "random": {
        "enable": true,
        "minimumValue":5
      },
      "anim": {
        "enable": false,
        "speed": 5,
        "size_min": 15,
        "sync": true
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

particlesConfig.light = {
  "particles": {
    "number": {
      "value": 10,
      "density": {
        "enable": true,
        "value_area": 800
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
        {
          "src": `${dandelionWhiteBorder}`,
          "width": 72,
          "height": 84
        },
        {
          "src": `${dandelionWhiteBorder2}`,
          "width": 70,
          "height": 84
        },
      ]
    },
    "opacity": {
      "value": 1,
      "random": {
        "enable": false,
        "minimumValue": 0.3
      },
      "anim": {
        "enable": false,
        "speed": 0.2,
        "opacity_min": 0.3,
        "sync": true
      }
    },
    "size": {
      "value": 40,
      "random": {
        "enable": true,
        "minimumValue": 20
      },
      "anim": {
        "enable": false,
        "speed": 5,
        "size_min": 15,
        "sync": true
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
        "value_area": 1150
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
        {
          "src": `${starCyan}`,
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
      "random": {
        "enable": true,
        "minimumValue": 2
      },
      "anim": {
        "enable": false,
        "speed": 30,
        "size_min": 2,
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
      "speed": 2,
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
        "size": 40,
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