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


	$('.header_wrap .burger').on('click', function(){
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

		var offset = $('.accordion').find('.active').parent().parent().offset();  

		const cate_list = document.querySelectorAll('.accordion > .cate');
		let total_height = 0;
		cate_list.forEach((el) => {
			total_height += el.getBoundingClientRect().height;
		});

		// console.log('offset.top: ', offset.top);
		// console.log('total_height: ', total_height);
		// console.log($(this).hasClass('intro'));

		if($(this).hasClass('intro')) {
			$('.accordion').animate({scrollTop: (total_height + 400 - offset.top)}, 600);
		}

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
// var slideIndex = 0;
// showSlides();

// function showSlides() {
// 	var i;
// 	var slides = document.getElementsByClassName("mySlides");
// 	var dots = document.getElementsByClassName("dot");

// 	if(!slides.length) // 슬라이드가 없다면 종료 (안전 장치)
// 		return;

// 	for (i = 0; i < slides.length; i++) {
// 	slides[i].style.display = "none";  
// 	}
// 	slideIndex++;
// 	if (slideIndex > slides.length) {slideIndex = 1}    
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	}
// 	slides[slideIndex-1].style.display = "block";  
// 	dots[slideIndex-1].className += " active";
// 	setTimeout(showSlides, 7000); // Change image every 2 seconds
// };


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
		bannerLeft += $(this).width() + 70;
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
				$first.css("left", $last.position().left + $last.width() + 70 );
				first++;
				last++;
				if(last > imgCnt) { last=1; }   
				if(first > imgCnt) { first=1; }
			}
		}, 20);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 

	//깔끔하게 변경가능하다           

	}

};

