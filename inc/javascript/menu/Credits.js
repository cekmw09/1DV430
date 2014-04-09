"use strict";

var Mastermind = Mastermind || {};

Mastermind.Credits = function() {
	var frame = document.getElementById("frame");
	var out;
	var data = [
		["Programmer",		"Christoffer Ekblom"],
		["Graphics",		"Christoffer Ekblom"],
		["Music composer",	"Christoffer Ekblom"],
		["Sound effects",	"Christoffer Ekblom"],
		["Visual artist",	"Märta Gasslander"]
	];
	
	Mastermind.Credits.mergeText(data);
}

Mastermind.Credits.mergeText = function(data) {
	var headline;
	var text;
	
	for(var i = 0; i < data.length; i++) {
		headline = document.createElement("h2");
		text = document.createElement("p");
		headline.appendChild(document.createTextNode(data[i][0]));
		text.appendChild(document.createTextNode(data[i][1]));
		frame.appendChild(headline);
		frame.appendChild(text);
	}
}