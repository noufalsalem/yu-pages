//INCOMPLETE SCRIPT FOR DARK MODE

var navbar = getElementById("navbar");
var darkLink = getElementById("darkLink");

function myFn() {
	var element = document.body;
	element.classList.toggle("dark");
}

//include wrappers and navbars (Note: Bootstrap already has navbar-dark and bg-dark classes for nav and dropdown css)

//if function for dark & light mode to apply to every page