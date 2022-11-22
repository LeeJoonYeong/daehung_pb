
// 탑 이동버튼
$(document).ready(function() {
     
	$(".btn_gotop").hide();
	$(function() {

		$(window).scroll(function() {
			if ($(this).scrollTop() > 260) {
				$('.btn_gotop').fadeIn(600);
			} else {
				$('.btn_gotop').fadeOut(600);
			}
		});
	});
	$('.btn_gotop').click(function(){
	$('html, body').animate({scrollTop:0},600);
	return false;
	});
});



// 텝 상단 고정버튼
$( document ).ready( function() {
	var Offset = $( '.tabmenu_Wrap' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > Offset,'top' ) {
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



//탑 메뉴 노출 설정
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