var minSize = 10;	//minimum font size
var maxSize = 90;	//maximum font side


/**
 * @name zoomIn
 * @function click
 * @summary Zooms in the clock
 *
 */
$('#zoomIn').click(function(){    
	fontSize= parseInt($('#time').css('font-size'));
	newFontSize = fontSize + 10;

	if(newFontSize <= maxSize){
		$("#zoomOut").attr("disabled",false);
		$('#time').css('font-size', newFontSize);
	}

	if(newFontSize==maxSize){
		$("#zoomIn").attr("disabled",true);
	}
});

/**
 * @name zoomOut
 * @function click
 * @summary Zooms Out the clock
 *
 */
$('#zoomOut').click(function(){
	fontSize= parseInt($('#time').css('font-size'));
	newFontSize = fontSize - 10;

	if(newFontSize >= minSize){
		$("#zoomIn").attr("disabled",false);
		$('#time').css('font-size', newFontSize);
	}

	if(newFontSize==minSize){
		$("#zoomOut").attr("disabled",true);
	}
});

/**
 * @name zoomIn
 * @function click
 * @summary Zooms in the stopwatch
 *
 */
$('#zoomInSW').click(function(){    
	fontSize= parseInt($('#stop').css('font-size'));
	newFontSize = fontSize + 10;

	if(newFontSize <= maxSize){
		$("#zoomOutSW").attr("disabled",false);
		$('#stop').css('font-size', newFontSize);
	}

	if(newFontSize==maxSize){
		$("#zoomInSW").attr("disabled",true);
	}
});

/**
 * @name zoomIn
 * @function click
 * @summary Zooms out the stopwatch
 *
 */
$('#zoomOutSW').click(function(){
	fontSize= parseInt($('#stop').css('font-size'));
	newFontSize = fontSize - 10;

	if(newFontSize >= minSize){
		$("#zoomInSW").attr("disabled",false);
		$('#stop').css('font-size', newFontSize);
	}

	if(newFontSize==minSize){
		$("#zoomOutSW").attr("disabled",true);
	}
});
/**
 * @name zoomInTimer
 * @function click
 * @summary Zooms in the timer
 *
 */  
$('#zoomInTimer').click(function(){    
	fontSize= parseInt($('#timerTimer').css('font-size'));
	newFontSize = fontSize + 10;

	if(newFontSize <= maxSize){
		$("#zoomOutTimer").attr("disabled",false);
		$('#timerTimer').css('font-size', newFontSize);
	}

	if(newFontSize==maxSize){
		$("#zoomInTimer").attr("disabled",true);
	}
});
/**
 * @name zoomOutTimer
 * @function click
 * @summary Zooms in the timer
 *
 */
$('#zoomOutTimer').click(function(){
	fontSize= parseInt($('#timerTimer').css('font-size'));
	newFontSize = fontSize - 10;

	if(newFontSize >= minSize){
		$("#zoomInTimer").attr("disabled",false);
		$('#timerTimer').css('font-size', newFontSize);
	}

	if(newFontSize==minSize){
		$("#zoomOutTimer").attr("disabled",true);
	}
});  