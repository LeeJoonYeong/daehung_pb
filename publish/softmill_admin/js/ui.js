(function($) {
    // 키워드 관리
    $('input[name="keyword"]').amsifySuggestags();

    // 캘린더
    $( "#testDatepicker" ).datepicker({
        showOn: "both", 
        buttonImage: "../images/btn_cal.png",
        buttonImageOnly: true
         
    });

    

    // 타임
    $('input.timepicker').timepicker({
        timeFormat: 'h:mm p',
    interval: 60,
    minTime: '10',
    maxTime: '6:00pm',
    defaultTime: '11',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
    });

    
    // lnb 높이
    $('.lnb').css('height', $(window).height() - 67);
    $(window).resize(function() {
        $('.lnb').css('height', $(window).height() - 67);
    });


    // 체크박스 스위치
    $.switcher = function(filter) {

        var $haul = $('.checkboxSwitch'); //input[type=checkbox]

        if (filter !== undefined && filter.length) {
            $haul = $haul.filter(filter);
        }

        $haul.each(function() {

            var $checkbox = $(this).hide(),
                $switcher = $(document.createElement('div'))
                .addClass('ui-switcher')
                .attr('aria-checked', $checkbox.is(':checked'));

            if ('radio' === $checkbox.attr('type')) {
                $switcher.attr('data-name', $checkbox.attr('name'));
            }

            toggleSwitch = function(e) {
                if (e.target.type === undefined) {
                    $checkbox.trigger(e.type);
                }
                $switcher.attr('aria-checked', $checkbox.is(':checked'));
                if ('radio' === $checkbox.attr('type')) {
                    $('.ui-switcher[data-name=' + $checkbox.attr('name') + ']')
                        .not($switcher.get(0))
                        .attr('aria-checked', false);
                }
            };

            $switcher.on('click', toggleSwitch);
            $checkbox.on('click', toggleSwitch);

            $switcher.insertBefore($checkbox);
        });

    };

    // input file
    var fileTarget = $('.int_btn .upload-hidden');
    fileTarget.on('change', function () {
    if (window.FileReader) {
        var filename = $(this)[0].files[0].name;
    } else {
        var filename = $(this).val().split('/').pop().split('\\').pop();
    }

    $(this).siblings('.upload-name').val(filename);
    });

   

    


})(jQuery);

$.switcher();
