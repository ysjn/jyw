


$(function(){
 
$("#main").hide();
main();
	
	function main () {
		$("#main").fadeIn();
		$('#main').nested({minWidth: 100, gutter: 1, animate: true});
	}
});