/* depth3 tab menu 활성화 */
const tabmenuList = document.querySelectorAll('.tabmenu li');
tabmenuList?.forEach(el => {
	let target = el.firstElementChild;
	if(target.href.replace(/^.*\//, '') === window.location.pathname.replace(/^.*\//, '')) { // 현재 주소와 탭 메뉴 매칭
		target.classList.add('selected');
	}
});
/* //depth3 tab menu 활성화 */

/* 공통 - 팝업 닫기 */
const btn_carousel_close = document.querySelectorAll('.pop_close_btn');
if(btn_carousel_close.length) {

	for (const el of btn_carousel_close) {
		el.addEventListener('click', () => {

			const popup_wrap = el.parentElement.parentElement;

			popup_wrap.classList.remove('active');
			document.body.style.overflowY = 'initial'; // 스크롤 드러내기

		});
	}

}
/* //공통 - 팝업 닫기 */

/* 공통 - 팝업 닫기 (유형2) */
const btn_dele = document.querySelectorAll('.dele');
if(btn_dele.length) {

	for (const el of btn_dele) {
		el.addEventListener('click', () => {

			const popup_wrap = el.parentElement.parentElement.parentElement;

			popup_wrap.classList.remove('active');
			// popup_wrap.classList.add('hidden'); // 이 클래스는 고객지원 - 견적 문의 - 제품 선택 팝업 창 전용입니다.
			document.body.style.overflowY = 'initial'; // 스크롤 드러내기

		});
	}

}
/* //공통 - 팝업 닫기 (유형2) */

/* 공통 - 임시 고객센터 팝업 */
const link_customer_center = document.querySelectorAll('.link_customer_center');
if(link_customer_center.length) { // 안전 장치
	
	for (const el of link_customer_center) {
		el.addEventListener('click', () => {

			document.body.style.overflow = 'hidden'; // 메인 페이지 스크롤 숨김

			const popup_customer_center = document.querySelector('.layer_popup_customer_center');
			popup_customer_center.classList.add('active');

		});
	}

}
/* //공통 - 임시 고객센터 팝업 */

/* 메인 - 배너 슬라이드 */
mainBannerSlide();
function mainBannerSlide() {

	const slideshow_container = document.querySelector('.slideshow-container');
	if(slideshow_container) { // 안전 장치

		const banner_list 				 = document.querySelectorAll('.slideshow-container > a');
		const tag_banner_total_num = document.querySelector('.banner_num_wrap > span > i');
		const SlideSecond 				 = 5; // 메인 배너 슬라이드 시간 (단위: 초)

		let banner_list_count = banner_list.length; // 현재 존재하는 배너 갯수
		let banner_cur_count 	= 1; 									// 현재 베너 슬라이드 카운트

		tag_banner_total_num.textContent = banner_list_count.toString().padStart(2, '0'); // 배너 총 갯수 태그에 지정

		let setInterval_id = setInterval(bannerNextChange, SlideSecond * 1000);

		const btn_banner_prev = document.querySelector('.banner_num_wrap > button:first-child');
		const btn_banner_next = document.querySelector('.banner_num_wrap > button:last-child');

		btn_banner_next.addEventListener('click', () => {

			// console.log('다음 배너 클릭');

			clearInterval(setInterval_id);

			bannerNextChange();

			setInterval_id = setInterval(bannerNextChange, SlideSecond * 1000);

		});

		btn_banner_prev.addEventListener('click', () => {

			// console.log('이전 배너 클릭');

			clearInterval(setInterval_id);

			bannerPrevChange();

			setInterval_id = setInterval(bannerNextChange, SlideSecond * 1000);

		});

		// 배너 교체 슬라이드 함수 (다음 배너)
		function bannerNextChange() {

			const banner_list 		 		 = document.querySelectorAll('.slideshow-container > a');
			const tag_banner_cur_num   = document.querySelector('.banner_num_wrap > span > b');

			const banner_list_count 	 = banner_list.length; // 현재 존재하는 배너 갯수

			let cur_banner  = undefined; // 현재 켜져있는 배너
			let next_banner = undefined; // 다음 켜질 배너

			// 배너 리스트 순회 중 켜져있는 배너 지정
			for (const el of banner_list) { 

				if(el.classList.contains('active')) {
					cur_banner = el;
				}

			}

			cur_banner.classList.remove('active'); // 현재 켜져있는 배너 끄기

			if(banner_cur_count === banner_list_count) { // 마지막 순서 일 때

				next_banner = banner_list[0]; // 다시 첫 번째 배너로 지정
				banner_cur_count = 1;

			} else { // 일반적인 순서 (마지막 제외)

				next_banner = cur_banner.nextElementSibling; // 다음 배너 지정

				banner_cur_count++; // 순서 카운트 증가

			}
			
			next_banner.classList.add('active') // 다음 배너 지정
			
			// console.log('banner_cur_count: ', banner_cur_count);

			tag_banner_cur_num.textContent = banner_cur_count.toString().padStart(2, '0'); // 현재 켜져있는 배너 index 태그에 지정

		}

		// 배너 교체 슬라이드 함수 (이전 배너)
		function bannerPrevChange() {

			const banner_list 		 		 = document.querySelectorAll('.slideshow-container > a');
			const tag_banner_cur_num   = document.querySelector('.banner_num_wrap > span > b');

			const banner_list_count 	 = banner_list.length; // 현재 존재하는 배너 갯수

			let cur_banner  = undefined; // 현재 켜져있는 배너
			let prev_banner = undefined; // 다음 켜질 배너

			// 배너 리스트 순회 중 켜져있는 배너 지정
			for (const el of banner_list) { 

				if(el.classList.contains('active')) {
					cur_banner = el;
				}

			}

			cur_banner.classList.remove('active'); // 현재 켜져있는 배너 끄기

			if(banner_cur_count === 1) { // 첫 번째 배너 일 때

				prev_banner = banner_list[banner_list_count - 1]; // 다시 마지막 배너로 지정
				banner_cur_count = banner_list_count;

			} else { // 일반적인 순서 (첫번 째 제외)

				prev_banner = cur_banner.previousElementSibling; // 다음 배너 지정

				banner_cur_count--; // 순서 카운트 증가

			}
			
			prev_banner.classList.add('active') // 다음 배너 지정
			
			// console.log('banner_cur_count: ', banner_cur_count);

			tag_banner_cur_num.textContent = banner_cur_count.toString().padStart(2, '0'); // 현재 켜져있는 배너 index 태그에 지정

		}

	}

}
/* //메인 - 배너 슬라이드 */

/* 메인 - 글로벌 자동 슬라이드 */
$(document).ready( function() {

	mainGlobalSlide('MoveRight');
	function mainGlobalSlide(mode = 'MoveRight', init_left_val = 0) {


		const global_img_box = document.querySelector('.global_img_box');
		
		if(global_img_box) { // 안전 장치

			const global_img = document.querySelector('.global_wrap .global_img_box > img');
			const gap = global_img_box.getBoundingClientRect().width - global_img.offsetWidth; // 박스와 아이템 widh 차이값

			// console.log('글로벌 슬라이드 이벤트 발동');
			// console.log('global_img Width: ', global_img.getBoundingClientRect().width);
			// console.log('gap: ', gap);

			if(gap > 0) { // 큰 화면 대비 안전 장치
				return;
			}

			const time_speed = 50;
			let setInterval_id = undefined;

			// 모드 별로 움직임 판별
			switch(mode) {
			
				case 'MoveRight': setInterval_id = setInterval(moveRightImage, time_speed);
					break;
				case 'MoveLeft': setInterval_id = setInterval(moveLeftImage, time_speed);
					break;
				default:
					break;
			}


			// 이미지 오른쪽으로 이동 함수
			function moveRightImage() {

				if(Math.abs(init_left_val) >= Math.abs(gap)) {

					clearInterval(setInterval_id);
					mainGlobalSlide('MoveLeft', init_left_val);

				} else {

					init_left_val--;
					global_img.style.left = `${init_left_val}px`;
					
				}

			}

			// 이미지 왼쪽으로 이동 함수
			function moveLeftImage() {

				if(init_left_val >= 0) {

					clearInterval(setInterval_id);
					mainGlobalSlide('MoveRight');

				} else {

					init_left_val++;
					global_img.style.left = `${init_left_val}px`;
					
				}

			}

			

		}

	}

});
/* //메인 - 글로벌 자동 슬라이드 */

/* 제품 상세 - 제품 캐러셀 on / off */
const btn_carousel_view  = document.querySelector('.zoomin');
let is_carousel_existing = false;
btn_carousel_view?.addEventListener('click', () => {

	const layer_popup = document.querySelector('.layer_popup');
	layer_popup.classList.add('active'); // 레이어 팝업 활성화
	document.body.style.overflowY = 'hidden'; // 스크롤 감추기

	if(!is_carousel_existing) {

		$("#detail-zoom-slider").lightSlider({ // 이미지 캐러셀 셋팅
			item: 1,
			autoWidth: false,
			slideMove: 1,
			slideMargin: 20,

			addClass: '',
			mode: 'slide',
			useCSS: true,
			cssEasing: 'cubic-bezier(0.22, 1, 0.36, 1)', //'cubic-bezier(0.25, 0, 0.25, 1)',
			easing: 'easeOutQuint', //'for jquery animation',//

			vertical: false,
			verticalHeight: 500,
			vThumbWidth: 100,

			thumbItem: 10,
			pager: true,
			gallery: false,
			galleryMargin: 60,
			thumbMargin: 60,
		});

		is_carousel_existing = true;

	}

});
/* //제품 상세 - 제품 캐러셀 on / off */

/* 고객지원 - 공식대리점 지도 */
const agency_list = document.querySelectorAll('.agency_list li a');
if(agency_list.length) { // 안전 장치

	// for (const el of agency_list) {

	// 	el.addEventListener('click', () => {

	// 		const kakao_maps = el.parentElement.nextElementSibling;

	// 		const map_id 		 = el.dataset.mapId;  // 지도 id
	// 		const map_key 	 = el.dataset.mapKey; // 지도 key

	// 		kakao_maps.id = `daumRoughmapContainer${map_id}`;

	// 		if(kakao_maps.firstElementChild) {
	// 			kakao_maps.firstElementChild.remove(); // 기존 아이템 삭제
	// 			kakao_maps.firstElementChild.remove(); // 기존 아이템 삭제
	// 		}

	// 		new daum.roughmap.Lander({
	// 			"timestamp" : map_id,
	// 			"key" : map_key,
	// 			"mapHeight" : "220"
	// 		}).render();

	// 	});

	// }

}
/* //고객지원 - 공식대리점 지도 */

/* 고객지원 - 견적문의 제품 선택 팝업 */
const onestep_category_list_wrap = document.querySelector('#onestep_category_list_wrap');
if(onestep_category_list_wrap?.dataset.pagetypeFront === 'contact') { // 고객지원 - 견적문의 페이지 일 때 (안전 장치)

	// #0. 태그 제품과 인벤토리 제품 연동
	const btn_select_prod = document.querySelector('#btn_select_prod');
	btn_select_prod?.addEventListener('click', (e) => {
		e.preventDefault();

		const layer_popup = document.querySelector('.layer_popup');
		layer_popup.classList.add('active'); // 레이어 팝업 활성화
		document.body.style.overflowY = 'hidden'; // 스크롤 감추기

		// 1. 인벤토리와 상점 제품 모두 초기화
		// const inventory_product_wrap  = document.querySelector('[data-list-type="inventory"]'); // 제품 리스트 박스 (인벤토리) 
		// inventory_product_wrap.innerHTML = null; // 인벤토리 비우기
		// productCountCheck('clear');

		// const store_prod_list = document.querySelectorAll('[data-list-type="store"] > li'); // 상점 제품 리스트
		// for (const el of store_prod_list) {
		// 	if(el.classList.contains('selected')) el.classList.remove('selected'); // 상점 제품 selected 해제
		// }

		// // 2. 태그 제품이 있으면 인벤토리에 추가
		// const tag_box = document.querySelector('.tag'); // 문의내용 - 제품 태그 박스
		// for (const el of tag_box.children) {

		// 	const product_id_copy = el.firstElementChild.lastElementChild.value;  // 태그 제품 id 복사
		// 	const title_copy 			= el.textContent; // 태그 제품 이름 복사
		// 	const src_copy 				= el.firstElementChild.children[1].value;   // 태그 제품 이미지 src 복사
			
		// 	addProductInInventory(product_id_copy, title_copy, src_copy);
		// 	productSelectedCheck();

		// 	setSlideItem('inventory', 'remove');

		// }

	});
	// #0. //태그 제품과 인벤토리 제품 연동


	// #1. 2차 카테고리 리스트 셋팅
	const pop_product_list = document.querySelector('[data-list-type="store"]'); 						// 제품 리스트 박스 (상점) 
	let twostep_category_list_wrap = document.querySelector('#twostep_category_list_wrap'); // 2차 카테고리 리스트 wrap

	const onestep_list = onestep_category_list_wrap.children; // 1차 카테고리 리스트 아이템들
	for (const el of onestep_list) {

		el.addEventListener('click', (e) => {
			
			// 리스트 셋팅 (2차 카테고리 및 제품)
			const onestep_category_id = el.firstElementChild.value; // 클릭 된 해당 1차 카테고리 id 
			const is_steptwo_use = el.lastElementChild.value; 			// 클릭 된 해당 1차 카테고리 2차 카테고리 사용 유무

			// $.post("../process/category_list_read_process.php", { // ajax를 이용한 데이터 전송

			// 	onestep_category_id,
			// 	is_steptwo_use,

			// }, function(data) {
			// 	// 받아온 데이터
			// 	twostep_category_list_wrap.innerHTML = data;

			// 	const first_list_text = twostep_category_list_wrap.firstElementChild.textContent; // 2차 카테고리 첫 번째 리스트의 텍스트
			// 	twostep_category_list_wrap.previousElementSibling.textContent = first_list_text;  // 2차 카테고리 첫 번째 리스트 이름 등록

			// 	// #1-1. 1차 카테고리 클릭 시 제품 셋팅 (동적)
			// 	const first_twostep_category_id = twostep_category_list_wrap.firstElementChild.firstElementChild.value; // 첫 번째 2차 카테고리 id

			// 	setTwoStepClickEvent(); // 2차 카테고리 리스트 클릭 이벤트 재정의

			// 	if(first_twostep_category_id === 'empty') { // 2차 카테고리가 '사용 안함'이거나 존재하지 않을 때


			// 		$.post("../process/product_list_read_process.php?mode=onestep", { // ajax를 이용한 데이터 전송
			
			// 			onestep_category_id,
			
			// 		}, function(data) {
			// 			// 받아온 데이터
			// 			// console.log(data);

			// 			console.log('발동 코드5');

			// 			const store_product_list = document.querySelector('[data-list-type="store"]'); // 제품 리스트 박스 (상점) 
			// 			store_product_list.innerHTML = data;

			// 			setSlideItem('store'); // 제품 상점 슬라이드 초기화

			// 			selectStoreProduct(); // 제품 선택 이벤트 재정의
			// 			productSelectedCheck(); // 제품 인벤토리와 상점 같은 값 체크 후 selected 클래스 부여 
						
			
			// 		})
			
			// 	} else { // 2차 카테고리가 존재 할 때
			
			// 		$.post("../process/product_list_read_process.php?mode=twostep", { // ajax를 이용한 데이터 전송
			
			// 			twostep_category_id: first_twostep_category_id,
			// 			page_type: 'contact',
			
			// 		}, function(data) {
			// 			// 받아온 데이터
			// 			// console.log(data);

			// 			console.log('발동 코드2');

			// 			const store_product_list = document.querySelector('[data-list-type="store"]'); // 제품 리스트 박스 (상점) 
			// 			store_product_list.innerHTML = data;

			// 			setSlideItem('store'); // 제품 상점 슬라이드 초기화
						
			// 			selectStoreProduct(); // 제품 선택 이벤트 재정의
			// 			productSelectedCheck(); // 제품 인벤토리와 상점 같은 값 체크 후 selected 클래스 부여 

			// 		})
			
			// 	}
			// 	// #1-1. //1차 카테고리 클릭 시 제품 셋팅 (동적)

			// })

			// 해당 선택 리스트 클래스 부여 (1차 카테고리)
			const onestep_category_list = document.querySelectorAll('#onestep_category_list_wrap > li'); // 1차 카테고리 리스트 

			for (const el_list of onestep_category_list) {

				if(el_list.textContent == e.target.textContent) {

					el_list.classList.add('selected');
					continue;
				}
	
				el_list.classList.remove('selected');

			}

		});

	}
	// #1. //2차 카테고리 리스트 셋팅


	// #2. 2차 카테고리 클릭 시 제품 셋팅 (동적)
	setTwoStepClickEvent();
	function setTwoStepClickEvent() { // 2차 카테고리 리스트가 동적으로 변하기 때문에 함수로 선언
		
		const pop_product_list = document.querySelector('[data-list-type="store"]'); 							// 제품 리스트 박스 (상점) 
		const twostep_category_list_wrap = document.querySelector('#twostep_category_list_wrap'); // 2차 카테고리 리스트 wrap
		const twostep_list = twostep_category_list_wrap.children; 																// 2차 카테고리 리스트 아이템들
		
		for (const el of twostep_list) {

			el.addEventListener('click', (e) => {

				const twostep_category_id = el.firstElementChild.value; // 클릭 된 해당 1차 카테고리 id 

				if(twostep_category_id === 'empty') { // 2차 카테고리 없는 경우 종료
					return;
				} else { // 2차 카테고리 있을 때

					// $.post("../process/product_list_read_process.php?mode=twostep", { // ajax를 이용한 데이터 전송
			
					// 	twostep_category_id,
					// 	page_type: 'contact',
			
					// }, function(data) {
					// 	// 받아온 데이터
					// 	// console.log(data);
					// 	console.log('발동 코드4');

					// 	const store_product_list = document.querySelector('[data-list-type="store"]'); // 제품 리스트 박스 (상점) 
					// 	store_product_list.innerHTML = data;

					// 	setSlideItem('store'); // 제품 상점 슬라이드 초기화

					// 	selectStoreProduct(); // 제품 선택 이벤트 재정의
					// 	productSelectedCheck(); // 제품 인벤토리와 상점 같은 값 체크 후 selected 클래스 부여 

			
					// })

				}

				// 해당 선택 리스트 클래스 부여 (2차 카테고리)
				assignTwostepSelectClass(e.target);

			});

		}

	}
	// #2. //2차 카테고리 클릭 시 제품 셋팅 (동적)


	// #3. 페이지 처음 열람 시 제품 셋팅
	const first_onestep_category_id = onestep_category_list_wrap.firstElementChild.firstElementChild.value; // 첫 번째 1차 카테고리 id
	const first_twostep_category_id = twostep_category_list_wrap.firstElementChild.firstElementChild.value; // 첫 번째 2차 카테고리 id

	if(first_twostep_category_id === 'empty') { // 2차 카테고리가 '사용 안함'이거나 존재하지 않을 때


		// $.post("../process/product_list_read_process.php?mode=onestep", { // ajax를 이용한 데이터 전송

		// 	onestep_category_id: first_onestep_category_id,

		// }, function(data) {
		// 	// 받아온 데이터
		// 	// console.log(data);
		// 	console.log('발동 코드3');

		// 	const store_product_list = document.querySelector('[data-list-type="store"]'); // 제품 리스트 박스 (상점) 
		// 	store_product_list.innerHTML = data;

		// 	setSlideItem('store'); // 제품 상점 슬라이드 초기화

		// 	selectStoreProduct(); // 제품 선택 이벤트 재정의
		// 	productSelectedCheck(); // 제품 인벤토리와 상점 같은 값 체크 후 selected 클래스 부여 

		// })

	} else { // 2차 카테고리가 존재 할 때

		// $.post("../process/product_list_read_process.php?mode=twostep", { // ajax를 이용한 데이터 전송

		// 	twostep_category_id: first_twostep_category_id,
		// 	page_type: 'contact',

		// }, function(data) {
		// 	// 받아온 데이터
		// 	// console.log(data);

		// 	console.log('발동 코드1');
			
		// 	const store_product_list = document.querySelector('[data-list-type="store"]'); // 제품 리스트 박스 (상점) 
		// 	store_product_list.innerHTML = data;

		// 	setSlideItem('store'); // 제품 상점 슬라이드 초기화
			
		// 	selectStoreProduct(); // 제품 선택 이벤트 재정의
		// 	productSelectedCheck(); // 제품 인벤토리와 상점 같은 값 체크 후 selected 클래스 부여 

		// })

	}
	// #3. //페이지 처음 열람 시 제품 셋팅


	// #4. 제품 리스트 상점에서 제품 고르기
	function selectStoreProduct() { // 상점 제품 리스트가 동적으로 변하기 때문에 함수로 선언
		const store_product_list 			= document.querySelectorAll('[data-list-type="store"] > li'); // 제품 리스트 (상점) 
		const inventory_product_wrap  = document.querySelector('[data-list-type="inventory"]');  		// 제품 리스트 박스 (인벤토리) 

		store_product_list.forEach((el) => {

			el.addEventListener('click', (e) => {

				e.preventDefault();

				const src_copy 				= el.firstElementChild.firstElementChild.src;   // 상점 제품 이미지 src 복사
				const title_copy 			= el.firstElementChild.children[1].textContent; // 상점 제품 이름 복사
				const product_id_copy = el.firstElementChild.lastElementChild.value;  // 상점 제품 id 복사

				if(el.classList.contains('selected')) { // 선택 되어진 제품 일 때

					// 현재 구현 내용 없음.....

				} else { // 선택 되지 않은 제품 일 때

					// 4-1 제품 상점 selected 클래스 부여 및 제품 인벤토리 갯수 카운팅
					el.classList.add('selected');

					addProductInInventory(product_id_copy, title_copy, src_copy);

				}

			});

		});

	}
	// #4. //제품 리스트 상점에서 제품 고르기



	// #5. 제품 인벤토리 갯수 체크
	productCountCheck(); // 페이지 오픈 시 한 번 체크
	function productCountCheck(mode) { // 제품 인벤토리 갯수를 체크하여 반 값 상자 on/off
		const tag_prod_count 					= document.querySelector('.prod_count'); 								// 제품 갯수 태그
		const inventory_product_empty = document.querySelector('.pop_product_select .empty'); // 제품이 빈 박스 (인벤토리)

		// 1. 모드에 따라 갯수 증감
		switch(mode) {
			case 'add': tag_prod_count.textContent = parseInt(tag_prod_count.textContent) + 1; // 제품 갯수 1개 증가
				break;
			case 'minus': tag_prod_count.textContent = parseInt(tag_prod_count.textContent) - 1; // 제품 갯수 1개 증가
				break;
			case 'clear': tag_prod_count.textContent = parseInt(0); // 제품 갯수 0개로 초기화
				break;
			default:
				break;
		}

		// 2. 제품이 비었는지 체크 후 빈 박스 on / off
		if(parseInt(tag_prod_count.textContent) === 0) { // 제품이 없으면

			inventory_product_empty.classList.add('active');

		} else { // 제품이 있다면

			inventory_product_empty.classList.remove('active');

		}
	}
	// #5. //제품 인벤토리 갯수 체크



	// #6. 제품 선택 완료
	const btn_popup_select_ok = document.querySelector('.btn_popup_select_ok');
	btn_popup_select_ok.addEventListener('click', () => {
		// console.log('제품 선택 완료 버튼 클릭');

		const tag_prod_count 					= document.querySelector('.prod_count'); 									// 제품 갯수 태그 (인벤토리) 
		const prod_count 							= parseInt(tag_prod_count.textContent); 									// 제품 갯수 (인벤토리) 
		
		if(prod_count === 0) { // 인벤토리의 제품이 0개 일 때
			alert('문의하실 제품을 선택해 주세요.');
			return;
		}

		const inventory_product_list  = document.querySelectorAll('[data-list-type="inventory"] > li'); // 제품 리스트 (인벤토리) 
		const prod_select_popup  = document.querySelector('.layer_popup '); 														// 문의내용 - 제품 태그 박스
		const tag_box 					 = document.querySelector('.tag'); 																			// 문의내용 - 제품 태그 박스

		tag_box.innerHTML = null; // 문의내용 - 제품 태그 박스 비우기

		for(const el of inventory_product_list) {

			const product_title_copy = el.firstElementChild.lastElementChild.previousElementSibling.textContent; // 제품 이름 (인벤토리)
			const product_src_copy = el.firstElementChild.children[1].src; 																		   // 제품 이미지 소스 (인벤토리)
			const product_id_copy 	 = el.firstElementChild.lastElementChild.value; 														 // 제품 id (인벤토리)

			let tag_img = document.createElement('img');
			tag_img.src = "../resource/images/icon/btn_popup_close.png";

			let tag_input_type1 = document.createElement('input');
			tag_input_type1.type = 'hidden';
			tag_input_type1.name = 'product_src[]';
			tag_input_type1.value = product_src_copy;

			let tag_input_type2 = document.createElement('input');
			tag_input_type2.type = 'hidden';
			tag_input_type2.name = 'product_id[]';
			tag_input_type2.value = product_id_copy;

			let tag_a = document.createElement('a');
			tag_a.href = '#';
			tag_a.append(tag_img);
			tag_a.append(tag_input_type1);
			tag_a.append(tag_input_type2);

			let tag_button = document.createElement('button');
			tag_button.textContent = product_title_copy;
			tag_button.append(tag_a);

			tag_box.append(tag_button); // 견적문의 내용에 제품 나열
			
		};

		productTagRemoveEvent(); // 태그 제품 삭제 이벤트 설치

		prod_select_popup.classList.remove('active'); // 팝업 창 닫기

		document.body.style.overflowY = 'initial'; // 스크롤 드러내기
		
	});
	// #6. //제품 선택 완료

	// #7. 2차 카테고리 리스트 클릭 시 selected 클래스 부여
	function assignTwostepSelectClass(target) { // 해당 선택 리스트 클래스 부여 함수(2차 카테고리)

		const twostep_category_list = document.querySelectorAll('#twostep_category_list_wrap > li'); // 2차 카테고리 리스트 
	
		for (const el_list of twostep_category_list) {
	
			if(el_list.textContent == target.textContent) {
	
				el_list.classList.add('selected');
				continue;
	
			}
	
			el_list.classList.remove('selected');
	
		}

	}
	// #7. //2차 카테고리 리스트 클릭 시 selected 클래스 부여


	// #8. '1차 카테고리' 박스 열람 시 '2차 카테고리' 박스 닫기 (reverse 포함)
	const category_box = document.querySelectorAll('.category_box');
	category_box.forEach((el) => {
		el.addEventListener('click', (e) => {

			for (const item of category_box) {

				if(e.target.parentElement === item) {
					continue;
				}
	
				item.classList.remove('active');

			}

		});
	});
	// #8. //'1차 카테고리' 박스 열람 시 '2차 카테고리' 박스 닫기 (reverse 포함)

}
/* //고객지원 - 견적문의 제품 선택 팝업 */

/* 고객지원 - 제품 선택 : 제품 리스트 (상점) <-> (인벤토리) 선택 활성화 */
function productSelectedCheck() {

	const store_prod_list 		= document.querySelectorAll('[data-list-type="store"] > li'); 		// 상점 제품 리스트
	const inventory_prod_list = document.querySelectorAll('[data-list-type="inventory"] > li'); // 인벤토리 제품 리스트

	for (const el_inventory of inventory_prod_list) {
		const el_inventory_id = el_inventory.firstElementChild.lastElementChild.value; // 제품 id (인벤토라)

		for (const el_store of store_prod_list) { 
			const el_store_id = el_store.firstElementChild.lastElementChild.value; // 제품 id (상점)

			if(el_inventory_id === el_store_id) { // 상점 제품이 인벤토리 제품에 있을 경우
				el_store.classList.add('selected');
			} else { // 상점 제품이 인벤토리 제품에 없을 경우
				// 구현 내용 없음...
			}
		}
	}
	
}
/* //고객지원 - 제품 선택 : 제품 리스트 (상점) <-> (인벤토리) 선택 활성화 */

/* 고객지원 - 제품 태그 삭제 */
productTagRemoveEvent();
function productTagRemoveEvent() {
	const tag_box = document.querySelector('.tag'); // 문의내용 - 제품 태그 박스

	if(tag_box) { // 태그 박스가 있다면 (안전 장치)

		for (const el of tag_box.children) {

			el.addEventListener('click', (e) => { // 폼 전송 방지
				e.preventDefault();
			});

			const btn_remove = el.firstElementChild;

			btn_remove.addEventListener('click', (e) => {
				el.remove();
			});
		}

	}

}
/* //고객지원 - 제품 태그 삭제 */

/* 고객지원 - 제품 선택 : 제품 리스트 (인벤토리)에 제품 추가 */
function addProductInInventory(_product_id_copy, _title_copy, _src_copy) {

	console.log('상점 제품을 인벤토리에 담기 버튼을 눌렀습니다.');

	productCountCheck('add'); // 제품 갯수 1개 증가

	// 4-2 제품 인벤토리에 담기
	let tag_p_type01 = document.createElement('p');
	tag_p_type01.className = 'delete';
	tag_p_type01.addEventListener('click', (e) => { // 제품 삭제 버튼 클릭 이벤트 (인벤토리)

		console.log('인벤토리 제품 삭제 버튼을 눌렀습니다.');

		const store_product_list 			= document.querySelectorAll('[data-list-type="store"] > li'); // 제품 리스트 (상점)
		const remove_inventory_target = e.target.parentElement.parentElement; 	 			 							// 삭제 대상 제품 (인벤토리) 
		const inventory_prod_id 			= e.target.parentElement.lastElementChild.value; 							// 삭제 대상 제품 id (인벤토리) 

		store_product_list.forEach((el) => {
			const el_store_id = el.firstElementChild.lastElementChild.value; // 제품 id (상점)

			if(el_store_id === inventory_prod_id) { // 삭제한 인벤토리 제품이 현재 보여지는 상점 제품에 있을 경우
				el.classList.remove('selected'); // 선택 해제
			}

		});

		remove_inventory_target.remove(); // 인벤토리에서 해당 제품 삭제

		productCountCheck('minus'); // 제품 갯수 1개 감소
		setSlideItem('inventory', 'remove'); 	// 아이템 슬라이드 스위치 셋팅

	});

	let tag_img = document.createElement('img');
	tag_img.src = _src_copy;
	tag_img.className = 'img_size';

	let tag_p_type02 = document.createElement('p');
	tag_p_type02.className = 'title';
	tag_p_type02.textContent = _title_copy;

	let tag_input = document.createElement('input');
	tag_input.type = 'hidden';
	tag_input.name = 'product_id';
	tag_input.value = _product_id_copy;

	let tag_a  = document.createElement('a');
	tag_a.href = '#';
	tag_a.append(tag_p_type01);
	tag_a.append(tag_img);
	tag_a.append(tag_p_type02);
	tag_a.append(tag_input);

	let tag_li = document.createElement('li');
	tag_li.append(tag_a);
	
	const inventory_product_wrap  = document.querySelector('[data-list-type="inventory"]'); // 제품 리스트 박스 (인벤토리) 
	inventory_product_wrap.append(tag_li);

	setSlideItem('inventory'); // 아이템 슬라이드 스위치 셋팅
}
/* //고객지원 - 제품 선택 : 제품 리스트 (인벤토리)에 제품 추가 */

/* 고객지원 - 파일 첨부 */
const input_user_files = document.querySelector('#user_file');
input_user_files?.addEventListener('change', (e) => {

	console.log('첨부 파일 업로드 이벤트 발동');
	
	const tag_target_input = e.target; 			 				 			// 해당 인풋 태그
	let file_arr 				 	 = tag_target_input.files; 			// 첨부 파일 리스트
	const file_count_max 	 = 3; 										 			// 파일 허용 갯수 최대치
	const file_size_max 	 = 2097152; 							 			// 파일 사이즈 최대치
	const fileExt_allow 	 = 
	['image/png', 'image/jpeg', 'image/gif', 																			// image
	 'application/x-zip-compressed', 'egg',	 																			// zip, alz, egg
	 'application/pdf', 						 				 																			// pdf
	 'application/vnd.openxmlformats-officedocument.presentationml.presentation', // pptx
	 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 				// xlsx
	 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 	// docx
	 'hwp',																																				// hwp
	 'text/plain' 																																// txt
	]; // 이미지 허용 확장자 

	// console.log('fileExt_allow: ', fileExt_allow);

	// 1. 파일 갯수 검사
	if(file_arr.length > file_count_max) { // 정해진 업로드 파일 갯수 초과 할 때
		alert('파일첨부는 최대 3개까지 가능합니다.');
		tag_target_input.value = '';
		return;
	}

	fileAttachCountCheck('init'); // 다시 첨부를 할 때 카운트 초기화

	// 2. 파일 크기 및 형식 검사
	let file_index = 0;
	for(const el of file_arr) { // 각 첨부 파일 검사 루프
		// console.log(el);

		const fileName = el.name; // 파일명
		const fileExt  = el.type; // 파일 확장자
		const fileSize = el.size; // 파일 크기

		// console.log('fileName: ', fileName);
		// console.log('fileExt: ', fileExt);
		// console.log('fileSize: ', fileSize);

		// 2-1. 파일 크기 검사
		if(fileSize > file_size_max) { // 허용된 파일 크기를 초과 했을 때
			alert('파일은 개당 최대 2MB까지 등록 가능합니다.');
			tag_target_input.value = '';
			return;
		}

		// 2-2. 파일 형식 검사
		let fileName_arr 		 = fileName.split('.'); 									// 파일 이름과 확장자 분리 (예외 파일 처리 용)
		let fileType_to_name = fileName_arr[fileName_arr.length - 1]; // 파일 이름에서 확장자 추출 (예외 파일 처리 용)
		let fileExt_check 	 = false; 																// 파일 형식 체크 스위치

		for (value of fileExt_allow) { // 정해진 파일 확장자 검사 루프

			if(value === fileExt || value === fileType_to_name) {
				fileExt_check = true;
				break;
			}

		}

		if(!fileExt_check) { // 최종 검사 확인 후 실패 시
			alert('허용되지 않은 양식의 파일입니다.');
			tag_target_input.value = '';
			fileAttachCountCheck('init');
			return;
		}

		// 2-3. 통과 시 첨부 파일 view list 생성

		const attach = document.querySelector('.attach'); // 첨부 파일 view list box

		let tag_span = document.createElement('span');
		tag_span.addEventListener('click', (e) => { // 첨부 파일 해당 view list 삭제 버튼 클릭 이벤트 

			console.log('첨부 파일 view list 항목 삭제 버튼 클릭');

			// 1. input files 갱신
			const input_user_files = document.querySelector('#user_file');

			const dataTransfer  = new DataTransfer(); 								 // input data 전송용 박스
			const file_arr_copy = Array.from(input_user_files.files);  // fileList를 array로 복사
			const attach 				= $(e.target).closest('.attach'); 		 // 해당 버튼의 부모 박스
			const file_index 		= attach.find('span').index(e.target); // 해당 버튼의 index

			file_arr_copy.splice(file_index, 1); // 해당 아이템 배열에서 자르기

			file_arr_copy.forEach((file) => { // 남은 해당 아이템 transfer 박스에 추가
				dataTransfer.items.add(file);
			});

			input_user_files.files = dataTransfer.files; // input files 갱신

			// 2. 해당 view list 아이템 삭제 및 카운트
			const target_view_list = e.target.parentElement; // 해당 view list
			target_view_list.remove();

			fileAttachCountCheck('minus', fileSize);

		});

		let tag_p = document.createElement('p');
		tag_p.className 	= "file";
		tag_p.textContent = fileName;
		tag_p.append(tag_span);

		attach.append(tag_p);

		fileAttachCountCheck('add', fileSize);

		file_index++;

	}

	function fileAttachCountCheck(mode, target_file_size = 0) { // 파일 첨부 갯수 체크 함수

		const attach = document.querySelectorAll('.attach .file'); 		// 첨부 파일 view list box
		const num  	 = document.querySelector('.bate .num');  // 첨부파일 갯수 카운트 태그
		const size 	 = document.querySelector('.bate .size'); // 첨부파일 총 크기 태그

		switch(mode) {
			case 'add': 
				num.textContent = parseInt(num.textContent) + 1;
				size.textContent = parseFloat(size.textContent) + target_file_size / 1048576;
			break;

			case 'minus':
				num.textContent = parseInt(num.textContent) - 1;
				size.textContent = parseFloat(size.textContent) - target_file_size / 1048576;
			break;

			case 'init': 
				num.textContent = 0; 
				size.textContent = 0;
				attach?.forEach((el) => {
					el.remove();
				});
			break;

			default: 
			break;
		}

		size.textContent = parseFloat(size.textContent).toFixed(2); // 소수점 2자리 수까지 표시

		if(parseFloat(size.textContent) < 0) { // 계산 된 파일 크기 값이 음수 일 때
			size.textContent = 0;
		}

		// const emptys = document.querySelector('.attach .emptys'); // 첨부파일 없을 시 태그

		// if(parseInt(num.textContent) < 1) {
		// 	size.textContent = 0;
		// 	emptys.classList.add('active');
		// } else {
		// 	emptys.classList.remove('active');
		// }

	}

});
/* //고객지원 - 파일 첨부 */

/* 고객지원 - 연락처 입력 */
const user_contact = document.querySelector('#user_contact');
user_contact?.addEventListener('input', (e) => { // 연락처에 문자 입력 이벤트

	e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); // 정규 표현식을 이용하여 숫자만 입력

});

