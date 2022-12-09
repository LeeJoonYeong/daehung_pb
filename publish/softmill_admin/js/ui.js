// (function ($) {
// 	// 키워드 관리
// 	$('input[name="keyword"]').amsifySuggestags();

// 	// 캘린더
// 	$("#testDatepicker").datepicker({
// 		showOn: "both",
// 		buttonImage: "../images/btn_cal.png",
// 		buttonImageOnly: true
// 	});

// 	// 타임
// 	$('input.timepicker').timepicker({
// 		timeFormat: 'h:mm p',
// 		interval: 60,
// 		minTime: '10',
// 		maxTime: '6:00pm',
// 		defaultTime: '11',
// 		startTime: '10:00',
// 		dynamic: false,
// 		dropdown: true,
// 		scrollbar: true
// 	});

// 	// lnb 높이
// 	$('.lnb').css('height', $(window).height() - 67);
// 	$(window).resize(function () {
// 		$('.lnb').css('height', $(window).height() - 67);
// 	});

// 	// 체크박스 스위치
// 	$.switcher = function (filter) {

// 		var $haul = $('.checkboxSwitch'); //input[type=checkbox]

// 		if (filter !== undefined && filter.length) {
// 			$haul = $haul.filter(filter);
// 		}

// 		$haul.each(function () {

// 			var $checkbox = $(this).hide(),
// 				$switcher = $(document.createElement('div'))
// 					.addClass('ui-switcher')
// 					.attr('aria-checked', $checkbox.is(':checked'));

// 			if ('radio' === $checkbox.attr('type')) {
// 				$switcher.attr('data-name', $checkbox.attr('name'));
// 			}

// 			toggleSwitch = function (e) {
// 				if (e.target.type === undefined) {
// 					$checkbox.trigger(e.type);
// 				}
// 				$switcher.attr('aria-checked', $checkbox.is(':checked'));
// 				if ('radio' === $checkbox.attr('type')) {
// 					$('.ui-switcher[data-name=' + $checkbox.attr('name') + ']')
// 						.not($switcher.get(0))
// 						.attr('aria-checked', false);
// 				}
// 			};

// 			$switcher.on('click', toggleSwitch);
// 			$checkbox.on('click', toggleSwitch);

// 			$switcher.insertBefore($checkbox);
// 		});

// 	};

// 	// input file
// 	var fileTarget = $('.int_btn .upload-hidden');
// 	fileTarget.on('change', function () {
// 		if (window.FileReader) {
// 			var filename = $(this)[0].files[0].name;
// 		} else {
// 			var filename = $(this).val().split('/').pop().split('\\').pop();
// 		}

// 		$(this).siblings('.upload-name').val(filename);
// 	});

// })(jQuery);

// $.switcher();

/* 로그인 데이터 전송 */
// $(".login_btn").click(function(){
// 	let loginId = $(".login_id_input").val();
// 	let loginPw = $(".login_pw_input").val();

// 	$.post("../access/login_process.php", {
// 		loginId: loginId,
// 		loginPw: loginPw
// 	}, function(data) {
// 		document.querySelector('.login_copyright').innerHTML = data;
// 		console.log('data: ', data);
// 	})
// })
/* //로그인 데이터 전송 */

/* 로그인 정보 공란 시 */
const login_form = document.querySelector('.login_div > form');
login_form?.addEventListener('submit', (e) => {
	const login_id_val = document.querySelector('.login_id_input').value;
	const login_pw_val = document.querySelector('.login_pw_input').value;
	if(!login_id_val || !login_pw_val) {
		e.preventDefault();
		alert('아이디 또는 비밀번호를 입력해주세요');
	}
});
/* //로그인 정보 공란 시 */

/* 2차 제품 카테고리 활성화 */
const stepTwo_radio_use = document.querySelector('#stepTwo_use');
const stepTwo_radio_unuse = document.querySelector('#stepTwo_unUse');
const stepTwo_table_wrap = document.querySelector('.stepTwo_table_wrap');
console.log(stepTwo_table_wrap);
stepTwo_radio_use?.addEventListener('change', () => { // 2차 제풐 카테고리 사용여부 on
	if(!stepTwo_table_wrap.classList.contains('active')) { // 테이블이 없을 경우 만
		stepTwo_table_wrap.classList.add('active');
	} else
		return;

});

