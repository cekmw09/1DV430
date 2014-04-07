"use strict";

var Mastermind = Mastermind || {};

Mastermind.game = Mastermind.game || {
    gameBoard: document.getElementById("gameBoard"),

    init: function () {
        Mastermind.game.renderLogo();
        Mastermind.game.renderMenu();
        SoundPlayer("background", "inc/sound/background.mp3", 132000, true);
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

            optionA.onmouseover = function () {
                SoundPlayer("hover", "inc/sound/hover.mp3", 1000, false);
            }

            optionA.onclick = function (e) {
                SoundPlayer("click", "inc/sound/click.mp3", 1000, false);
                gameBoard.removeChild(frame);
				openFrame = document.createElement("div");
				openFrame.id = "frame";
				gameBoard.appendChild(openFrame);
				Mastermind.game.runFunction(this.id);
				
				menuButton = document.createElement("a");
				menuButton.href = "#";
				
				menuButtonIMG = document.createElement("img");
				menuButtonIMG.id = "menuButton";
				menuButtonIMG.src = "inc/graphics/menuButton.png";
				
				menuButton.appendChild(menuButtonIMG);
				
				gameBoard.appendChild(menuButton);
				
				menuButton.onmouseover = function() {
					SoundPlayer("hover", "inc/sound/hover.mp3", 1000, false);
				}
				
				menuButton.onclick = function() {
				    SoundPlayer("click", "inc/sound/click.mp3", 1000, false);
					gameBoard.removeChild(frame);
					Mastermind.game.renderMenu();
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
	Mastermind.game.init();
}