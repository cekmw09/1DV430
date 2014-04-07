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

Play.prototype.compareArrays = function(arr1, arr2) {
	var correct = 0, exists = 0, out = new Array();
	
	for(var i=0; i < arr1.length; i++) {
		if(arr1[i] === arr2[i])
			correct++;
	}
	
	if(arr1[0] === arr2[1] || arr1[0] === arr2[2] || arr1[0] === arr2[3])
		exists++;
	if(arr1[1] === arr2[0] || arr1[1] === arr2[2] || arr1[1] === arr2[3])
		exists++;
	if(arr1[2] === arr2[0] || arr1[2] === arr2[1] || arr1[2] === arr2[3])
		exists++;
	if(arr1[3] === arr2[0] || arr1[3] === arr2[1] || arr1[3] === arr2[2])
		exists++;
		
	out = [correct, exists];
	
	return out;
}