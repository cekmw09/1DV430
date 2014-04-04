"use strict";

var Mastermind = {
    gameBoard: document.getElementById("gameBoard"),

    init: function (e) {
        Mastermind.renderLogo();
        Mastermind.renderMenu();
        SoundPlayer("background", "inc/sound/background.mp3", 132000, true);
    },

    renderLogo: function () {
        var logo = document.createElement("img");
        logo.src = "inc/graphics/logo.png";
        logo.alt = "Mastermind";
        gameBoard.appendChild(logo);
    },

    renderMenu: function () {
        var menu = document.createElement("ul");
        var that;
        var optionLi, optionA, optionText;
        var options = new Array(
			"Play",
			"Settings",
			"Help",
			"Credits"
		);

        menu.setAttribute("id", "frame");

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
                return false;
            }
        }

        gameBoard.appendChild(menu);
    }
}

window.onload = function() {
	Mastermind.init();
}