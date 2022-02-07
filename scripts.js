let nav = document.querySelector('nav');
let menu = document.querySelector('.icon-menu')

menu.addEventListener('click', function() {
	nav.classList.toggle('open');
});