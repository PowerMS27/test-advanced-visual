

//Проверка pc/mobile версия

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
// код для mobile:
    
console.log('This is Mobile version');        
        
} 
else {
    
// код для pc:    

console.log('This is PC version');    



}
//------------------------------------------------------------------------//

// Slick

//$(document).ready(function(){
//    
//    $('.price-slick').slick({
//        slidesToShow: 3,
////        slidesToScroll: 1,
//        arrows: true,
//        dots: true,
//        
//    });
//})


//$(document).ready(function(){
//    
//    $('.price-slick').slick({
//        arrows: false,
//        dots: false,
////        responsive: [
////            {
////              breakpoint: 1028,
////              settings: {
////                arrows: false,
////                
////              }
////            },
////        ],
//    })
//    
//});

let selectPriceItems = document.querySelectorAll('.price-item');
let allSliders = document.querySelectorAll('.price-slick');
allSliders[0].style.display = 'flex';
/* добавление класса на активную ссылку и замена изображений в слайдере */


for(let i = 0;i<selectPriceItems.length;i++){
    selectPriceItems[i].addEventListener('click', function(event){
        
        
        event.preventDefault();
        
        for(let i = 0;i<allSliders.length;i++){
            allSliders[i].classList.add('transition-down');
            allSliders[i].classList.remove('transition-up');
        }
        
        setTimeout(() => {
            for(let i = 0;i<allSliders.length;i++){
                allSliders[i].classList.remove('transition-down');
                allSliders[i].classList.remove('flex');
                allSliders[i].classList.add('none');
                
            }
            allSliders[selectPriceItems[i].dataset.count].classList.add('flex');
            
            
        }, 200);
        
        
        removePriceClass();
        
        
        this.classList.add('price-item__active');
        
        
        
    })
}

/* удаление активного класса*/

function removePriceClass(){
    for(let i = 0;i<selectPriceItems.length;i++){
        selectPriceItems[i].classList.remove('price-item__active');

    }
} 


// 3d поворот карточек

var card = $(".price-cards");
var price = $(".price");


price.on("mousemove",function(e) {  
  var ax = -($(window).innerWidth()/2- e.pageX)/120;
  var ay = ($(window).innerHeight()/2- e.pageY)/820;
  card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
});


// Прелодер
    
let tl_preload = gsap.timeline();

    tl_preload.to('.preloader', {
        scale: 3,
        duration: 0.3,
        ease: "ease",
    });
    
    
function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
    
    
document.querySelector('.menu__ic').style.transform = 'rotate(-' + scrolled*3 + 'deg)';
          
}

    
gsap.registerPlugin(ScrollTrigger);  

gsap.to('.paralax__fixid', {
    y: -200,
    scale: 1.06,
    opacity: 0.1,
    scrollTrigger: {
        trigger: '.content',
        scrub: 0.8,
        start: 'top 100%',
        end: 'top 0%',
        toggleActions: 'restart none none none',
//        markers: {
//            startColor: 'red',
//            endColor: 'blue',
//            fontSize: '12px',
//        },
    }   
});
 
gsap.to('.title1', {
    x: 0,
    opacity: 1,
    delay: 0.1,
    ease: Power2.easeOut,
    scrollTrigger: {
        trigger: '.title1',
        start: 'top 80%',     
    }   
});
gsap.to('.title2', {
    x: 0,
    opacity: 1,
    delay: 0.1,
    ease: Power2.easeOut,
    scrollTrigger: {
        trigger: '.title2',
        start: 'top 80%'   
    }   
});
gsap.to('.title3', {
    x: 0,
    opacity: 1,
    delay: 0.1,
    ease: Power2.easeOut,
    scrollTrigger: {
        trigger: '.our-works',
        start: 'top 10%', 
    }   
});
gsap.to('.title4', {
    x: 0,
    opacity: 1,
    delay: 0.1,
    ease: Power2.easeOut,
    scrollTrigger: {
        trigger: '.title4',
        start: 'top 30%',
        end: 'top 0%',
    }   
});
  
gsap.to('.man__gsap', {
    scale: 0.82,
    y: -140,
    scrollTrigger: {
        trigger: '.content',
        scrub: 0.8,
        start: 'top 100%',
        end: 'top 1%',
        toggleActions: 'restart none none none',
    }
    
});

