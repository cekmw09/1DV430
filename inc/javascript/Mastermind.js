"use strict";

var Mastermind = {
	gameBoard : document.getElementById("gameBoard"),
	
	init: function (e) {
		Mastermind.renderLogo();
	},
	
	renderLogo: function() {
		var logo = document.createElement("img");
		logo.src = "inc/graphics/logo.png";
		logo.alt = "Mastermind";
		gameBoard.appendChild(logo);
	}
}

window.onload = function() {
	Mastermind.init();
}