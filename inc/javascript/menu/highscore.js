"use strict";

var Mastermind = Mastermind || {};

Mastermind.highscore = function (timer) {
    var frame = document.getElementById("frame");
	
	// Variabler för att räkna ut speltid
    var d = new Date();
    var now = d.getTime();
	
	// Variabler för formulär
    var form = document.createElement("form");
    var label = document.createElement("label");
    var input = document.createElement("input");
    var submit = document.createElement("input");

    input.type = "text";
    submit.type = "submit";
    submit.value = "Send";

    label.innerHTML = "Enter your name";

    frame.innerHTML = null;

    frame.appendChild(form);

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);

    submit.onclick = function () {
        return false;
    }
}
