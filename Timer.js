/**
 * timer.js
 * @author Jinuk Park, with borrowed ideas from existing codebase
 */

/**
 * @name currentTimeTimer 
 * @type Date
 * @summary New Date type to keep track of current time ]
 */
var currentTimeTimer = new Date();

//set currentTimeTimer to zero
currentTimeTimer.setHours(0);
currentTimeTimer.setMinutes(0);
currentTimeTimer.setSeconds(0);


/**
 * @name lastTime
 * @type Date
 * @summary Date type to keep track of previous time 
 */
var lastTimeTimer = currentTimeTimer;


/**
 * @name timerIntervalTimer
 * @function setInterval(function, interval) 
 * @summary named function to use to call given function after given interval in milliseconds
 * @param function = function to be evaluated after set time
 * @param integer interval = interval to wait until function will be evaluated, in milliseconds.
 *
 */
var timerIntervalTimer = setInterval(timerTimer, 500);

/**
 * @name milTimeTimer
 * @type Boolean
 * @summary tells whether or not the clock is to be displayed in military time, or not military time, standard time.
 */
var milTimeTimer = true;

/**
 * The method that alters lastTimeTimer is as follows...
 * @function toLocaleString(string timeZone, boolean if displayed in 12 hour)
 * @param string timeZone = 'en-US', for a US timezone
 * @param bool hour12 = !milTimeTimer, whether time should be displayed in not military time, 12 hour, or 24 hours 
 * @return string with time given parameters
 */
lastTimeTimer = currentTimeTimer.toLocaleTimeString('en-US', { hour12: !(milTimeTimer) });

/**
 * @name optionsTimer 
 * @type variable
 * @summary variable for timer display options
 *
 */
var optionsTimer = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTimeTimer };

/**
 * @name runTimer
 * @type Boolean
 * @summary tells whether or not the timer is running, or not running, meaning it's currently being set
 */
var runTimer = false;

/**
 * @name setModeTimer
 * @type string
 * @summary can be "month", "day", "year", "hours", "minutes", or "seconds" 
 * @default = hours
 */
var setModeTimer = "hours";

/**
 * @type function 
 * @function timerTimer 
 * @pre none
 * @post ensures proper elements are displayed, if timer is running, will update timer
 * @summary Controls the display of the clock. If clock is running then will change accordingly, otherwise will hold the time as user sets it.
 */
function timerTimer() {
	
	//timer is not running
  if (currentTimeTimer.getHours() == 0 && currentTimeTimer.getMinutes() == 0 && currentTimeTimer.getSeconds() == 0) {
    runTimer = false;
  }
  //if running, display
  if (runTimer) {
    document.getElementById("timerTimer").hidden = false;
    currentTimeTimer.setMilliseconds((currentTimeTimer.getMilliseconds() - 500));
    lastTimeTimer = currentTimeTimer.toLocaleTimeString('en-US', optionsTimer);
    document.getElementById("timerTimer").innerHTML = lastTimeTimer;

  } else {
    document.getElementById("timerTimer").innerHTML = lastTimeTimer;
    if (timerflashing == true) {
      flashTimeTimer();
    }
  }
}


 /**
 * @type function
 * @function toggleTypeTimer
 * @pre None
 * @post Toggles which section to update
 * @summary Toggles through each type of set mode as the click comes in from the user, updates setMode variable and the image being displayed in browser 
 */
var toggleTypeTimer = function() {
  if (setModeTimer == "hours") {
    setModeTimer = "minutes";
  } else if (setModeTimer == "minutes") {
    setModeTimer = "seconds";
  } else {
    setModeTimer = "hours";
  }
  $("#timePartTimer").html(setModeTimer);
}

/**
 * @name onTimer 
 * @type Boolean
 * @summary tells whether or not the time string is being displayed or hidden during the setting mode 
 */
var onTimer = true;

/**
 * @type function
 * @function flashTimeTimer 
 * @pre timer is in setting mode 
 * @post toggles time string between shown and hidden 
 * @summary creates flashing effect on timer by toggling time string between shown and hidden 
 */
var flashTimeTimer = function() {
  if (onTimer) {
    document.getElementById("timerTimer").hidden = false;
    onTimer = false;
  } else {
    document.getElementById("timerTimer").hidden = true;
    onTimer = true;
  }
}

/**
 * @type function
 * @function incrementTimeTimer 
 * @pre None 
 * @post will increment the hours, minutes, or seconds based on setMode 
 * @summary will add one to the hours minutes or seconds based on setMode, and increment the next interval if needed
 */
