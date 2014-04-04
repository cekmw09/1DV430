"use strict";

function SoundPlayer(id, uri, length, repeat) {
	var sound = new SeamlessLoop();
	sound.addUri(uri, length, id);
	
	if(repeat) {
		sound.start(id);
	}
	else {
		sound.start(id);
		setTimeout(function(){
			sound.stop(id);
		}, length);
	}
}