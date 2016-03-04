var minSize = 10;
var maxSize = 90;

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