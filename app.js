//Const (constant) in programming is a keyword that defines a variable or pointer as unchangeable.

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const texto = document.querySelector('#texto');
const headline = document.querySelector('.headline');
const headline2 = document.querySelector('.headline2');
const arrow = document.querySelector('.arrow');

//TL is a variable, timelinemax is the animation library
const tl = new TimelineMax();

//Here i will definide the sections i want to animate
////animation: from opacity cero to fullest 

tl.fromTo(hero, 1, //the hero and its content, will open from 0 to 100%
{ height: "0%" },  
{ height: "100%", ease: Power2.easeInOut })
.fromTo(hero, 1.2,  
{ width: "100%"},
{ width: "90%", 
ease: Power2.easeInOut })
.fromTo(
slider, 1.2, {x: "-100%"},
{x: '0%' ,ease: Power2.easeInOut}, "-=1.2")


//animation: 'y or x' or up and down, indicates from where the element will appear to the fullest.

.fromTo(logo, 0.5, {opacity: 0, x: 30 },  {opacity: 1, x: 0 }, "-=0.3")
.fromTo(texto, 0.5, {opacity: 0, y: 30 },  {opacity: 1, y: 0 }, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, x: 30 },  {opacity: 1, x: 0 }, "-=0.5")
.fromTo(headline2, 0.5, {opacity: 0, x: 60 },  {opacity: 1, x: 0 }, "-=0.5")
.fromTo(arrow, 0.5, {opacity: 0, x: 90 },  {opacity: 1, x: 0 }, "-=0.2");
