$(function(){
    var sw = $(window).width();
    $("html").css("font-size",sw/1080*32.8125+"px");
    if(sw>=640){
        $(".up img").css("width","150%");
        $(".down img").css("width","150%");
    }
    if(sw>=1080){
        console.log($(".up img").width());
        $(".up img").css("width","250%");
        $(".down img").css("width","250%");
    }
    
	$('#dowebok').fullpage({
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 1 && direction =='down'){
                $(".down").show();
                $(".section2_word").css({
                  "-webkit-animation-name": "hmn",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "1s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
                $(".section2_img").css({
                  "-webkit-animation-name": "upimg",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "1.5s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
                
            }

            else if(index == 2 && direction == 'down'){
                  $(".section3_word").css({
                  "-webkit-animation-name": "hmn",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "1s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
                  $(".section3_img").css({
                  "-webkit-animation-name": "upimg",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "2s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
            }else if(index == 3 && direction == 'down'){
                  $(".section4_word").css({
                  "-webkit-animation-name": "hmn",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "1s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
                  $(".section4_img1").css({
                  "-webkit-animation-name": "fadeInUp",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "1s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
 
                 $(".section4_img2").css({
                  "-webkit-animation-name": "rotateInDownLeft",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "2s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
                $(".section4_img3").css({
                  "-webkit-animation-name": "rotateInDownRight",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "3s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
            }else if(index == 4 && direction == 'down'){
                  $(".section5_word").css({
                  "-webkit-animation-name": "worddown",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "0.5s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
                  $(".section5_img1").css({
                  "-webkit-animation-name": "fadeInUp",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "0.5s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
 
                 $(".section5_img2").css({
                  "-webkit-animation-name": "rotateInDownLeft",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "1s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
                $(".section5_img3").css({
                  "-webkit-animation-name": "rotateInDownRight",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "1.5s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
                $(".section5_img4").css({
                  "-webkit-animation-name": "bounceInUp",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "2s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
            }else if(index == 5 && direction == 'down'){
                    $(".up").hide();
                  $(".section6_word").css({
                  "-webkit-animation-name": "worddown",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "0.5s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
                  $(".section6_img1").css({
                  "-webkit-animation-name": "fadeInUp",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "0.5s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
 
                 $(".section6_img2").css({
                  "-webkit-animation-name": "rotateInDownLeft",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "1s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
                $(".section6_img3").css({
                  "-webkit-animation-name": "rotateInDownRight",
                  "-webkit-animation-duration": "1s",
                  "-webkit-animation-delay": "1.5s",
                  "-webkit-animation-iteration-count": "1",
                  "-webkit-animation-fill-mode": "both"
                });
            }else if(index == 6 && direction == 'up'){
                 $(".up").show();
            }else if(index == 2 && direction == 'up'){
                 $(".down").hide();
            }
        }
    });
    var as = true;
     setInterval(function(){
        var str = as ? "img/huchuan1.png" : "img/huchuan2.png"
        var str2 = as ? "img/chakan1.png" : "img/chakan2.png"
            $(".section2_img img").attr("src",str);
            $(".section3_img img").attr("src",str2);
            as = !as;
        }, 500); 
     $(".section6_btn").click(function(){
        $(".shade").show();
    })
    $(".shade").mousedown(function(){
        $(".shade").hide();
    })

});