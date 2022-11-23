// 탑 버튼
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


//서브 페이지 탭 메뉴
$(document).ready( function() {
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

//서브 페이지 탭 메뉴 (product)
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


//product gallay
// $(document).ready(function() {
// 	$("#content-slider").lightSlider({
// 		loop:false,
// 		keyPress:false
// 	});
// });


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

/* 햄버거 메뉴 1뎁스 활성화 */
const gnbMenu = document.querySelector('.gnb_menu');
gnbMenu?.addEventListener('click', (e) => {

	for (const val of gnbMenu.children) {

		if(e.target.tagName === 'UL') // 리스트를 클릭 하는게 아니라면 return
			return;

		if(e.target.parentElement.parentElement.classList.contains('smenu')) // 2depth 리스트를 클릭 했을 때 return
			return;

		if(e.target === val.firstElementChild) { //  클릭 하는 태그와 일치하는 리스트 active
			
			val.classList.add('active');

			const depth1TagA = val.firstElementChild;
			Depth3Change(depth1TagA); // 클릭 하는 태그가 소프트밀 소개 리스트일 때
			
			continue;
		}
		
		val.classList.remove('active'); // 나머지 비활성화
	}
});
/* //햄버거 메뉴 1뎁스 활성화 */

/* 햄버거 메뉴 2뎁스 활성화 */
const subMenu = document.querySelectorAll('.smenu');
if(subMenu) {
	for (const val of subMenu) {

		val.addEventListener('click', (e) => {

			let targetLi = e.target.parentElement;
			for (const lists of val.children) {

				if(e.target.tagName === 'UL') // 리스트를 클릭 하는게 아니라면 return
					return;

				if(targetLi === lists) { //  클릭 하는 태그와 일치하는 리스트 active
					Depth2Clear(subMenu); // 모든 2depth 리스트 비활성화 
					lists.classList.add('select');
					Depth3Designate(e.target.dataset.prodname); // 활성화 리스트 아이템에 맞춰 3depth 지정
					continue;
				}

			}

		});

	}
}

function Depth2Clear(tagUL) {

	for(const value of tagUL) {
		const depth2lists = value.children;
		for (const values of depth2lists) {
			values.classList.remove('select');
		}
	}

}
/* //햄버거 메뉴 2뎁스 활성화 */

/* 햄버거 메뉴 3뎁스 활성화 */
const dep3prodLists = document.querySelector('.treeDepth.prodLists');
const dep3banner = document.querySelector('.treeDepth.banner');

function Depth3Designate(prodName) {
	if(!prodName) // data-prodName이 없을 경우 종료
		return;

	dep3prodLists.setAttribute('data-prodName', prodName);
}

function Depth3Change(tagType) {
	if(tagType.dataset.gnb === 'intro') { // 클릭 하는 태그가 소프트밀 소개 리스트일 때
				
		dep3prodLists.classList.remove('active');
		dep3banner.classList.add('active');

	} else {

		dep3banner.classList.remove('active');
		dep3prodLists.classList.add('active');

	}
}
/* //햄버거 메뉴 3뎁스 활성화 */

/* 제품 상세 리스트 기능 */
const proItemsWrap = document.querySelector('.items .pro_items');
const detailImg = document.querySelector('.detail_img > img');
proItemsWrap?.addEventListener('click', (e) => { // 제품 리스트 wrap 클릭 시

	const lists = proItemsWrap.children;
	for (const proItem of lists) {
		if(proItem === e.target.parentElement.parentElement) { // 클릭한 아이템과 리스트 중 일치 할 때
			proItem.classList.add('active');
			
			let imgFileName = e.target.src.replace(/^.*\//, ''); // 정규표현식을 이용한 선택 아이템 파일명 추출
			detailImg.setAttribute('src', `../img/${imgFileName}`);
			continue;
		}

		proItem.classList.remove('active'); // 나머지 비활성화
	}
});

const proItemsArrowUp = document.querySelector('.items .arrow_up');
const proItemsArrowDown = document.querySelector('.items .arrow_down');
const proItemlists = document.querySelectorAll('.items .pro_items li');
let proItemTransY_val = 0; 

proItemCountCheck(); // 리스트 갯수 체크

proItemsArrowUp?.addEventListener('click', () => { // 화살표 위 버튼 클릭 시
	
	if(!proItemsArrowUp.classList.contains('active')) // active 아니면 실행 x (안전장치)
		return;
	
	proItemTransY_val += 100;

	if(!proItemTransY_val) { // 리스트 맨 처음일 때 비활성화
		proItemsArrowUp.classList.remove('active');
	}

	if(proItemlists.length * 100 + proItemTransY_val !== 500) { // down 버튼 활성화 계산 식
		proItemsArrowDown.classList.add('active');
	}

	for (const prolist of proItemlists) {
		prolist.style.transform = `translateY(${proItemTransY_val}%)`; // 리스트 아이템 무빙
	}

});

proItemsArrowDown?.addEventListener('click', () => { // 화살표 아래 버튼 클릭 시

	if(!proItemsArrowDown.classList.contains('active')) // active 아니면 실행 x (안전장치)
		return;

	proItemTransY_val -= 100;

	if(proItemlists.length * 100 + proItemTransY_val === 500) { // up 버튼 활성화 및 down 버튼 비활성화 계산 식
		proItemsArrowUp.classList.add('active');
		proItemsArrowDown.classList.remove('active');
	}

	for (const prolist of proItemlists) {
		prolist.style.transform = `translateY(${proItemTransY_val}%)`; // 리스트 아이템 무빙
	}

});

function proItemCountCheck() {
	if(proItemlists.length > 5) { // 리스트 갯수 5개 이상이면 down화살표 활성화
		proItemsArrowDown.classList.add('active');
	}
}

/* //제품 상세 리스트 기능 */

/* 햄버거 메뉴 on / off */
const gnb_burger = document.querySelector('.burger');
const menu_hamburger = document.querySelector('#hamburger');
const menu_close_btn = document.querySelector('.mega_header a');
gnb_burger?.addEventListener('click', () => {
	if(menu_hamburger.classList.contains('active')) {
		menu_hamburger.classList.remove('active');
	} else {
		menu_hamburger.classList.add('active');
	}
});
menu_close_btn?.addEventListener('click', () => {
	menu_hamburger.classList.remove('active');
});

/* //햄버거 메뉴 on / off */

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
	bannerLeft += $(this).width()+80;
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
