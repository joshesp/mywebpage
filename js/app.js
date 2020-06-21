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
var words = ['Front-end', 'Back-end', 'Freelancer'];
var speed = 200;


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

            setTimeout(function() {
              backText(word)
            }, 1500);
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

$(function(){
	$("#portafolio-gallery").elastic_grid({
		'showAllText' : 'Todos',
		'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
		'hoverDirection': true,
		'hoverDelay': 0,
		'hoverInverse': false,
		'expandingSpeed': 500,
		'expandingHeight': 500,
		'items' :[
			{
				'title'         : 'Papprika',
				'description'   : 'Propuesta de diseño y desarrollo de la aplicación móvil para iOS y Android.',
				'thumbnail'     : ['./assets/images/portafolio/papprika/papprika_sm.jpg', './assets/images/portafolio/papprika/papprika2_sm.jpg', './assets/images/portafolio/papprika/papprika3_sm.jpg'],
				'large'         : ['./assets/images/portafolio/papprika/papprika.jpg', './assets/images/portafolio/papprika/papprika2.jpg', './assets/images/portafolio/papprika/papprika3.jpg'],
				'img_title'     : ['Inicio', 'Platillos', 'Detalle del platillo'],
				'button_list'   : [],
				'tags'          : ['Self Portrait']
      },
      {
				'title'         : 'Daymarket',
				'description'   : 'Propuesta y maquetación del sitio web.',
				'thumbnail'     : ['./assets/images/portafolio/daymarket/daymarket1_sm.jpg', './assets/images/portafolio/daymarket/daymarket2_sm.jpg', './assets/images/portafolio/daymarket/daymarket3_sm.jpg'],
				'large'         : ['./assets/images/portafolio/daymarket/daymarket1.jpg', './assets/images/portafolio/daymarket/daymarket2.jpg', './assets/images/portafolio/daymarket/daymarket3.jpg'],
				'img_title'     : ['Inicio', 'Información del sitio', 'Selector de recetas favoritas'],
				'button_list'   : [],
				'tags'          : ['Self Portrait']
      },
      {
				'title'         : 'Ache',
				'description'   : 'Propuesta de diseño y desarrollo de la aplicación móvil para iOS y Android.',
				'thumbnail'     : ['./assets/images/portafolio/ache/ache1_sm.jpg', './assets/images/portafolio/ache/ache2_sm.jpg', './assets/images/portafolio/ache/ache3_sm.jpg', './assets/images/portafolio/ache/ache4_sm.jpg'],
				'large'         : ['./assets/images/portafolio/ache/ache1.jpg', './assets/images/portafolio/ache/ache2.jpg', './assets/images/portafolio/ache/ache3.jpg', './assets/images/portafolio/ache/ache4.jpg'],
				'img_title'     : ['Login', 'Inicio', 'Detalle de los servicios de la casa', 'Detalle de consumo de gas'],
				'button_list'   : [],
				'tags'          : ['Self Portrait']
      },
      {
				'title'         : 'Goexpo',
				'description'   : 'Maquetación del sistema web.',
				'thumbnail'     : ['./assets/images/portafolio/goexposys/goexpo1_sm.jpg', './assets/images/portafolio/goexposys/goexpo2_sm.jpg', './assets/images/portafolio/goexposys/goexpo3_sm.jpg'],
				'large'         : ['./assets/images/portafolio/goexposys/goexpo1.jpg', './assets/images/portafolio/goexposys/goexpo2.jpg', './assets/images/portafolio/goexposys/goexpo3.jpg'],
				'img_title'     : ['Login', 'Inicio', 'Alta de evento'],
				'button_list'   : [],
				'tags'          : ['Self Portrait']
      },
      {
				'title'         : 'Ssleventos',
				'description'   : 'Apoyo en el desarrollo del sistema.',
				'thumbnail'     : ['./assets/images/portafolio/ssleventos/ssleventos1_sm.jpg', './assets/images/portafolio/ssleventos/ssleventos2_sm.jpg', './assets/images/portafolio/ssleventos/ssleventos4_sm.jpg', './assets/images/portafolio/ssleventos/ssleventos3_sm.jpg'],
				'large'         : ['./assets/images/portafolio/ssleventos/ssleventos1.jpg', './assets/images/portafolio/ssleventos/ssleventos2.jpg', './assets/images/portafolio/ssleventos/ssleventos4.jpg', './assets/images/portafolio/ssleventos/ssleventos3.jpg'],
				'img_title'     : ['Registro de usuario', 'Dashboard de administrador', 'Reporte de un evento', 'Listado de registros'],
				'button_list'   : [],
				'tags'          : ['Self Portrait']
      },
		]
	});
});
