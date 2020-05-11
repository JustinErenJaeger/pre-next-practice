// GET REQUIRE ALL DOM ELEMENTS
const image = document.querySelector('.image');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const dots = document.querySelectorAll('.dot');

// SETTING VARIABLES
let i = 0;
let values = null;
let imageMark = null;
let imageSrc = [
	'./img/bg-1.jpg',
	'./img/bg-2.jpg',
	'./img/bg-3.jpg',
	'./img/bg-4.jpg',
	'./img/bg-5.jpg',
	'./img/bg-6.jpg',
];

window.onload = readyObject;

function readyObject() {
	image.src = imageSrc[i];
	dottedMarker();
}

function cycler() {
	if (i <= -1) {
		i = 5;
	} else if (i >= imageSrc.length) {
		i = 0;
	}
	image.src = imageSrc[i];
}

function prev() {
	i--;
	cycler();
	markerHandler();
}

function next() {
	i++;
	cycler();
	markerHandler();
}

function imageMarker() {
	imageMark = 'imgMark';
	currentImageMarker();
}

function dottedMarker() {
	imageMark = 'dotMark';
	currentImageMarker();
}
function markerHandler() {
	imageMark === 'dotMark'
		? dottedMarker()
		: imageMark === 'imgMark'
		? imageMarker()
		: null;
}

function currentImageMarker() {
	for (x = 0; x < dots.length; x++) {
		const allDots = dots[x];

		allDots.style.background =
			imageMark === 'dotMark'
				? 'rgb(97, 250, 255, 0.6)'
				: imageMark === 'imgMark'
				? `url(${imageSrc[x]})`
				: null;

		allDots.style.backgroundSize = '100% 100%';
		allDots.style.opacity = '0.7';
		allDots.style.zIndex = '0';
		allDots.style.transform = 'scale(1)';
		allDots.style.width =
			imageMark === 'dotMark'
				? '6rem'
				: imageMark === 'imgMark'
				? '10rem'
				: null;
		allDots.style.height =
			imageMark === 'dotMark'
				? '4rem'
				: imageMark === 'imgMark'
				? '7rem'
				: null;

		dots[i].style.background =
			imageMark === 'dotMark'
				? 'rgb(97, 250, 255)'
				: imageMark === 'imgMark'
				? `url(${imageSrc[i]})`
				: null;
		dots[i].style.zIndex = '2';
		dots[i].style.backgroundSize = '100% 100%';
		dots[i].style.opacity = '1';
		dots[i].style.transform = 'scale(1.3)';
	}
}

function setImage(getImage, iVal) {
	i = iVal;
	image.src = getImage;
}