//---------------------------------------------------------------------------//

// Параллакс

    const paralax = document.querySelector('.paralax');
    const paralax__burger = document.querySelector('.burger__body');
    const paralax__mask = document.querySelector('.darker__mask');
    
    const prlx = document.querySelectorAll('.prlx');
    
    

    if (paralax){
        
        const paralax__fixid = document.querySelector('.paralax__fixid');
        const human = document.querySelector('.images__paralax__item__man');
        const sky = document.querySelector('.images__paralax__item__fon');

        //Коэффиценты
        const forSky = 40;
        const forHuman = 20;

        //Скорость анимции
        const speed = 0.06;

        // Объявление переменных
        let positionX =0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParalaxStyle() {
            
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            // Передача стилей
            sky.style.cssText = `transform: translate(${positionX / forSky}%,${positionY / forSky}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;

            requestAnimationFrame(setMouseParalaxStyle);
        }
        setMouseParalaxStyle();
        
        
        for (var i=0; i<prlx.length; i++) {
        prlx[i].addEventListener("mousemove", function (e){
            //Ширина высота блока на текущий момент
            
            
            const paralaxWidth = paralax.offsetWidth;
            const paralaxHeight = paralax.offsetHeight;

            //Нулевая координата
            const coordX = e.pageX - paralaxWidth / 2;
            const coordY = e.pageY - paralaxHeight / 2;

            //Проценты
            coordXprocent = coordX / paralaxWidth * 100;
            coordYprocent = coordY / paralaxHeight * 100;
        });
        }
        
    }

//-----------------------------------------------------------------//

// Анимация иконки меню при скролле

let scrollVertical = $('html, body');
let menu = $('.menu');
let pixie = $('.pix');    
$(document).on('scroll', function () {
    if (scrollVertical.scrollTop() == 0) { 
        $(menu).removeClass('active');
        $(pixie).removeClass('active');
        document.querySelector('.menu__ic').style.transform = 'rotate(0deg)';
        
    }
    else {
        $(menu).addClass('active');
        $(pixie).addClass('active');
        window.onscroll = function() {myFunction()};
//        $('#slick-slide-control00').addClass('custom');
    }
});


//------------------------------------------------------------------//

// Метеориты

var style = ["style1", "style2", "style3", "style4", "style5", "style6"];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var numRand = 5000;

setTimeout(function(){
    carregarMeteoro();
}, numRand);

function carregarMeteoro(){
    setTimeout(carregarMeteoro, numRand);
    numRand = getRandomArbitrary(2000, 6000);
    var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 6)] +"'></div>";
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
    setTimeout(function(){
      document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
    }, 1000);
}

//-----------------------------------------------------------------------------------//

// Menu

$('.header__menu__burger-btn').click(function(event) {
        $('.burger__body').addClass('active');
        $('.darker__mask').addClass('active');
        $('body').addClass('lock');
        $('.lang__achor').addClass('active');
        
});
$('.burger__close').click(function(event) {
        $('.burger__body').removeClass('active');
        $('.darker__mask').removeClass('active');
        $('body').removeClass('lock');
        $('.lang__achor').removeClass('active');
        
});
$('.darker__mask').click(function(event) {
        $('.burger__body').removeClass('active');
        $('.darker__mask').removeClass('active');
        $('body').removeClass('lock');
        $('.lang__achor').removeClass('active');
});
    
// Якорные ссылки

$(document).ready(function(){
    $(".burger__ul").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        
        $('body,html').animate({scrollTop: top - 20 + 'px'}, 800);
        $('.burger__body').removeClass('active');
        $('.darker__mask').removeClass('active');
        $('body').removeClass('lock');
        $('.darkest__mask').addClass('active');
        
        function removeMask() {
            $('.darkest__mask').removeClass('active');
        }

        setTimeout(removeMask, 550);
        
    });
});

    
    
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');      
    }, 1500);
    
}  


///////////////////////////////////////////////////////////////////////////////
//Код Влада
///////////////////////////////////////////////////////////////////////////////



function draw() {
	con.clearRect(0, 0, WIDTH, HEIGHT);
	for (var e = 0; e < pxs.length; e++) {
		pxs[e].fade();
		pxs[e].move();
		pxs[e].draw()
	}
}

function Circle() {
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;
	this.s = {
		ttl: 8e3,
		xmax: 4,
		ymax: 2,
		rmax: 6,
		rt: 1,
		xdef: 960,
		ydef: 540,
		xdrift: 4,
		ydrift: 4,
		random: true,
		blink: true
	};
	this.reset = function () {
		this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef;
		this.y = this.s.random ? HEIGHT * Math.random() : this.s.ydef;
		this.r = (this.s.rmax - 1) * Math.random() + 1;
		this.dx = Math.random() * this.s.xmax * (Math.random() < .5 ? -1 : 1);
		this.dy = Math.random() * this.s.ymax * (Math.random() < .5 ? -1 : 1);
		this.hl = this.s.ttl / rint * (this.r / this.s.rmax);
		this.rt = Math.random() * this.hl;
		this.s.rt = Math.random() + 1;
		this.stop = Math.random() * .2 + .4;
		this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
		this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1)
	};
	this.fade = function () {
		this.rt += this.s.rt
	};
	this.draw = function () {
		if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;
		else if (this.rt >= this.hl) this.reset();
		var e = 1 - this.rt / this.hl;
		con.beginPath();
		con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
		con.closePath();
		var t = this.r * e;
		g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, t <= 0 ? 1 : t);
		g.addColorStop(0, "rgba(255,255,255," + e + ")");
		g.addColorStop(this.stop, "rgba(155, 235, 229," + e * .6 + ")");
		g.addColorStop(1, "rgba(155, 235, 229,0)");
		con.fillStyle = g;
		con.fill()
	};
	this.move = function () {
		WIDTH = window.innerWidth;
		HEIGHT = window.innerHeight;
		this.x += this.rt / this.hl * this.dx;
		this.y += this.rt / this.hl * this.dy;
		if (this.x > WIDTH || this.x < 0) this.dx *= -1;
		if (this.y > HEIGHT || this.y < 0) this.dy *= -1
	};
	this.getX = function () {
		return this.x
	};
	this.getY = function () {
		return this.y
	}
}
var WIDTH;
var HEIGHT;
var canvas;
var con;
var g;
var pxs = new Array;
var rint = 60;
$(document).ready(function () {
	WIDTH = "100%";
	HEIGHT = "100%";
	$("#container").width(WIDTH).height(HEIGHT);
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;
	canvas = document.getElementById("pixie");
	$(canvas).attr("width", WIDTH).attr("height", HEIGHT);
	con = canvas.getContext("2d");
	for (var e = 0; e < 100; e++) {
		pxs[e] = new Circle;
		pxs[e].reset()
	}
	setInterval(draw, rint)
});



let sections = gsap.utils.toArray(".panel");
let blocks = gsap.utils.toArray(".panels");
let lastPanels = gsap.utils.toArray(".last-panels");

window.addEventListener('resize', init);
init();
function init() {

	if (window.screen.width > 1400) {
         
        
		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: ".first-horizont",
				pin: true,
				scrub: 1.5,
//				snap: {
//			snapTo: 1 / (sections.length - 1),
//			inertia: false,
//			duration: {min: 0.5, max: 0.5}
//		},
				// base vertical scrolling on how wide the container is so it feels more natural.

			}
		});

		gsap.to(blocks, {
			xPercent: -100 * (blocks.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: ".second-horizont",
				pin: true,
				scrub: 1.5,
//				snap: 1 / (blocks.length - 1),
				// base vertical scrolling on how wide the container is so it feels more natural.

			}
		});
		gsap.to(lastPanels, {
			xPercent: -100 * (lastPanels.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: ".third-horizont",
				pin: true,
				scrub: 1.5,
//				snap: 1 / (lastPanels.length - 1),
				// base vertical scrolling on how wide the container is so it feels more natural.

			}
		});

	} else {
		gsap.utils.toArray(".smooth-operator").forEach((panel, i) => {
			ScrollTrigger.create({
			  trigger: panel,
			  start: "top top", 
			  pin: true, 
			  pinSpacing: false 
			});
		  });
		  
		  
		  ScrollTrigger.create({
			snap: 1 / 8 // snap whole page to the closest section!
		  });
	}
}


