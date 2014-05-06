"use strict";

var Mastermind = Mastermind || {};

Mastermind.play = function() {
	Mastermind.play.showIntro();
}

Mastermind.play.gameStart = function() {
	Mastermind.play.renderGameBoard();
	var secretCode = Mastermind.play.secretCode();
	
	
}

Mastermind.play.renderGameBoard = function () {
    var table, tr, td;
    var frame = document.getElementById("frame");
    var symbol;
    var symbolIndex = 0;

    table = document.createElement("table");
    table.id = "gameTable";

    frame.appendChild(table);

    for (var row = 0; row < 12; row++) {
        tr = document.createElement("tr");
        table.appendChild(tr);
        for (var col = 0; col < 5; col++) {
            td = document.createElement("td");
            td.id = "c" + col + "r" + row;
            tr.appendChild(td);

            if (col === 4 || row >= 10) {
                td.className = "corner";
            }

            if (col === 4 && row >= 10) {
                td.className = "hidden";
            }

            if (col < 4 && row >= 10) {
                symbol = document.createElement("img");
                symbol.src = "inc/graphics/colors/" + symbolIndex + ".png";
                symbol.id = "symbol" + symbolIndex;

                td.appendChild(symbol);

                symbol.onclick = function () {

                }

                symbolIndex++;
            }
        }
    }
}

Mastermind.play.showIntro = function() {
	var frame = document.getElementById("frame");
	var introFrame = document.createElement("p");
	var nextA = document.createElement("a");
	var nextImg = document.createElement("img");
	var i = 0;
	var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
	var timer;
	var edwine = document.createElement("div");
	edwine.id = "edwineStanding";
	
	introFrame.id = "introFrame";
	
	nextImg.id = "next";
	nextImg.src = "inc/graphics/next.png";
	
	nextA.appendChild(nextImg);
	frame.appendChild(nextA);
	frame.appendChild(introFrame);
	frame.appendChild(edwine);
	
	setTimeout(function(){
		edwine.id = "edwineTalking";
		timer = setInterval(function() {
			introFrame.innerHTML += text[i];
			i += 1;
			
			if(i >= text.length) {
				clearInterval(timer);
				edwine.id = "edwineStanding";
			}
		}, 50);
	},500);
	
	nextA.onclick = function() {
		gameBoard.removeChild(frame);
		frame = document.createElement("div");
		frame.id = "frame";
		gameBoard.appendChild(frame);
		Mastermind.play.gameStart();
	}
}

Mastermind.play.compareArrays = function(arr1, arr2) {
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

Mastermind.play.secretCode = function() {
	var i = 7, out = new Array();
	for(var j = 0; j < 4; j++) {
		out[j] = Math.floor(Math.random() * (i + 1));
	}
	return out;
}