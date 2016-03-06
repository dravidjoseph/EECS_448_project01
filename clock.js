/**
 * Clock.js
 * @author Josiah Gray, Liia Butler, Paul McElroy, Francinaldo Almeida
 */
 //author, constructor, default, description, event, function, global
 //param, public, NAME, returns, pre, post, SUMMARY, type
//date is a built in javascript method that is based on time value since 01/01/70
/**
 * @name currentTime 
 * @type Date
 * @summary New Date type to keep track of current time ]
 */
var currentTime = new Date();
/**
 * @name lastTime
 * @type Date
 * @summary Date type to keep track of previous time 
 */
var lastTime = currentTime;
/**
 * @name timerInterval
 * @function setInterval(function, interval) 
 * @summary named function to use to call given function after given interval in milliseconds
 * @param function = function to be evaluated after set time
 * @param integer interval = interval to wait until function will be evaluated, in milliseconds.
 *
 */
var timerInterval = setInterval(timer, 500);
/**
 * @name milTime
 * @type Boolean
 * @summary tells whether or not the clock is to be displayed in military time, or not military time, standard time.
 */
var milTime = false;
/**
 * The method that alters lastTime is as follows...
 * @function toLocaleString(string timeZone, boolean if displayed in 12 hour)
 * @param string timeZone = 'en-US', for a US timezone
 * @param bool hour12 = !milTime, whether time should be displayed in not military time, 12 hour, or 24 hours 
 * @return string with time given parameters
 */
lastTime = currentTime.toLocaleTimeString('en-US', {hour12: !(milTime)});

/**
 * @name options 
 * @type variable
 * @summary variable for clock display options
 *
 */
var options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTime};
/**
 * @name run
 * @type Boolean
 * @summary tells whether or not the clock is running, or not running, meaning it's currently being set
 */
var run = true;
/**
 * @name setMode
 * @type string
 * @summary can be "month", "day", "year", "hours", "minutes", or "seconds" 
 * @default = hours
 */
var setMode = "month"; 


/**
 * @type function 
 * @function setOptions
 * @param milTime
 * @pre valid milTIme
 * @post ensures proper elements are displayed, if clock is running, will update clock 
 * @summary Displays proper options
 */
function setOptions(milTime){
  return {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTime};
}

/**
 * @type function 
 * @function timer 
 * @pre none
 * @post ensures proper elements are displayed, if clock is running, will update clock 
 * @summary Controls the display of the clock. If clock is running then will change accordingly, otherwise will hold the time as user sets it.
 */
 function timer() {
	 //if clock is running 
    if (run) {
		//make sure time is being displayed 
      document.getElementById("time").hidden = false;
	  //updates current time 
      currentTime.setMilliseconds((currentTime.getMilliseconds() + 500));
      //options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTime};
      lastTime = currentTime.toLocaleString('en-US', options);
	  //updates time's html id
      document.getElementById("time").innerHTML = lastTime;
    }
	//if clock is being set
    else {
		//updates time's html id 
      document.getElementById("time").innerHTML = lastTime;
	  //make clock string flash to represent it being set
      flashTime();
    }
 }

 /**
 * @type function
 * @function toggleType
 * @pre clock is in set mode
 * @post will update setMode string and image being displayed in browser
 * @summary Toggles through each type of set mode as the click comes in from the user, updates setMode variable and the image being displayed in browser 
 */
var toggleType = function() {
	//if setMode is on month 
  if(setMode == "month")
  {
    //toggles setMode to day
    setMode = "day";
  }
  //if setMode is on day 
  else if(setMode == "day")
  {
    //toggles setMode to year
    setMode = "year";
  }
  //if setMode is on year 
  else if(setMode == "year")
  {
    //toggles setMode to hours
    setMode = "hours";
  }
  //if setMode is on hours 
  else if(setMode == "hours")
  {
	  //toggles setMode to minutes
    setMode = "minutes";
  }
  //if setMode is minutes 
  else if(setMode == "minutes")
  {
	  //toggles setMode to seconds
    setMode = "seconds";
  }
  //otherwise, setMode is seconds 
  else
  {
	  //toggles setMode to month 
    setMode = "month";
  }

  $("#timePart").html(setMode);
}

/**
 * @name on 
 * @type Boolean
 * @summary tells whether or not the time string is being displayed or hidden during the setting mode 
 */
var on = true;

/**
 * @type function
 * @function flashTime 
 * @pre clock is in setting mode 
 * @post toggles time string between shown and hidden 
 * @summary creates flashing effect on clock by toggling time string between shown and hidden 
 */
