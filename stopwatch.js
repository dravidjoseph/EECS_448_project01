/**
 * @name stopWatchObject
 * @function stopWatchObject() 
 * @summary Object that handles functions related to stopwatch string
 *
 */

var stopWatchObject = function(){
	
	//Private variables
	var startStopWatchAt = 0;
	var stopTime = 0;
	
	//Function that returns the initial stopwatch object
	var now  = function(){
		return(new Date()).getTime()
	}
	//Public Methods for stopWatchObject
	
	this.start = function(){
		startStopWatchAt = startStopWatchAt ? startStopWatchAt : now()
	}
	
	//Stop the stopwatch
	this.stop = function(){
		stopTime = startStopWatchAt ? stopTime + now() - startStopWatchAt : stopTime
	}
	
	this.time = function(){
		return stopTime + (startStopWatchAt ? now() - startStopWatchAt : 0)
	}
	
}


var stopWatch = new stopWatchObject();
var stopWatchString;
var clockTimeInterval;

function padStopWatchString(timeString, size){
	var newTimeString = "0000" + num
	return newTimeString.substr(newTimeString.length - size)
}

function formatTime(time){
	var hours = 0
	var minutes = 0
	var seconds = 0
	var ms = 0
	var newTime = ''
	
	hours = Math.floor(time/(60*60*1000))
	time = time % (60*60*1000)
	
	minutes = Math.floor(time/(60*1000))
	time = time % (60*1000)
	
	seconds = Math.floor(time/(1000))
	ms = time % 1000
	
	newTime = padStopWatchString(hours,2) + ':' + padStopWatchString(minutes,2) + ":" + padStopWatchString(seconds,2) + ":"+ padStopWatchString(ms,3)
	return newTime;
	
}