var incrementTimeTimer = function() {
  document.getElementById("timerTimer").hidden = false;
  if (setModeTimer == "hours") {
    currentTimeTimer.setHours((currentTimeTimer.getHours() + 1));
    optionsTimer = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTimeTimer };
    lastTimeTimer = currentTimeTimer.toLocaleTimeString('en-US', optionsTimer);
    document.getElementById("timerTimer").innerHTML = lastTimeTimer;
  } else if (setModeTimer == "minutes") {
    currentTimeTimer.setMinutes((currentTimeTimer.getMinutes() + 1));
    optionsTimer = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTimeTimer };
    lastTimeTimer = currentTimeTimer.toLocaleTimeString('en-US', optionsTimer);
    document.getElementById("timerTimer").innerHTML = lastTimeTimer;
  } else {
    currentTimeTimer.setSeconds((currentTimeTimer.getSeconds() + 1));
    optionsTimer = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTimeTimer };
    lastTimeTimer = currentTimeTimer.toLocaleTimeString('en-US', optionsTimer);
    document.getElementById("timerTimer").innerHTML = lastTimeTimer;
  }
}

/**
 * @type function
 * @function decrementTimeTimer 
 * @pre Timer is in setting mode 
 * @post will decrement the hours, minutes, or seconds based on setMode 
 * @summary will subtract one from the hours minutes or seconds based on setMode, and decrement the next interval if needed
 */
var decrementTimeTimer = function() {
  document.getElementById("timerTimer").hidden = false;
  if (setModeTimer == "hours") {
    currentTimeTimer.setHours((currentTimeTimer.getHours() - 1));
    optionsTimer = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTimeTimer };
    lastTimeTimer = currentTimeTimer.toLocaleTimeString('en-US', optionsTimer);
    document.getElementById("timerTimer").innerHTML = lastTimeTimer;
  } else if (setModeTimer == "minutes") {
    currentTimeTimer.setMinutes((currentTimeTimer.getMinutes() - 1));
    optionsTimer = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTimeTimer };
    lastTimeTimer = currentTimeTimer.toLocaleTimeString('en-US', optionsTimer);
    document.getElementById("timerTimer").innerHTML = lastTimeTimer;
  } else {
    currentTimeTimer.setSeconds((currentTimeTimer.getSeconds() - 1));
    optionsTimer = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTimeTimer };
    lastTimeTimer = currentTimeTimer.toLocaleTimeString('en-US', optionsTimer);
    document.getElementById("timerTimer").innerHTML = lastTimeTimer;
  }
}

/**
 * @type function
 * @function toggleSetTimer
 * @pre none 
 * @post toggles setTime
 * @summary toggles setTime
 */
var toggleSetTimer = function() {
  setModeTimer = "hours";
  $("#settingsPanelTimer").toggle();
  $("#setbtnTimer").toggle();
}

/**
 * @type function
 * @function setTimeTimer 
 * @param hours = hours to display 
 * @param minutes = minutes to display
 * @param seconds = seconds to display 
 * @pre valid hours minutes and seconds passed  
 * @post update function, sets hours minutes and seconds to those passed as parameters 
 * @summary calls currentTimeTimer's built in methods to set hours to param hours, set minutes to param minutes and set seconds to param seconds. 
 */
var setTimeTimer = function(hours, minutes, seconds) {
  currentTimeTimer.setHours(hours);
  currentTimeTimer.setMinutes(minutes);
  currentTimeTimer.setSeconds(seconds);
}

$("#resume").hide();
$("#pause").hide();

var timerflashing = true;

/**
 * @type function 
 * @function startTimer
 * @pre None
 * @post starts startTimer and changes buttons as needed
 * @summary starts startTimer
 */
function startTimer() {
  runTimer = true;
  $("#resume").hide();
  $("#pause").show();
  $("#start").hide();
}

/**
 * @type function 
 * @function pauseTimer
 * @pre None
 * @post pauses Timer and changes buttons as needed
 * @summary pauses startTimer
 */
function pauseTimer() {
  runTimer = false;
  timerflashing = false;
  $("#pause").hide();
  $("#resume").show();
  document.getElementById("button-id-you-want-to-change").innerHTML = "new-name-of-button"
}

/**
 * @type function 
 * @function resumeTimer
 * @pre None
 * @post resumes Timer and changes buttons as needed
 * @summary resume startTimer
 */
function resumeTimer() {
  if (runTimer == false) {
    runTimer = true;
    $("#resume").hide();
    $("#pause").show();
  }
}

/**
 * @type function 
 * @function resetTimer
 * @pre None
 * @post reset Timer and changes buttons as needed
 * @summary reset startTimer
 */
function resetTimer() {
  currentTimeTimer.setHours(0);
  currentTimeTimer.setMinutes(0);
  currentTimeTimer.setSeconds(0);
  $("#start").show();
  $("#pause").hide();
  $("#resume").hide();
  runTimer = false;
  timerflashing = true;
  lastTimeTimer = currentTimeTimer.toLocaleTimeString('en-US', optionsTimer);
}
