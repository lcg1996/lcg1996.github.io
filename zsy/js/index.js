$(function(){
        $(".nav a:first").css(
            "color","#fff"
        );
        $(".button").click(function(){    
            //btn获取焦点时在其旁边显示div
            var btn = $(".button");           
            var offset = btn.offset();
            //先后设置div的内容、位置，最后显示出来（渐进效果）
            $('.nav').css('left',offset.left - 18 + 'px').css('top',offset.top + 56 + 'px');
            $(".nav").fadeToggle("slow");
            $('.arrow').css('left',offset.left + 21 + 'px').css('top',offset.top + 46 + 'px');
            $(".arrow").toggleClass("show");
            event.stopPropagation();//点击an元素的时候，阻止其他点击事件影响该事件。阻止冒泡时间                                   
        });
        $(".nav").click(function(){
            $(".nav").fadeIn("slow");  
            event.stopPropagation();//点击an元素的时候，阻止其他点击事件影响该事件。阻止冒泡时间                                
        });              
        // $("body").click(function(){
        //     $(".arrow").removeClass("show");
        //     $(".nav").fadeOut("slow");//点击body元素后body切换：设置sh样式和移除sh样式
        // }); 
        
        if ((window.innerWidth >= 320) && (window.innerHeight <= 480)) {
          $("body").click(function(){
            $(".arrow").css("display","none");
            $(".nav").fadeOut("slow");//点击body元素后body切换：设置sh样式和移除sh样式
          }); 
          event.stopPropagation();//点击an元素的时候，阻止其他点击事件影响该事件。阻止冒泡时间               
        }; 
            
      });

//轮播切换
$(function(){

    // var ul = $(".seroll ul"),
    //             liArr = ul.find("li"),
    //             len = liArr.length,
    //             runIndex = 0;
    //         $(".next").click(function(){
    //             var curLi = ul.find(".show"),
    //                 curIndex = curLi.index();
    //             runIndex++;
    //             if(runIndex>=len){
    //                 runIndex = 0;
    //             }
    //             liArr.eq(curIndex).removeClass("show");
    //             liArr.eq(runIndex).addClass("show");
    //         });
    //         $(".pre").click(function(){
    //             var curLi = ul.find(".show"),
    //                 curIndex = curLi.index();
    //             runIndex--;
                
    //             if(runIndex<0){
    //                 runIndex = len-1;
    //             }
    //             liArr.eq(curIndex).removeClass("show");
    //             liArr.eq(runIndex).addClass("show");
    //         });
            $(".page a:first").click(function(){
                $(".scroll li:first").addClass("show");
                $(".scroll li:first").siblings().removeClass("show");
            });
            $(".page a:eq(1)").click(function(){
                $(".scroll li:eq(1)").addClass("show");
                $(".scroll li:eq(1)").siblings().removeClass("show");
            });
            $(".page a:last").click(function(){
                $(".scroll li:last").addClass("show");
                $(".scroll li:last").siblings().removeClass("show");
            });

});
