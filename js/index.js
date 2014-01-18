


$(function(){
 
$('body').addClass('noscroll');
$("#main").hide();
$("#entrance").hide();
$("#entrance").fadeIn(1000);
	
	$("#entrance").click(function(e){
		$( "#hello" ).effect( "pulsate", "slow");
		$("#hello").fadeOut(entrance);
	});
	
	function entrance () {
		$("#entrance").fadeOut(main);
		$(".wrapbox").fadeOut();
	}
	
	function main () {
		$("#main").fadeIn();
		$('#main').nested({minWidth: 100, gutter: 1, animate: true});
		$('body').removeClass('noscroll');	
	}
});