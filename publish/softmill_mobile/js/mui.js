
        //GNB
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

        // top go button
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