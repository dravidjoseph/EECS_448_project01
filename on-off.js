/**
 * @type function
 * @function on-off
 * @param #turn-off = turns off display
 * @param #display = shows or hides display
 * @param #off-mode = shows or hides off-mode screen
 * @pre valid parameters
 * @post updates screen
 * @summary turns "off the screen"
 */

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
