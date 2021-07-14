import dandelion from '../resources/images/dandelion.svg'
import star from '../resources/images/star.svg'

const particlesConfig = {}

particlesConfig.light = {
  "particles": {
    "number": {
      "value": 10,
      "density": {
        "enable": true,
        "value_area": 900
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
      "image": {
        "src": `${dandelion}`,
        "width": 168,
        "height": 182
      }
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
      "direction": "right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": true,
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
      "image": {
        "src": `${star}`,
        "width": 100,
        "height": 100
      }
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
      "value": 25,
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
      "opacity": 1,
      "width": 5
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
        "rotateX": 1000,
        "rotateY": 1000
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