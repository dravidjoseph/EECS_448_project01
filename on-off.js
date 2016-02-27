$(function(){
	$("#turn-off").click(function() {
		$("#display").hide();
		$("#off-mode").show();
	});

	$("#turn-on").click(function() {
		$("#off-mode").hide();
		$("#display").show();
	});
});