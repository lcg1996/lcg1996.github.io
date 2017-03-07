

 $(function(){
    var speed = 1000;
    $(window).scroll(function(event) {
      var aaa = $(window).scrollTop();
      if(aaa >= 100){
        $('.return').fadeIn(500);
      }else{
        $('.return').fadeOut(500);
      }
    });
    $('.return').click(function(){
      $('html,body').animate({scrollTop:'0px'},speed);
       return false;
    });
  });

 $(function(){
 	$(".red").mouseover(function(){
	    var div=$(".red");
	    div.animate({height:'300px',opacity:'0.4'},"slow");
	    div.animate({width:'300px',opacity:'0.8'},"slow");
	    div.animate({height:'100px',opacity:'0.4'},"slow");
	    div.animate({width:'100px',opacity:'0.8'},"slow");
	    return false;
 	});
 });