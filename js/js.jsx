//marqee
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
	})
})

//gwrapBox
$(function(){
    $(".gWrapBox .gameWrap.hotgame").each(function(){
        if($(this).find("li").length > 2)
        {
            $(".nextBtn")
            .addClass("active");
        }
    })

    $(".gWrapBox .gameWrap.classic").each(function(){
        if($(this).find("li").length > 2)
        {
            $(".nextBtnC")
            .addClass("active");
        }
    })

    var hotN = 0;
    var clasN = 0;

    $(".nextBtn").on("click",function(){
        var total = $(this).prev(".gameWrap.hotgame").find("li").length;
        var n = Math.round((total - 3));
        
        hotN ++;

        $(".gWrapBox .gameWrap.hotgame")
        .css("transform","translateX("+ (-110 * hotN) +"px)");

        if(hotN == n)
        {
            hotN == n;

            $(this)
            .removeClass("active");
        }
    })

     $(".nextBtnC").on("click",function(){
         var total = $(this).prev(".gameWrap.classic").find("li").length;
         var n = Math.round((total - 3));
        
         clasN ++;

         $(".gWrapBox .gameWrap.classic")
         .css("transform","translateX("+ (-110 * clasN) +"px)");

         if(clasN == n)
         {
             clasN == n;

             $(this)
             .removeClass("active");
         }
     })
})


//backTOtop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
            $(".goTop")
            .addClass("display")
        } else{
            $(".goTop")
            .removeClass("display");
        };
	})

    $(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
            scrollTop: 0
        },500)
    }) 
})
