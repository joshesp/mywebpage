var particlesJSON = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#e0e0e0"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#e0e0e0",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
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
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#fff",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  };


var spanTxt = document.querySelector('.typed-text');
var spanYear = document.querySelector('.year-text');

var indexWord = 0;
var words = ['Front-end', 'Back-end'];
var speed = 300;


function typedText() {
    if ( words.length < (indexWord + 1) ) {
        indexWord = 0;
    }

    addText(words[indexWord]);
}

function addText(str) {
    var index = 0;
    var word = '';

    var setInt = setInterval(function() {
        word += str[index];

        if ((index + 1) < str.length) {
            index++;
        } else {
            clearInterval(setInt);
            backText(word)
        }

        spanTxt.innerHTML = word;
    }, speed);
}

function backText(str) {
    var word = str;

    var setInt = setInterval(function() {
        word = word.substring(0, word.length - 1);

        spanTxt.innerHTML = word;

        if (!word.length) {
            clearInterval(setInt);
            indexWord++;
            typedText();
        }
        
    }, speed);
}

function headerBG () {
    var scrollTop = window.pageYOffset | document.body.scrollTop;
    var header = document.querySelector('.header-nav');

    if (scrollTop >= (screen.height - 200)) header.classList.add('header-bg');
    else header.classList.remove('header-bg');
}

function toggleMenu() {
  document.querySelector('.header-nav').classList.toggle('active-nav');
    document.getElementById('nav-menu').classList.toggle('active');
}


// Typed text
if (spanTxt) {
    typedText();
}

// current year
if (spanYear) {
    spanYear.innerHTML = new Date().getFullYear();
}

// header change bg color
window.addEventListener("scroll", headerBG);

document.getElementById('menu-icon').addEventListener('click', toggleMenu);

document.querySelectorAll('.item-nav').forEach(function(element) {
  element.addEventListener('click', toggleMenu);
});


particlesJS('particles-js', particlesJSON);

$('.silder-container').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    draggable: true,
    prevArrow: '<button class="btn-slide-prev">' +
                    '<svg class="fill-white" xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'><title>ionicons-v5-a</title><polyline points=\'328 112 184 256 328 400\' style=\'fill:none;stroke:#225469;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px\'/></svg>' +
                '</button>',
    nextArrow: '<button class="btn-slide-next">' +
                    '<svg class="fill-white" xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'><title>ionicons-v5-a</title><polyline points=\'184 112 328 256 184 400\' style=\'fill:none;stroke:#225469;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px\'/></svg>' +
                '</button>'
});