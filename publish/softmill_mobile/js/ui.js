//서브 페이지 탭 메뉴 (product)
$(document).ready( function() {
	var Offset = $( '.detail_tab_Wrap' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > Offset?.top ) {
		$( '.detail_tab_Wrap' ).addClass( 'fixed' );
		}
		else {
		$( '.detail_tab_Wrap' ).removeClass( 'fixed' );
		}
	});
});

//서브 페이지 탭 메뉴
$(document).ready( function() {
	var Offset = $( '.tabmenu_Wrap' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > Offset?.top ) {
		$( '.tabmenu_Wrap' ).addClass( 'fixed' );
		}
		else {
		$( '.tabmenu_Wrap' ).removeClass( 'fixed' );
		}
	});
});

// 탑 바로가기 버튼
$(window).scroll(function(){
	if ($(this).scrollTop() > 260){
		$('.btn_gotop').fadeIn(400);
	} else{
		$('.btn_gotop').fadeOut(400);
	}
});
$('.btn_gotop').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});

// 드롭다운 메뉴 (서브 페이지)
$(document).ready(function () {
    
	// 마우스 오버시 add 추가
	$(".ui_dropmenu").mouseover(function () {
		$(this).addClass("on");
	});

	// 마우스 리브 add 삭제
	$(".ui_dropmenu").mouseleave(function () {
		$(this).removeClass("on");
	});

});

// 공식대리점 텝 메뉴 (서브 페이지)
$(function(){
	$('.maps > div').hide();
	$('.agency_list a').click(function () {
		$('.maps > div').hide().filter(this.hash).fadeIn();
		$('.agency_list a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
});

// 햄버거 메뉴
$(document).ready(function(){
 
	$('.mheader_wrap .burger').on('click', function(){
		$('.dim_bg').fadeIn('linear');
		$('.ham_memu').show().fadeIn('linear').animate({
			right:0
		});
		$('body').addClass('notScroll');  
	});
	$('.close>a').on('click', function(){
		$('.dim_bg').fadeOut('linear');
		$('.ham_memu').animate({
			right: '-' + 100 + '%'
					},function(){
						$('.ham_memu').hide();          
					});
		$('body').removeClass('notScroll');
	});

});

// 햄버거 아코디온 메뉴
(function( $ ) {
	$('.cate ul').hide();
	$('.cate .menu .menulink').click(function() {
		if($(this).hasClass('active')){
		$(this).parent().next().slideUp('slow');
		$(this).removeClass('active');
		}else{
		$('.accordion').find('.active').parent().next().slideUp('slow');
		$('.accordion').find('.active').removeClass('active');
		$(this).parent().next().slideDown('slow');
		$(this).addClass('active');
		}
	});
})( jQuery );

//메인 GNB
var lastScrollTop = 0;
var delta = 55;
var fixBox = document.querySelector('.mheader_wrap');
var fixBox_sub = document.querySelector('.header_wrap');
var didScroll;

//스크롤 이벤트 
window.onscroll = function(e) {
	didScroll = true;
};

//메인 GNB 배경
$(window).scroll(function() {

	if($(this).scrollTop() > 300) {
		$(".mheader_wrap").css('background','#ffffff');
		$(".mheader_wrap").addClass('ttop');
	}
	else {
		$(".mheader_wrap").css('background','transparent');
		$(".mheader_wrap").removeClass('ttop');
	}
});

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
	if(didScroll){
		
		if(fixBox) {
			let fixBoxHeight = fixBox.offsetHeight;
			hasScrolled(fixBox, fixBoxHeight);
		} else if(fixBox_sub) {
			let fixBoxSubHeight = fixBox_sub.offsetHeight;
			hasScrolled(fixBox_sub, fixBoxSubHeight);
		}
		didScroll = false;
	}
}, 50);

// 스크롤 함수
function hasScrolled(fixbox, fixbox_height){
	var nowScrollTop = window.scrollY;
	if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
		return;
	}
	if(nowScrollTop > lastScrollTop && nowScrollTop > fixbox_height){
		//Scroll down
		fixbox.classList.add('show');
	}else{
		if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
			//Scroll up
			fixbox.classList.remove('show');
		}
	}
	lastScrollTop = nowScrollTop;
}


/* combo list */
const label = document.querySelectorAll('.label');
label.forEach(function(lb){
    lb.addEventListener('click', e => {
        let optionList = lb.nextElementSibling;
        let optionItems = optionList.querySelectorAll('.optionItem');
        clickLabel(lb, optionItems);
    })
});
const clickLabel = (lb, optionItems) => {
    if(lb.parentNode.classList.contains('active')) {
        lb.parentNode.classList.remove('active');
        optionItems.forEach((opt) => {
            opt.removeEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    } else {
        lb.parentNode.classList.add('active');
        optionItems.forEach((opt) => {
            opt.addEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    }
}
const handleSelect = (label, item) => {
    label.innerHTML = item.textContent;
    label.parentNode.classList.remove('active');
}


//main top banner
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if(!slides.length) // 슬라이드가 없다면 종료 (안전 장치)
		return;

	for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 7000); // Change image every 2 seconds
};


//main client rolling banner
window.onload = function() {
	var bannerLeft=0;
	var first=1;
	var last;
	var imgCnt=0;
	var $img = $(".banner_wraper img");
	var $first;
	var $last;

	$img.each(function() {   // 5px 간격으로 배너 처음 위치 시킴
		$(this).css("left",bannerLeft);
		bannerLeft += $(this).width()+80;
		$(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
	});

	if( imgCnt > 6 ){                //배너 6개 이상이면 이동시킴


		last = imgCnt;

		setInterval(function() {
			$img.each(function() {
				$(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
			});
			$first = $("#banner"+first);
			$last = $("#banner"+last);

			if($first.position().left < -260) {    // 제일 앞에 배너 제일 뒤로 옮김
				$first.css("left", $last.position().left + $last.width()+80 );
				first++;
				last++;
				if(last > imgCnt) { last=1; }   
				if(first > imgCnt) { first=1; }
			}
		}, 20);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 

	//깔끔하게 변경가능하다           

	}

};