stepTwo_radio_unuse?.addEventListener('change', () => { // 2차 제풐 카테고리 사용여부 off
	if(stepTwo_table_wrap.classList.contains('active')) { // 테이블이 있을 경우 만
		stepTwo_table_wrap.classList.remove('active');
	} else
		return;
});

const btn_stepTwo_table_add = document.querySelector('.btn_add');
const tepTwo_table_td = document.querySelector('.stepTwo_table_wrap > td');
const stepTwo_category_count_max = 10; // 2차 카테고리 인덱스 최대치
let stepTwo_category_count = 1; // 2차 카테고리 인덱스

btn_stepTwo_table_add?.addEventListener('click', (e) => {
	console.log('추가');
	e.preventDefault(); // 폼 전송 방지

	if(stepTwo_category_count === stepTwo_category_count_max) {
		alert('등록 가능한 수를 초과했습니다.');
		return;
	} 

	stepTwo_category_count++;
	addStepTwoCategory(); // 2차 카테고리 아이템 추가
	countStepTwoCategory(); // 2차 카테고리 각 인덱스 카운트

	console.log('stepTwo_category_count: ', stepTwo_category_count);
});

function addStepTwoCategory() {
	// 테이블 생성 및 설정
	let table = document.createElement('table');
	table.setAttribute('class', 'category_03 mgupdown10');

	// thead 및 tbody 생성
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');
	table.appendChild(thead);
	table.appendChild(tbody);

	// thead > tr 생성
	let tr = document.createElement('tr');
	thead.appendChild(tr);

	// thead > tr > th 생성 및 설정
	let th = document.createElement('th');
	th.setAttribute('colspan', '4');
	tr.appendChild(th);

	// thead > tr > th > h3 및 button 생성 및 설정
	let h3 = document.createElement('h3');
	h3.setAttribute('class', 'i_b');
	h3.setAttribute('data-stepTwoCategory', 'title');
	h3.textContent = `2차 카테고리`;
	let button = document.createElement('button');
	button.setAttribute('class', 'btn_del');
	button.textContent = ' 삭제 ';

	button.addEventListener('click', (e) => { // 삭제 버튼 클릭 이벤트 생성
		console.log('삭제');
		e.preventDefault(); // 폼 전송 방지
		
		const parent_table = e.target.parentElement.parentElement.parentElement.parentElement;

		if(parent_table.tagName === 'TABLE') { // 대상이 table 태그 일 때만
			parent_table.remove();
			stepTwo_category_count--;
			countStepTwoCategory();
		}

	});

	th.appendChild(h3);
	th.appendChild(button);

	// thead > tr > th > button > img 생성 및 설정
	let img = document.createElement('img');
	img.setAttribute('src', '../img/minus_icon.svg');
	button.prepend(img);

	// tbody > tr 생성 및 설정
	let tb_tr_type1 = document.createElement('tr');
	tb_tr_type1.setAttribute('class', 'b_b1 h58');
	tbody.appendChild(tb_tr_type1);
	let tb_tr_type2 = document.createElement('tr');
	let tb_tr_type3 = document.createElement('tr');
	tbody.appendChild(tb_tr_type2);
	tbody.appendChild(tb_tr_type3);

	// tbody > tr (type1) > td (type1 ~ type4) 생성 및 설정
	let tb_td_type1 = document.createElement('td');
	let tb_td_type2 = document.createElement('td');
	let tb_td_type3 = document.createElement('td');
	let tb_td_type4 = document.createElement('td');
	tb_td_type1.setAttribute('class', 'td_title h_a');
	tb_td_type1.textContent = '노출여부';
	tb_tr_type1.appendChild(tb_td_type1);
	tb_td_type2.setAttribute('class', 'exposure_area');
	tb_tr_type1.appendChild(tb_td_type2);
	tb_td_type3.setAttribute('class', 'exposure_num_area');
	tb_td_type3.textContent = '노출순서';
	tb_tr_type1.appendChild(tb_td_type3);
	tb_td_type4.setAttribute('class', 'w19');
	tb_tr_type1.appendChild(tb_td_type4);

	// tbody > tr (type1) > td (type1) > strong 생성 및 설정
	let strong_type1 = document.createElement('strong');
	strong_type1.textContent = ' * ';
	tb_td_type1.appendChild(strong_type1);

	// tbody > tr (type1) > td (type2) > input 및 label 생성 및 설정
	let input_type1 = document.createElement('input');
	input_type1.setAttribute('class', 'magic_radio');
	input_type1.setAttribute('type', 'radio');
	input_type1.setAttribute('name', 'stepTwo_isExposure');
	input_type1.setAttribute('id', 'stepTwo_exposure');
	input_type1.setAttribute('value', 'exposure');
	input_type1.setAttribute('data-stepTwoCategory', 'exposure');
	input_type1.checked = true;
	tb_td_type2.appendChild(input_type1);
	let label_type1 = document.createElement('label');
	label_type1.setAttribute('for', 'stepTwo_exposure');
	label_type1.setAttribute('class', 'magic_radio_label');
	label_type1.textContent = '노출';
	tb_td_type2.appendChild(label_type1);
	let input_type2 = document.createElement('input');
	input_type2.setAttribute('class', 'magic_radio');
	input_type2.setAttribute('type', 'radio');
	input_type2.setAttribute('name', 'stepTwo_isExposure');
	input_type2.setAttribute('id', 'stepTwo_hide');
	input_type2.setAttribute('value', 'hide');
	input_type2.setAttribute('data-stepTwoCategory', 'hide');
	tb_td_type2.appendChild(input_type2);
	let label_type2 = document.createElement('label');
	label_type2.setAttribute('for', 'stepTwo_hide');
	label_type2.setAttribute('class', 'magic_radio_label');
	label_type2.textContent = '노출안함';
	tb_td_type2.appendChild(label_type2);

	// tbody > tr (type1) > td (type4) > input 생성 및 설정
	let input_type3 = document.createElement('input');
	input_type3.setAttribute('class', 'num_input');
	input_type3.setAttribute('type', 'number');
	input_type3.setAttribute('name', 'stepTwo_Exposure2_order');
	input_type3.setAttribute('value', '0');
	input_type3.setAttribute('data-stepTwoCategory', 'exposureOrder');
	tb_td_type4.appendChild(input_type3);

	// tbody > tr (type2) > td (type5 ~ type6) 생성 및 설정
	let tb_td_type5 = document.createElement('td');
	tb_td_type5.setAttribute('class', 'td_title h115');
	tb_td_type5.setAttribute('rowspan', '2');
	tb_td_type5.textContent = '키테고리명';
	tb_tr_type2.appendChild(tb_td_type5);
	let tb_td_type6 = document.createElement('td');
	tb_td_type6.setAttribute('class', 'link_attach_area');
	tb_td_type6.setAttribute('colspan', '3');
	tb_tr_type2.appendChild(tb_td_type6);

	// tbody > tr (type2) > td (type5) > strong 생성 및 설정
	let strong_type2 = document.createElement('strong');
	strong_type2.textContent = ' * ';
	tb_td_type5.appendChild(strong_type2);

	// tbody > tr (type2) > td (type6) > label, input 생성 및 설정
	let label_type3 = document.createElement('label');
	label_type3.setAttribute('for', 'ko_stepTwo_categoryName2');
	label_type3.textContent = '한글';
	tb_td_type6.appendChild(label_type3);
	let input_type4 = document.createElement('input');
	input_type4.setAttribute('class', 'file_input w376px');
	input_type4.setAttribute('title', '한글 카테고리 명');
	input_type4.setAttribute('id', 'ko_stepTwo_categoryName2');
	input_type4.setAttribute('name', 'ko_stepTwo_categoryName2');
	input_type4.setAttribute('type', 'text');
	input_type4.setAttribute('data-stepTwoCategory', 'KoName');
	tb_td_type6.appendChild(input_type4);

	// tbody > tr (type3) > td (type7) 생성 및 설정
	let tb_td_type7 = document.createElement('td');
	tb_td_type7.setAttribute('class', 'link_attach_area');
	tb_td_type7.setAttribute('colspan', '3');
	tb_tr_type3.appendChild(tb_td_type7);

	// tbody > tr (type3) > td (type7) > label, input 생성 및 설정
	let label_type4 = document.createElement('label');
	label_type4.setAttribute('for', 'en_stepTwo_categoryName2');
	label_type4.textContent = '영어';
	tb_td_type7.appendChild(label_type4);
	let input_type5 = document.createElement('input');
	input_type5.setAttribute('class', 'file_input w376px');
	input_type5.setAttribute('title', '영문 카테고리 명');
	input_type5.setAttribute('id', 'en_stepTwo_categoryName2');
	input_type5.setAttribute('name', 'en_stepTwo_categoryName2');
	input_type5.setAttribute('type', 'text');
	input_type5.setAttribute('data-stepTwoCategory', 'EnName');
	tb_td_type7.appendChild(input_type5);

	tepTwo_table_td.appendChild(table); // 테이블 삽입

}

