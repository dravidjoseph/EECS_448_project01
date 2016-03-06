
/**
 * Clock.js
 * @author Dravid Joseph
* Thanks to Giulia Alfonsi at github.com/electrig for WatchObject inspiration
 */

var	stopWatchObject = function() {
		// Private vars
		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	// Time when clock stopped in ms

		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
 
		// Public methods
		// Start or resume
		this.start = function() {
				startAt	= startAt ? startAt : now();
			};

		// Stop or pause
		this.stop = function() {
				// If running, update elapsed time otherwise keep it
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0; // Paused
			};

		// Reset
		this.reset = function() {
				lapTime = 0;
				startAt = 0;
			};

		// Duration
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};

var stopWatch = new stopWatchObject();
var timeHTML;
var clockTimeInterval;

function padTimeString(num, size) {
	var stopWatchString = "0000" + num;
	return stopWatchString.substr(stopWatchString.length - size);
}

function formatTimeString(time) {
	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	var ms = 0;
	var newTime = '';

	hours = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	minutes = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	seconds = Math.floor( time / 1000 );
	ms = time % 1000;

	newTime = padTimeString(hours, 2) + ':' + padTimeString(minutes, 2) + ':' + padTimeString(seconds, 2) + ':' + padTimeString(ms, 3);
	return newTime;
}

function show() {
	timeHTML = document.getElementById('stop');
	update();
}

function update() {
	timeHTML.innerHTML = formatTimeString(stopWatch.time());
}

function start() {
	clockTimeInterval = setInterval("update()", 1);
	stopWatch.start();
}

function stop() {
	stopWatch.stop();
	document.getElementById("swstart").innerHTML = "Go";
	clearInterval(clockTimeInterval);
}

function swReset() {
	stop();
	stopWatch.reset();
	document.getElementById("swstart").innerHTML = "Start";
	update();
}