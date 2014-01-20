


$(function(){
$("#headWrap").hide();
$("#main").hide();


var current_frame, total_frames, path, length, handle, myobj;
myobj = document.getElementById('logo').cloneNode(true);

var init = function() {
  current_frame = 0;
  total_frames = 60;
  path = new Array();
  length = new Array();
  for(var i=0; i<3;i++){
    path[i] = document.getElementById('i'+i);
    l = path[i].getTotalLength();
    length[i] = l;
    path[i].style.strokeDasharray = l + ' ' + l; 
    path[i].style.strokeDashoffset = l;
  }
  handle = 0;
}
var draw = function() {
   var progress = current_frame/total_frames;
   if (progress > 1) {
     window.cancelAnimationFrame(handle);
   } else {
     current_frame++;
     for(var j=0; j<path.length;j++){
		 path[j].getBoundingClientRect();
		 path[j].style.transition = path[j].style.WebkitTransition =  '1s ease-out';
	     path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
     }
     handle = window.requestAnimationFrame(draw);
   }
};
	
init();
draw();

$('.flexslider').flexslider();

	setTimeout(function(){
		$("#logo").animate({ 'top': '-2px', 'left': '12px', width: '70px', height: '70px', opacity: '0.2'},{duration: 800, easing: "swing"});
		$("#logo").fadeOut("slow",function(){
			$("#main").fadeIn();
		});
		$("#headWrap").fadeIn(3000);
	}, 3200);
	
	
}); //initial function