function countStepTwoCategory() {
	const stepTwo_category_title = document.querySelectorAll('[data-stepTwoCategory="title"]');
	const stepTwo_category_exposure = document.querySelectorAll('[data-stepTwoCategory="exposure"]');
	const stepTwo_category_hide = document.querySelectorAll('[data-stepTwoCategory="hide"]');
	const stepTwo_category_order = document.querySelectorAll('[data-stepTwoCategory="exposureOrder"]');
	const stepTwo_category_name_ko = document.querySelectorAll('[data-stepTwoCategory="KoName"]');
	const stepTwo_category_name_en = document.querySelectorAll('[data-stepTwoCategory="EnName"]');

	stepTwo_category_title.forEach((v, i) => { // 2차 카테고리 타이틀 카운트
		v.textContent = `2차 카테고리 ${i + 1}`;
	});

	stepTwo_category_exposure.forEach((v, i) => { // 2차 카테고리 라디오 (노출) 카운트
		v.name = `stepTwo_isExposure${i + 1}`;
		v.id = `stepTwo_isExposure${i + 1}`;
		v.nextElementSibling.setAttribute('for', `stepTwo_isExposure${i + 1}`); // 해당 라디오 라벨
	});

	stepTwo_category_hide.forEach((v, i) => { // 2차 카테고리 라디오 (노출 안함) 카운트
		v.name = `stepTwo_isExposure${i + 1}`;
		v.id = `stepTwo_hide${i + 1}`;
		v.nextElementSibling.setAttribute('for', `stepTwo_hide${i + 1}`); // 해당 라디오 라벨
	});

	stepTwo_category_order.forEach((v, i) => { // 2차 카테고리 노출순서 카운트
		v.name = `stepTwo_Exposure${i + 1}_order`;
		v.value = i + 1;
	});

	stepTwo_category_name_ko.forEach((v, i) => { // 2차 카테고리 명 (한글) 카운트
		v.previousElementSibling.setAttribute('for', `ko_stepTwo_categoryName${i + 1}`); // 해당 라디오 라벨
		v.id = `ko_stepTwo_categoryName${i + 1}`;
		v.name = `ko_stepTwo_categoryName${i + 1}`;
	});

	stepTwo_category_name_en.forEach((v, i) => { // 2차 카테고리 명 (영문) 카운트
		v.previousElementSibling.setAttribute('for', `en_stepTwo_categoryName${i + 1}`); // 해당 라디오 라벨
		v.id = `en_stepTwo_categoryName${i + 1}`;
		v.name = `en_stepTwo_categoryName${i + 1}`;
	});
}

/* //2차 제품 카테고리 활성화 */