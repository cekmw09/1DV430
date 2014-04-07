"use strict";

var Mastermind = Mastermind || {};

Mastermind.menu = {
    gameBoard: document.getElementById("gameBoard"),

    init: function () {
        Mastermind.menu.renderLogo();
        Mastermind.menu.renderMenu();
    },

    renderLogo: function () {
        var logo = document.createElement("img");
        logo.src = "inc/graphics/logo.png";
        logo.alt = "Game";
        gameBoard.appendChild(logo);
    },

    renderMenu: function () {
        var menu = document.createElement("ul");
        var that;
		var openFrame;
        var optionLi, optionA, optionText;
		var menuButton, menuButtonIMG;
        var options = new Array(
			"Play",
			"Settings",
			"Help",
			"Credits"
		);

        menu.id = "frame";

        for (var option in options) {
            that = options[option];
            optionText = document.createTextNode(that);
            optionA = document.createElement("a");
            optionLi = document.createElement("li");

            optionA.href = "#";
            optionA.id = that;

            optionA.appendChild(optionText);
            optionLi.appendChild(optionA);
            menu.appendChild(optionLi);

            optionA.onclick = function (e) {
                gameBoard.removeChild(frame);
				openFrame = document.createElement("div");
				openFrame.id = "frame";
				gameBoard.appendChild(openFrame);
				Mastermind.menu.runFunction(this.id);
				
				menuButton = document.createElement("a");
				menuButton.href = "#";
				
				menuButtonIMG = document.createElement("img");
				menuButtonIMG.id = "menuButton";
				menuButtonIMG.src = "inc/graphics/menuButton.png";
				
				menuButton.appendChild(menuButtonIMG);
				
				gameBoard.appendChild(menuButton);
				
				menuButton.onclick = function() {
					gameBoard.removeChild(frame);
					Mastermind.menu.renderMenu();
					gameBoard.removeChild(menuButton);
					return false;
				}
				
                return false;
            }
        }

        gameBoard.appendChild(menu);
    },
	
	runFunction: function(name, args) {
		var func = window[name];
		if(typeof func !== 'function')
			return;
		func.apply(window, args);
	}
}

window.onload = function() {
	Mastermind.menu.init();
}