/* //고객지원 - 연락처 입력 */

/* 고객지원 - 이메일 입력 */
const user_email = document.querySelector('#user_email');
user_email?.addEventListener('input', (e) => {

	let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	const err_box = e.target.nextElementSibling;
	err_box.textContent = '올바른 이메일을 입력해주세요.';

	if(regExp.test(e.target.value)) {
		err_box.classList.remove('active');
	} else {
		err_box.classList.add('active');
	}


});
/* //고객지원 - 이메일 입력 */

/* 고객지원 - 지역 선택 */
const main_region_list_wrap = document.querySelector('#main_region_list_wrap');
if(main_region_list_wrap) { // 안전 장치

	const total_region = { // 2023년 기준 지역 시/도, 시/군/구 정의
	'시/도'					: ["시/군/구"],
	'서울특별시'		: ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
	'인천광역시'		: ["계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"],
	'부산광역시'		: ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군"],
	'대전광역시'		: ["대덕구", "동구", "서구", "유성구", "중구"],
	'대구광역시'		: ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"],
	'울산광역시'		: ["남구", "동구", "북구", "중구", "울주군"],
	'광주광역시'		: ["광산구", "남구", "동구", "북구", "서구"],
	'제주특별자치도': ["서귀포시", "제주시"],
	'세종특별자치시': ["세종특별자치시"],
	'경기도'				: ["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "여주시", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시", "가평군", "양평군", "연천군"],
	'강원도'				: ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군"],
	'충청북도'			: ["제천시", "청주시", "충주시", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", "진천군"],
	'충청남도'			: ["계룡시", "공주시", "논산시", "당진시", "보령시", "서산시", "아산시", "천안시", "금산군", "부여군", "서천군", "예산군", "청양군", "태안군", "홍성군"],
	'경상북도'			: ["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시", "고령군", "군위군", "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군"],
	'경상남도'			: ["거제시", "김해시", "밀양시", "사천시", "양산시", "진주시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"],
	'전라북도'			: ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"],
	'전라남도'			: ["광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"],
	};

	// 1. '시/도' 박스 열람 시 '시/군/구/' 박스 닫기 (reverse 포함)
	const region_box = document.querySelectorAll('.region_box');
	region_box.forEach((el) => {
		el.addEventListener('click', (e) => {

			for (const item of region_box) {

				if(e.target.parentElement === item) {
					continue;
				}
	
				item.classList.remove('active');

			}

		});
	});


	// 2. '시/도' 지역 setting
	main_region_list_wrap.innerHTML = null; // '시/도' 박스 비우기

	let first_main_region_selected_class = 'selected'; // 첫 번째 지역 '시/도' selected 클래스 부여 변수
	for (const key in total_region) {

		let tag_li = document.createElement('li')
		tag_li.className = `optionItem ${first_main_region_selected_class}`;
		tag_li.textContent = key;

		main_region_list_wrap.append(tag_li);

		if(first_main_region_selected_class === 'selected') first_main_region_selected_class = ''; // 클래스 변수 비우기

	}

	// 3. 해당 '시/도' 지역 클릭 시 '시/군/구/' 지역 setting
	for (const el of main_region_list_wrap.children) {
		el.addEventListener('click', (e) => {

			const sub_region_list_wrap = document.querySelector('#sub_region_list_wrap');
			sub_region_list_wrap.innerHTML = null; // '시/군/구' 박스 비우기

			const main_region = document.querySelector('input[name="main_region"]');
			main_region.value = e.target.textContent === '시/도' ? 'empty' : el.textContent;

			let sub_region_name = sub_region_list_wrap.previousElementSibling;
			sub_region_name.textContent = total_region[el.textContent][0];

			const sub_region = document.querySelector('input[name="sub_region"]');
			sub_region.value = total_region[el.textContent][0];

			let first_sub_region_selected_class = 'selected'; // 첫 번째 지역 '시/군/구' selected 클래스 부여 변수

			for (const el_sub_region of total_region[el.textContent]) {
				
				let tag_li = document.createElement('li')
				tag_li.className = `optionItem ${first_sub_region_selected_class}`;
				tag_li.textContent = el_sub_region;
				tag_li.addEventListener('click', (e) => {
					
					const sub_region = document.querySelector('input[name="sub_region"]');
					sub_region.value = e.target.textContent;

					// 지역 '시/군/구' 리스트 클릭 시 selected 클래스 부여
					const sub_region_list = document.querySelectorAll('#sub_region_list_wrap > li'); // 지역 '시/도' 리스트
			
					for (const el_list of sub_region_list) {
				
						if(el_list.textContent == e.target.textContent) {
				
							el_list.classList.add('selected');
							continue;
				
						}
				
						el_list.classList.remove('selected');
				
					}

				});

				sub_region_list_wrap.append(tag_li);

				if(first_sub_region_selected_class === 'selected') first_sub_region_selected_class = ''; // 클래스 변수 비우기

			}

			// 지역 '시/도' 리스트 클릭 시 selected 클래스 부여
			const main_region_list = document.querySelectorAll('#main_region_list_wrap > li'); // 지역 '시/도' 리스트
	
			for (const el_list of main_region_list) {
		
				if(el_list.textContent == e.target.textContent) {
		
					el_list.classList.add('selected');
					continue;
		
				}
		
				el_list.classList.remove('selected');
		
			}

		});
	}

}
/* //고객지원 - 지역 선택 */

/* 고객지원 - 각 필수 항목 이벤트 */
const inputs_essential = document.querySelectorAll('[data-input="essential"]');
if(inputs_essential) { // 안전 장치

	for (const el of inputs_essential) {

		const input_type = el.dataset.inputType;  // input 데이터 타입
		let err_box 	 	 = el.nextElementSibling; // error 박스

		switch(input_type) { // 데이터 타입에 따라 분기
			case 'text':

				el.addEventListener('input', (e) => { // 해당 input 값 삽입 이벤트
					
					if(e.target.value !== '') {
						err_box.classList.remove('active');
					}

				});

				break;

			case 'checkbox':

				err_box = el.nextElementSibling.nextElementSibling; // 체크박스의 경우 에러 박스 위치가 다르기 때문에 재정의

				el.addEventListener('change', () => { // 해당 checkbox 클릭 이벤트

					if(el.checked) {
						err_box.classList.remove('active');
					}

				});

				break;

			default:
				break;
		}

	}

}
/* //고객지원 - 각 필수 항목 이벤트 */

/* 고객지원 - 폼 데이터 전송 */
const contact_form = document.querySelector('#contact-form');
contact_form?.addEventListener('submit', (e) => {

	// console.log('전송 버튼 클릭');
	e.preventDefault();

	// 1. 필수 입력 항목 검사
	const inputs_essential = document.querySelectorAll('[data-input="essential"]');
	let is_pass_essential  = true; // 필수조건 항목모두 통과 했는지 여부 변수

	for (const el of inputs_essential) {

		const input_type = el.dataset.inputType;  // input 데이터 타입
		let err_box 	 	 = el.nextElementSibling; // error 박스
		let is_passed		 = true;									// 조건 통과 스위치

		switch(input_type) { // 데이터 타입에 따라 분기
			case 'text':

				if(el.value === '') {
		
					err_box.classList.add('active');
					el.focus();
					is_passed = false;
				}

				break;

			case 'email':

				if(el.value === '') {
					err_box.textContent = '이메일을 입력해주세요.';
					err_box.classList.add('active');
					el.focus();
					is_passed = false;

				} else if(err_box.classList.contains('active')) {
					el.focus();
					is_passed = false;
				}

				break;

			case 'checkbox':

				err_box = el.nextElementSibling.nextElementSibling; // 체크박스의 경우 에러 박스 위치가 다르기 때문에 재정의

				if(!el.checked) {
					err_box.classList.add('active');
					el.focus();
					is_passed = false;
				}

				break;

			default:
				break;
		}

		if(!is_passed) { // 조건 판결
			is_pass_essential = false; // 필수조건 항목 통과 실패
			break;
		}

	}

	if(!is_pass_essential) { // 필수조건 항목 통과 실패 시
		return;
	}

	const popup_complete = document.querySelector('.layer_popup_complete');
	popup_complete.classList.add('active');
	document.body.style.overflow = 'hidden'; // 메인 페이지 스크롤 숨김

	const btn_ok = document.querySelector('.btn_ok');
	btn_ok.addEventListener('click', () => {

		console.log('견적 문의 완료 안내 팝업 확인 버튼을 눌렀습니다.');

		popup_complete.classList.remove('active');
		document.body.style.overflow = 'visible'; // 메인 페이지 스크롤 보임

		location.reload();

	});

	const form = e.target;
	form.submit();

});
/* //고객지원 - 폼 데이터 전송 */

/* 고객지원 - 제품 선택 : 제품 슬라이드 (mobile) */
let store_isClicking  = false;
let store_shiftX 		  = 0;
let store_order_count = 0;
let store_preLeftVal  = 0;
let store_preMouseX   = 0;

dragSliderStore();
function dragSliderStore() {

  const boxWrapRef  = document.querySelector('.store_wrap');
  const listWrapRef = document.querySelector('[data-list-type="store"]');

	if(!boxWrapRef) { // 안전장치
		return;
	}

	// 터치 시작 할 때 (mobile)
	listWrapRef.addEventListener('touchstart', (e) => {

		// console.log('터치 시작 (상점)');

    dragStart(e, true);

	});

	// 드래그 시작 함수
  const dragStart = (e, isMobile) => {

    store_isClicking = true;
    listWrapRef.classList.remove('animated');

    if(isMobile) {

      store_shiftX = e.changedTouches[0].clientX - listWrapRef.getBoundingClientRect().left;
      store_preMouseX = e.changedTouches[0].clientX;

    } else {

      store_shiftX = e.clientX - listWrapRef.getBoundingClientRect().left;
      store_preMouseX = e.clientX;

    }

    store_preLeftVal = removeUnitText(window.getComputedStyle(listWrapRef).getPropertyValue('left')); 

  };

  // 터치 드래그 중 일 때 (mobile)
	listWrapRef.addEventListener('touchmove', (e) => {

		// console.log('터치 중 (상점)');

		draging(e, true);

	});

	// 드래그 도중 함수
	const draging = (e, isMobile) => {

		if(!store_isClicking)
			return;
		
		let curMouseX = undefined;

		if(isMobile) {

			curMouseX = e.changedTouches[0].clientX;

		} else {

			curMouseX = e.clientX;

		}

		let gap = Math.abs(store_preMouseX - curMouseX);

		if(gap > 50) {

			return;

		}
		
		let result = curMouseX - boxWrapRef.getBoundingClientRect().left - store_shiftX + 'px';
		listWrapRef.style.left = result;
	};

  // 드래그가 끝 날 때
	listWrapRef.addEventListener('touchend', (e) => {

		// console.log('터치 끝 (상점)');

		e.stopPropagation();

    if(!store_isClicking) { // 안전 장치
      return;
    }

		store_isClicking = false;
    listWrapRef.classList.add('animated');

    let curLeftVal = removeUnitText(window.getComputedStyle(listWrapRef).getPropertyValue('left'));
    let gap 			 = store_preLeftVal - curLeftVal;

		const listSwitches = document.querySelectorAll('.listSwitch.store > button');

    if(gap > 0) {     

			if(store_order_count + 1 >= listSwitches.length) {

				listMoveProcess(listSwitches, listWrapRef, store_order_count);

			} else {

				listMoveProcess(listSwitches, listWrapRef, ++store_order_count);

			}

    } else if(gap < 0) {

			if(store_order_count <= 0) {

				listMoveProcess(listSwitches, listWrapRef, store_order_count);

			} else {

				listMoveProcess(listSwitches, listWrapRef, --store_order_count);

			}

		} 

	});

}

let inventory_isClicking  = false;
let inventory_shiftX 		  = 0;
let inventory_order_count = 0;
let inventory_preLeftVal  = 0;
let inventory_preMouseX   = 0;

dragSliderInventory();
function dragSliderInventory() {

  const boxWrapRef  = document.querySelector('.inventory_wrap');
  const listWrapRef = document.querySelector('[data-list-type="inventory"]');

	if(!boxWrapRef) { // 안전장치
		return;
	}

	// 터치 시작 할 때 (mobile)
	listWrapRef.addEventListener('touchstart', (e) => {

		// console.log('터치 시작 (인벤토리)');

    dragStart(e, true);

	});

	// 드래그 시작 함수
  const dragStart = (e, isMobile) => {

    inventory_isClicking = true;
    listWrapRef.classList.remove('animated');

    if(isMobile) {

      inventory_shiftX = e.changedTouches[0].clientX - listWrapRef.getBoundingClientRect().left;
      inventory_preMouseX = e.changedTouches[0].clientX;

    } else {

      inventory_shiftX = e.clientX - listWrapRef.getBoundingClientRect().left;
      inventory_preMouseX = e.clientX;

    }

    inventory_preLeftVal = removeUnitText(window.getComputedStyle(listWrapRef).getPropertyValue('left')); 

  };

  // 터치 드래그 중 일 때 (mobile)
	listWrapRef.addEventListener('touchmove', (e) => {

		// console.log('터치 중 (인벤토리)');

		draging(e, true);

	});

	// 드래그 도중 함수
	const draging = (e, isMobile) => {

		if(!inventory_isClicking)
			return;
		
		let curMouseX = undefined;

		if(isMobile) {

			curMouseX = e.changedTouches[0].clientX;

		} else {

			curMouseX = e.clientX;

		}

		let gap = Math.abs(inventory_preMouseX - curMouseX);

		if(gap > 50) {

			return;

		}
		
		let result = curMouseX - boxWrapRef.getBoundingClientRect().left - inventory_shiftX + 'px';
		listWrapRef.style.left = result;
	};

  // 드래그가 끝 날 때
	listWrapRef.addEventListener('touchend', (e) => {

		// console.log('터치 끝 (인벤토리)');

		e.stopPropagation();

    if(!inventory_isClicking) { // 안전 장치
      return;
    }

		inventory_isClicking = false;
    listWrapRef.classList.add('animated');

    let curLeftVal = removeUnitText(window.getComputedStyle(listWrapRef).getPropertyValue('left'));
    let gap 			 = inventory_preLeftVal - curLeftVal;

		const listSwitches = document.querySelectorAll('.listSwitch.inventory > button');

    if(gap > 0) {     

			if(inventory_order_count + 1 >= listSwitches.length) {

				listMoveProcess(listSwitches, listWrapRef, inventory_order_count);

			} else {

				listMoveProcess(listSwitches, listWrapRef, ++inventory_order_count);

			}

    } else if(gap < 0) {

			if(inventory_order_count <= 0) {

				listMoveProcess(listSwitches, listWrapRef, inventory_order_count);

			} else {

				listMoveProcess(listSwitches, listWrapRef, --inventory_order_count);

			}

		} 

	});

}
/* //고객지원 - 제품 선택 : 제품 슬라이드 (mobile) */

/* 고객지원 - 제품 선택 : 제품 슬라이드 이동 */
function listMoveProcess(target_switch, target_switch_wrap, target_order_count) {

	target_switch.forEach((v, i, arr) => {

		if(i === target_order_count) {

			arr[i].classList.add('selected');

		} else {

			arr[i].classList.remove('selected');

		}

	});

	target_switch_wrap.style.left = -target_order_count * 100 + '%';

	console.log('target_order_count: ', target_order_count);

}
/* //고객지원 - 제품 선택 : 제품 슬라이드 이동 */

/* 고객지원 - 제품 선택 : 제품 슬라이드를 위한 슬라이드 갯수 셋팅 */
setSlideItem('store');
setSlideItem('inventory');
function setSlideItem(target, mode = 'add') {

	let item_wrap 	= undefined;
	let switch_wrap = undefined;

	switch(target) {

		case 'store': 

			item_wrap 	= document.querySelector('[data-list-type="store"]'); // 아이템 wrap 지정 (가변 값)
			switch_wrap = document.querySelector('.listSwitch.store'); // 슬라이드 스위치 wrap 지정 (가변 값)

			if(!item_wrap) { // 안전 장치
				return;
			}

			// 관련 아이템 설정값 모두 초기화
			store_isClicking  = false;
			store_shiftX 		  = 0;
			store_order_count = 0;
			store_preLeftVal  = 0;
			store_preMouseX   = 0;
			item_wrap.style.left = 'initial'; // 아이템 wrap 위치값 초기화

			break;
		case 'inventory': 

			item_wrap 	= document.querySelector('[data-list-type="inventory"]'); // 아이템 wrap 지정 (가변 값)
			switch_wrap = document.querySelector('.listSwitch.inventory'); // 슬라이드 스위치 wrap 지정 (가변 값)

			if(!item_wrap) { // 안전 장치
				return;
			}

			if(mode === 'remove') { // 삭제 모드 일 때

				// 관련 아이템 설정값 모두 초기화
				inventory_isClicking  = false;
				inventory_shiftX 		  = 0;
				inventory_order_count = 0;
				inventory_preLeftVal  = 0;
				inventory_preMouseX   = 0;
				item_wrap.style.left = 'initial'; // 아이템 wrap 위치값 초기화
			}

			break;
		default: 
			break;

	}

	if(!item_wrap) { // 안전 장치
		return;
	}


	// 관련 아이템 스위치 셋팅
	const item_count 			= item_wrap.children.length; 		// wrap 아이템 갯수
	const config_item_num = 2; 												 		// 한 슬라이드 당 보여질 아이템 수
	const page_count      = item_count / config_item_num; // 슬라이드 페이지 갯수

	switch_wrap.innerHTML = null; // 스위치 리스트 비우기
	
	for (let i = 0; i < page_count; i++) { // 스위치 생성 루프

		const tag_button = document.createElement('button');

		if(i === 0 && target === 'store') { // 항상 첫 번째 스위치 on

			tag_button.classList.add('selected');

		} else if(i === inventory_order_count && target === 'inventory') {

			tag_button.classList.add('selected');

		}

		switch_wrap.append(tag_button);

	}

}
/* //고객지원 - 제품 선택 : 제품 슬라이드를 위한 슬라이드 갯수 셋팅 */



/* 단위 문자 지우는 함수. (소수점 버림) */
function removeUnitText(text) {

  let result ='';

  for(let i = 0; i < text.length; i++) {

      if(text[i].charCodeAt() === 46) {
          break;
      }

      if(text[i].charCodeAt() === 45) {
          result += text[i];
      }

      if(text[i].charCodeAt() > 47 && text[i].charCodeAt() < 58) {
          result += text[i];
      }
  }

  return Number(result);
}
/* //단위 문자 지우는 함수. (소수점 버림) */



/* 제품 상세 - 탭 메뉴의 카테고리 활성화 / 비활성화 */
if(window.location.pathname.replace(/^.*\//, '').includes('product_detail')) { // 제품 상세 페이지 전용 (안전 장치)

	const explans_img_box 	 = document.querySelector('.explans_img');
	const tab_menu1 				 = document.querySelector('[href="#menu1"]');
	const caption_wrap 			 = document.querySelector('.caption');
	const tab_menu2 				 = document.querySelector('[href="#menu2"]');
	const detail_reward_wrap = document.querySelector('.detail_reward ');
	const tab_menu3					 = document.querySelector('[href="#menu3"]');

	document.addEventListener('scroll', () => {

		// console.log('스크롤 중');

		if(explans_img_box 
			&& explans_img_box.getBoundingClientRect().top < 1 && Math.ceil(Math.abs(explans_img_box.getBoundingClientRect().top)) < Math.floor(explans_img_box.getBoundingClientRect().height)) {

			tab_menu1.classList.add('active');

		} else {

			tab_menu1.classList.remove('active');

		}

		if(caption_wrap 
			&& caption_wrap.getBoundingClientRect().top < 1 && Math.ceil(Math.abs(caption_wrap.getBoundingClientRect().top)) <Math.floor(caption_wrap.getBoundingClientRect().height)) {

			tab_menu2.classList.add('active');

		} else {

			tab_menu2.classList.remove('active');

		}

		if(detail_reward_wrap 
			&& detail_reward_wrap.getBoundingClientRect().top < 1 && Math.ceil(Math.abs(detail_reward_wrap.getBoundingClientRect().top)) < detail_reward_wrap.getBoundingClientRect().height) {

			tab_menu3.classList.add('active');

		} else {

			tab_menu3.classList.remove('active');

		}

	});

}
/* //제품 상세 - 탭 메뉴의 카테고리 활성화 / 비활성화 */



/* 공통 - 탭 메뉴의 카테고리 포지셔닝 */
tabMenuPosition();
function tabMenuPosition() {

	const $tab_menu = document.querySelector('.tabmenus.flex_style'); // 탭메뉴 ul

	if(!$tab_menu) return; // 안전 장치

	let $target_list = undefined;

	for (const $list of $tab_menu.children) { // 탭메뉴 리스트 루프
		
		if($list.firstElementChild.classList.contains('active')) { // 활성화 아이템 일 때
			$target_list = $list;
		}

	}

	const target_margin_right = removeUnitText(window.getComputedStyle($target_list).getPropertyValue('margin-right')); // 타겟 아이템 마진 값
	const gap 								= $target_list.offsetLeft - $tab_menu.getBoundingClientRect().width + target_margin_right; // 타겟 아이템이 화면을 나간 거리 값

	if(gap > 0) { // 타겟 아이템이 화면을 나갔을 때
		$tab_menu.scrollLeft = gap + target_margin_right * 2;
	}

	
}
/* //공통 - 탭 메뉴의 카테고리 포지셔닝 */



/* 공통 - 탭 메뉴의 wrap gradient on/off */
tabMenugradient();
function tabMenugradient() {

	const $tabmenus_Wrap = document.querySelector('.tabmenus_Wrap'); // 탭메뉴 wrap

	if(!$tabmenus_Wrap) return; // 안전 장치

	const $tabmenu_list  = document.querySelectorAll('.tabmenus.flex_style li');
	let total_list_width = 0; // 리스트 아이템들의 총 witdh 합

	for (const $lists of $tabmenu_list) {
		
		// total_list_width += $lists.getBoundingClientRect().width + removeUnitText(window.getComputedStyle($lists).getPropertyValue('margin-right'));
		total_list_width += $lists.getBoundingClientRect().width;

	}

	let gap = $tabmenus_Wrap.getBoundingClientRect().width - total_list_width;

	if(gap < 0) {

		$tabmenus_Wrap.classList.add('over_list');

	}

	const $tabmenu_ul  = document.querySelector('.tabmenus.flex_style');

	// console.log('total_list_width: ', total_list_width);
	// console.log('$tabmenu_ul.getBoundingClientRect().width: ', $tabmenu_ul.getBoundingClientRect().width);


	$tabmenu_ul.addEventListener('scroll', () => {

		// console.log('스크롤');

		if($tabmenu_ul.scrollLeft >= total_list_width - $tabmenu_ul.getBoundingClientRect().width) {

			$tabmenus_Wrap.classList.remove('over_list');

		} else {

			$tabmenus_Wrap.classList.add('over_list');

		}

	});

}
/* //공통 - 탭 메뉴의 wrap gradient on/off */




/* 설치사례 상세 - 설치제품 텍스트 펼치기/접기 */
textLimit();
function textLimit() {

	const $data_limit_row = document.querySelector('[data-limit-text="two_row"]');

	if(!$data_limit_row) return; // 안전 장치

	const limit_row_num 	= 2; // 제한 할 줄 수
	const standard_height = removeUnitText(window.getComputedStyle($data_limit_row).getPropertyValue('line-height')) * limit_row_num; // 제한 기준 높이 값

	if(standard_height < $data_limit_row.getBoundingClientRect().height) { // 3줄 이상 일 때

		$data_limit_row.classList.add('txt_limit'); // 텍스트 제한 클래스 삽입

		const $btn_arrow = $data_limit_row.lastElementChild; // 펼치기 / 접기 버튼

		$btn_arrow.addEventListener('click', (e) => {

			console.log('펼치기 / 접기 버튼 클릭하였습니다.');

			const $target_row = e.target.parentElement; // 해당 row

			if($target_row.classList.contains('opened')) { // 펼쳐져 있을 때

				$target_row.classList.remove('opened');

			} else { // 접혀져 있을 때

				$target_row.classList.add('opened');

			}

		});

	}

}
/* //설치사례 상세 - 설치제품 텍스트 펼치기/접기 */