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