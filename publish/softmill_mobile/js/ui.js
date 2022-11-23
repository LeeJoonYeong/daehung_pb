
// 탑 이동버튼
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

// 텝 상단 고정버튼
$( document ).ready( function() {
	var Offset = $( '.tabmenu_Wrap' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > Offset.top ) {
		$( '.tabmenu_Wrap' ).addClass( 'fixed' );
		}
		else {
		$( '.tabmenu_Wrap' ).removeClass( 'fixed' );
		}
	});
});

//제품 텝 상단 고정버튼
$(document).ready( function() {
	var Offset = $( '.detail_tab_Wrap' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > Offset,'top' ) {
		$( '.detail_tab_Wrap' ).addClass( 'fixed' );
		}
		else {
		$( '.detail_tab_Wrap' ).removeClass( 'fixed' );
		}
	});
});

// dropdown combo script
var dropdown = function(wrap){
	var m = new Object();
	m.debug = false;
	
	m.temp = {
		wrapper: wrap,
		btn: {
			open: $(".btn_drop_show", wrap),
			close: $(".btn_drop_close", wrap)
		},
		optionBox: $(".drop_wrap", wrap)
	};
	
	m.fn = {
		notice: function(caller, msg){
			if(m.debug){
				console.log('[DROPDOWN:'+caller+']\n-> ', msg);
			};
		},
		btnToggle: function(action){
			m.temp.btn.open.toggle(!action);
			m.temp.btn.close.toggle(action);
		},
		boxToggle: function(action){
			m.temp.optionBox.toggle(action);
			m.fn.notice.call(this, "boxToggle", 'Dropdown toggle : '+action+'!');
			m.fn.btnToggle(action);
		},
	};
	
	m.init = function(){
		m.fn.notice.call(this, "init", 'Run');
		m.temp.btn.open.off("click").on("click", function(){m.fn.boxToggle(true);return false;});
		m.temp.btn.close.off("click").on("click", function(){m.fn.boxToggle(false);return false;});
	}();
};


//메인 탑 메뉴 노출 설정
 var lastScrollTop = 0;
 var delta = 55;
 var fixBox = document.querySelector('.mheader_wrap');
 var fixBoxHeight = fixBox.offsetHeight;
 var didScroll;
 //스크롤 이벤트 
 window.onscroll = function(e) {
	 didScroll = true;
 };

 //0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
 setInterval(function(){
	 if(didScroll){
		 hasScrolled();
		 didScroll = false;
	 }
 }, 50);

 function hasScrolled(){
	 var nowScrollTop = window.scrollY;
	 if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
		 return;
	 }
	 if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
		 //Scroll down
		 fixBox.classList.add('show');
	 }else{
		 if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
			 //Scroll up
			 fixBox.classList.remove('show');
		 }
	 }
	 lastScrollTop = nowScrollTop;
 }

 //GNB plus
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



//서브 탑 메뉴 노출 설정
var lastScrollTop = 0;
var delta = 55;
var fixBox = document.querySelector('.header_wrap');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;
//스크롤 이벤트 
window.onscroll = function(e) {
	didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
	if(didScroll){
		hasScrolled();
		didScroll = false;
	}
}, 50);

function hasScrolled(){
	var nowScrollTop = window.scrollY;
	if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
		return;
	}
	if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
		//Scroll down
		fixBox.classList.add('show');
	}else{
		if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
			//Scroll up
			fixBox.classList.remove('show');
		}
	}
	lastScrollTop = nowScrollTop;
};

//Combo list  

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

$img.each(function(){   // 5px 간격으로 배너 처음 위치 시킴
	$(this).css("left",bannerLeft);
	bannerLeft += $(this).width()+16;
	$(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
});

if( imgCnt > 6){                //배너 6개 이상이면 이동시킴


	last = imgCnt;

	setInterval(function() {
		$img.each(function(){
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