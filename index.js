function toggleNav(toggleMenu){

	var menu = document.getElementsByClassName('navigation');
		toggleMenu.classList.toggle("toggled");

	var nav = document.getElementsByClassName('navigation')[0];
		nav.classList.toggle("navigation__open");



};


function getModal(){


	var modal = document.getElementById('modal');

	modal.style.display = "block";

	


};