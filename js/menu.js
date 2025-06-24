$(document).ready(function(){
    $('.menu-open').click(function(){
        $('.mo-la').animate({left: 0});
    });
    $('.menu-close').click(function(){
         $('.mo-la').animate({left: '100%'})
    });

    $('.list__hide').hide();
    $('.fold-tit > span').click(function(){
        if(
            $(this).hasClass('open')){
                $(this).text("기타 경력 펼치기 🔽");
                $(this).removeClass('open');
                $('.list__hide').hide();
        }else{
            $(this).text("기타 경력 접기 🔼");
            $(this).addClass('open');
            $('.list__hide').show();
        }
    })

    //tab 메뉴
    var tabBtn = $('#tab > li');
	var tabCont = $('#tab-cont > div');
	
	tabCont.hide().eq(0).show();
	
	tabBtn.click(function(){
		var target = $(this);
		
		var index = target.index();
		tabBtn.removeClass('on');
		target.addClass('on');
		tabCont.css("display","none");
		tabCont.eq(index).css("display","block");
	});

    
    //aos
    AOS.init();

    
    //최상단으로 이동
    $('#scroll_top').click(function(){
        $('html, body').animate({scrollTop : 0}, 400);
        return false;
    });
});
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('#scroll_top').fadeIn();
    }else{
        $('#scroll_top').fadeOut();
    }
});