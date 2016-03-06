/**
 * Timer.js
 * @author Josiah Gray, Liia Butler, Paul McElroy, and Jinuk Park
 */


var currentTimeTimer = new Date();

currentTimeTimer.setHours(0);
currentTimeTimer.setMinutes(0);
currentTimeTimer.setSeconds(0);

var lastTimeTimer = currentTimeTimer;

var timerIntervalTimer = setInterval(timerTimer, 500);

var milTimeTimer = true;

lastTimeTimer = currentTimeTimer.toLocaleTimeString('en-US', { hour12: !(milTimeTimer) });

var optionsTimer = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTimeTimer };

var runTimer = false;

var setModeTimer = "hours";


function timerTimer() {
  if (currentTimeTimer.getHours() == 0 && currentTimeTimer.getMinutes() == 0 && currentTimeTimer.getSeconds() == 0) {
    runTimer = false;
  }
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

var onTimer = true;

var flashTimeTimer = function() {
  if (onTimer) {
    document.getElementById("timerTimer").hidden = false;
    onTimer = false;
  } else {
    document.getElementById("timerTimer").hidden = true;
    onTimer = true;
  }
}

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

var toggleSetTimer = function() {
  setModeTimer = "hours";
  $("#settingsPanelTimer").toggle();
  $("#setbtnTimer").toggle();
}


var setTimeTimer = function(hours, minutes, seconds) {
  currentTimeTimer.setHours(hours);
  currentTimeTimer.setMinutes(minutes);
  currentTimeTimer.setSeconds(seconds);
}

$("#resume").hide();
$("#pause").hide();

var timerflashing = true;

function startTimer() {
  runTimer = true;
  $("#resume").hide();
  $("#pause").show();
  $("#start").hide();
}

function pauseTimer() {
  runTimer = false;
  timerflashing = false;
  $("#pause").hide();
  $("#resume").show();
  document.getElementById("button-id-you-want-to-change").innerHTML = "new-name-of-button"
}

function resumeTimer() {
  if (runTimer == false) {
    runTimer = true;
    $("#resume").hide();
    $("#pause").show();
  }
}

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
