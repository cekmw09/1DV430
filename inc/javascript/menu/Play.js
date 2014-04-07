"use strict";

function Play() {
	var secretCode = Play.prototype.secretCode();
}

Play.prototype.secretCode = function() {
	var i = 7, out = new Array();
	for(var j = 0; j < 4; j++) {
		out[j] = Math.floor(Math.random() * (i + 1));
	}
	return out;
}