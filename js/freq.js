$("#A1").click(function(){
	var context = new webkitAudioContext();
var osc = context.createOscillator();
var vol = context.createGainNode();/*for volume*/

vol.gain.value = 0.1; // from 0 to 1, 1 full volume, 0 is muted
osc.connect(vol); // connect osc to vol
vol.connect(context.destination); // connect vol to context distination
osc.start(0); // start it three seconds from now
		
	})
})


/*http://stackoverflow.com/questions/6343450/generating-sound-on-the-fly-with-javascript-html5*/
/*http://www.podcomplex.com/blog/keyboard-notes-by-frequency/*/