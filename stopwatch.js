
/**
 * Clock.js
 * @author Dravid Joseph
 */


/**
 * @type object
 * @function stopWatchObject
 * @pre none 
 * @post encapsulates all stopwatch information
 * @summary creates an object that handles timer functionality
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

/**
 * @name stopWatch
 * @type stopWatchObject
 * @summary Instance of stopWatchObject
 */
var stopWatch = new stopWatchObject();

/**
 * @name timeHTML
 * @type Object
 * @summary Holds contents of time div
 */
var timeHTML;

/**
 * @name clockTimeInterval
 * @type function
 * @summary stores setInterval
 */
var clockTimeInterval;

/**
 * @type function 
 * @function padTimeString
 * @param num
 * @param size
 * @pre valid milliseconds string and valid size
 * @post pads the millisecond time into a string so it formats properly
 * @summary returns the proper padded string
 */
function padTimeString(num, size) {
	var stopWatchString = "0000" + num;
	return stopWatchString.substr(stopWatchString.length - size);
}

/**
 * @type function 
 * @function formatTimeString
 * @param time
 * @pre Valid time string
 * @post formatted time string
 * @summary Formats the time for the stopwatch div
 */
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

/**
 * @type function 
 * @function show
 * @pre None
 * @post loads stopwatch to page right away
 * @summary Page load for stopwatch
 */
function show() {
	timeHTML = document.getElementById('stop');
	update();
}

/**
 * @type function 
 * @function update
 * @pre None
 * @post updates time div with correct time 
 * @summary Updates clock
 */
function update() {
	timeHTML.innerHTML = formatTimeString(stopWatch.time());
}

/**
 * @type function 
 * @function start
 * @pre None
 * @post starts clock and initializes clockTimeInterval
 * @summary starts clock
 */
function start() {
	clockTimeInterval = setInterval("update()", 1);
	stopWatch.start();
}

/**
 * @type function 
 * @function stop
 * @pre valid milTIme
 * @post stops stopwatch
 * @summary stops the stopwatch with correct time, while reformatting the Start button
 */
function stop() {
	stopWatch.stop();
	document.getElementById("swstart").innerHTML = "Go";
	clearInterval(clockTimeInterval);
}

/**
 * @type function 
 * @function swReset * @param milTime
 * @pre None
 * @post resets stopwatch
 * @summary resets stopwatch updating button as needed
 */
function swReset() {
	stop();
	stopWatch.reset();
	document.getElementById("swstart").innerHTML = "Start";
	update();
}