var flashTime = function(){
	//if time string should be on 
    if(on){
		//show time string 
        document.getElementById("time").hidden = false;
		//next time flashTime is called, time should go to false 
        on = false;
		//time string should be off 
    } else {
		//hide time string 
        document.getElementById("time").hidden = true;
		//next time flashTime is called, time should go to true 
        on = true;
    }

}

/**
 * @type function
 * @function incrementTime 
 * @pre clock is in setting mode 
 * @post will increment the hours, minutes, or seconds based on setMode 
 * @summary will add one to the hours minutes or seconds based on setMode, and increment the next interval if needed
 */
var incrementTime = function() {
	//if set mode is effecting the days
    document.getElementById("time").hidden = false;
  if(setMode == "month")
  {
    //add one to current days 
    currentTime.setMonth((currentTime.getMonth() + 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
  else if(setMode == "day")
  {
    //add one to current day
    currentTime.setDate((currentTime.getDate() + 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
  else if(setMode == "year")
  {
    //add one to current year 
    currentTime.setYear((currentTime.getFullYear() + 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
  else if(setMode == "hours")
  {
	  //add one to current hours 
    currentTime.setHours((currentTime.getHours() + 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
  //if set mode is effecting minutes 
  else if(setMode == "minutes")
  {
	  //add one to current minutes 
    currentTime.setMinutes((currentTime.getMinutes() + 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options); 
    document.getElementById("time").innerHTML = lastTime;
  }
  //if set mode is effecting seconds 
  else
  {
	  //add one to current seconds 
    currentTime.setSeconds((currentTime.getSeconds() + 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
}

/**
 * @type function
 * @function decrementTime 
 * @pre clock is in setting mode 
 * @post will decrement the hours, minutes, or seconds based on setMode 
 * @summary will subtract one from the hours minutes or seconds based on setMode, and decrement the next interval if needed
 */
var decrementTime = function() {
	//if set mode is effecting hours 
    document.getElementById("time").hidden = false;
  if(setMode == "month")
  {
    //add one to current days 
    currentTime.setMonth((currentTime.getMonth() - 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
  else if(setMode == "day")
  {
    //add one to current day
    currentTime.setDate((currentTime.getDate() - 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
  else if(setMode == "year")
  {
    //add one to current year 
    currentTime.setYear((currentTime.getFullYear() - 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
  else if(setMode == "hours")
  {
	  //subtract one from current hours 
    currentTime.setHours((currentTime.getHours() - 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
  //if set mode is effecting minutes 
  else if(setMode == "minutes")
  {
	  //subtract one from current minutes 
    currentTime.setMinutes((currentTime.getMinutes() - 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
  //if set mode is effecting seconds 
  else
  {
	  //subract one from current seconds 
    currentTime.setSeconds((currentTime.getSeconds() - 1));
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
  }
}

/**
 * @type function
 * @function set24hrs 
 * @pre none 
 * @post set milTime to true, update options and lastime accordingly 
 * @summary updates milTime to true, updates options and lastTime and updates time in html to be outputted 
 */
var set24hrs = function () {

    milTime = true;
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
    $("#toggleMode").attr("onclick","set12hrs()");
    $("#toggleMode").html("See in 12 hours mode");

}

/**
 * @type function 
 * @function set12hrs 
 * @pre none 
 * @post set milTime to false, update options and lastime accordingly 
 * @summary updates milTime to false, updates options and lastTime and updates time in html to be outputted 
 */
var set12hrs = function () {

    milTime = false;
    options = setOptions(milTime);
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
    $("#toggleMode").attr("onclick","set24hrs()");
    $("#toggleMode").html("See in 24 hours mode");
}

/**
 * @type function
 * @function toggleSet
 * @pre none 
 * @post toggles from run to not run, meaning clock is being set, updates corresponding components accordingly 
 * @summary if user toggles set button, function will ensure setMode goes to default hours, run will toggle to true or false and displayed documents will react accordiningly.
 */
var toggleSet = function(){
	//set setmode to hour 
  setMode = "month";
	
  // toggle running state 
  run = !run;
  
  // toggle panel settings and set button
  $("#settingsPanel").toggle();
  $("#setbtn").toggle();
}

/**
 * @type function
 * @function setTime 
 * @param hours = hours to display 
 * @param minutes = minutes to display
 * @param seconds = seconds to display 
 * @pre valid hours minutes and seconds passed  
 * @post update function, sets hours minutes and seconds to those passed as parameters 
 * @summary calls currentTime's built in methods to set hours to param hours, set minutes to param minutes and set seconds to param seconds. 
 */
var setTime = function(hours, minutes, seconds){
  currentTime.setHours(hours);
  currentTime.setMinutes(minutes);
  currentTime.setSeconds(seconds);
}
