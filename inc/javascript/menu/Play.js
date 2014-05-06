"use strict";

var Mastermind = Mastermind || {};

Mastermind.play = function() {
	Mastermind.play.showIntro();
}

Mastermind.play.gameStart = function () {
    Mastermind.play.renderGameBoard();
}

Mastermind.play.renderGameBoard = function () {
    var secretCode = Mastermind.play.secretCode();
    var table, tr, td;
    var frame = document.getElementById("frame");
    var symbol;
    var symbolIndex = 0;
    var add;
    var add2;
    var copy;
    var copy2;
    var clicks = 0;
    var guessArr = [];
    var hints;
    var round = 0;

    alert(secretCode);

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
                symbol.name = symbolIndex;
                td.appendChild(symbol);

                symbol.onclick = function () {
                    clicks++;
                    add = document.getElementById(Mastermind.play.clicks2Selector(clicks));
                    copy = document.createElement("img");
                    copy.src = this.src;
                    add.appendChild(copy);

                    guessArr.push(parseInt(this.name));

                    if (clicks > 0 && clicks % 4 == 0) {
                        round++;
                        hints = Mastermind.play.compareArrays(guessArr, secretCode);

                        if (hints[0] === 4) {
                            Mastermind.highscore();
                        }

                        add2 = document.getElementById(Mastermind.play.hintSelector(round));

                        for (var i = 0; i < hints[0]; i++) {
                            copy2 = document.createElement("img");
                            copy2.src = "inc/graphics/black.png";
                            copy2.className = "hint";
                            add2.appendChild(copy2);
                        }

                        for (var i = 0; i < hints[1]; i++) {
                            copy2 = document.createElement("img");
                            copy2.src = "inc/graphics/white.png";
                            copy2.className = "hint";
                            add2.appendChild(copy2);
                        }

                        guessArr = [];
                    }
                }

                symbolIndex++;
            }
        }
    }
}

Mastermind.play.clicks2Selector = function (input) {
    var counter = 0;
    for (var r = 9; r >= 0; r--) {
        for (var c = 0; c <= 3; c++) {
            counter++;
            if (counter === input) {
                return "c" + c + "r" + r;
            }
        }
    }
}

Mastermind.play.hintSelector = function (input) {
    var counter = 0;
    for (var i = 9; i >= 0; i--) {
        counter++;
        if (counter == input) {
            return "c4r"+ i;
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

Mastermind.play.compareArrays = function (arr1, arr2) {
    var correct = 0, exists = 0, out = new Array();

    var white = 0;
    var black = 0;
    var out = new Array();

    for(var slot = 0; slot <= 3; slot++) {
        if(arr1[slot] == arr2[slot]) {
            black++;
        }
        else {
            for(var s = 0; s<=3; s++) {
                if(arr1[slot] == arr2[s]) {
                    white++;
                    break;
                }
            }
        }
    }
    
    out = [black, white];

    return out;
}

Mastermind.play.secretCode = function() {
	var i = 7, out = [];
	for(var j = 0; j < 4; j++) {
		out[j] = Math.floor(Math.random() * (i + 1));
	}
	return out;
}