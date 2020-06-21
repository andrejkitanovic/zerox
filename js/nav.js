// MOBILE NAV
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle("open");
	hamburger.classList.toggle("rotate-line");
});