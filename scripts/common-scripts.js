
;(function($){
	$(function(){

        // Begin input common focus and blur for value.
        var input = $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea');

        $(input).each(function () {
            var inputText = $(this).attr('placeholder')
            $(this).focus(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', '');
                }
            }).blur(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', inputText);
                    $(this).parent().removeClass('active');
                } else if ($(this).val().length > 0) {
                    $(this).parent().addClass('active');
                }
            });
        });
        // Ends input common focus and blur for value.
    
        
        
        //FAQs Accordion Function
        $(".accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h4").on("click touch", function(){
                $(".accordion-item").removeClass("active")
                $(".accordion-item .accordion-text").slideUp();
                if($this.find(".accordion-text:visible").length){
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                    $this.find(" > .accordion-text").slideDown();
                }
            })
        })
         
        
        
        $(window).on("load",function(){
            $("body").addClass("loaded")
        })
        
        $(window).on('scroll',function(){
            if($(window).scrollTop() > 1){
                $('body').addClass("scroll-move")
                $(".hero-wrap .scroll-arrow").fadeOut()
            }else{
                $('body').removeClass("scroll-move");
                $(".hero-wrap .scroll-arrow").fadeIn()
            }
     /*       
            if($(window).width() > 768){
                if($(window).scrollTop() > 1){
                    $("body").addClass("fixedNav")
                }else{
                    $("body").removeClass("fixedNav");
                    $(".nav-wrap").fadeIn()
                }
                
            }*/
            
            
        })
        
    if ($(window).width() > 768) {
            var $header = $("header"),
                $clone = $header.before($header.clone().addClass("fixedTop isSticky")),
                $fixedHeader = $('.fixedTop'),
                $headerHeight = $fixedHeader.outerHeight() + 5,
                lastPos = 0;
            $(window).resize(function () {
                $headerHeight = $fixedHeader.outerHeight() + 5;
            });


            $(window).on("scroll", function () {
                $fixedHeader.removeClass('onSizing');
                var fromTop = $(window).scrollTop();
                if (fromTop > 1 ) {
                    $header.addClass("sticky")
                    $(".main-header-section.fixedTop").addClass("shown")
                    /*$fixedHeader.css({
                        top: 0
                    });

                    if (fromTop < lastPos) {
                        $fixedHeader.css('top', '-' + $headerHeight + 'px');
                    }
                    lastPos = fromTop;*/


                } else {
                    //$fixedHeader.css('top', '-' + $headerHeight + 'px');
                    $header.removeClass("sticky")
                    $(".main-header-section.fixedTop").removeClass("shown")
                }
            });

        }
        
        
        // Phone nav click function 
        if($(window).width() > 991 ){
            $('.fixedTop .phone-nav').click(function(){
                $(".fixedTop .nav-wrap").slideToggle();
            });
        }else{
            $('.phone-nav').click(function(){
                $(".nav-wrap").slideToggle();
            });
        }
        
        
        
        
        
        var headerHeight = $(".main-header-section").outerHeight();
       /* $(window).on("scroll", function(){
            console.log(headerHeight)
            var elemetTop = $(".content-wrap").offset().top;
            if($(window).scrollTop() > elemetTop - 110){
                $("body").addClass("imageFixed")
            }else{
                $("body").removeClass("imageFixed")
            }
        })*/
        
        
         if( $('.hero-inner a.scroll-arrow').length ){
            $('a.scroll-arrow').click(function(e){
                e.preventDefault()
                var id = $(this).attr('href')

                $('html, body').stop(true, true).animate({
                    scrollTop: $('#about-us-wrap').offset().top
                }, 1400 );

            })
        } 
        
        if( $('.scroll-arrow.black-forest').length ){
            $('.scroll-arrow.black-forest').click(function(e){
                e.preventDefault()
                var id = $(this).attr('href')

                $('html, body').stop(true, true).animate({
                    scrollTop: $(".main-content-wrap").offset().top - 0
                }, 1400 );

            })
        }
        
        //Navigation function
            var sections = $('.section-parent'),
                nav = $('nav.main-nav');
            //nav_height = $('.main-header-section').outerHeight();

            $(window).on('scroll', function () {
                var cur_pos = $(this).scrollTop();

                sections.each(function () {
                    var top = $(this).offset().top - 5,
                        bottom = top + $(this).outerHeight();

                    if (cur_pos >= top && cur_pos <= bottom) {
                        nav.find('a').parent().removeClass('active');
                        sections.removeClass('active');

                        $(this).addClass('active');
                        nav.find('a[href="' + $(this).attr('id') + '"]').parent().addClass('active');

                        sectionBg = $(this).find(".section-bg").attr('src');
                        $(".hero-inner").css({
                            "background-image": "url(" + sectionBg + ")"
                        })

                    }
                });
            });

            $(".main-nav ul li a").each(function () {
                var id = $(this).attr('href');
                $(this).addClass(id + '-link');
            })

            nav.find('a').on('click', function () {
                var $el = $(this),
                    id = $el.attr('href');
                $(".main-nav ul li").removeClass('active');
                $el.parent().addClass('active');

                $('html, body').animate({
                    scrollTop: $('#' + id).offset().top - 0
                }, 1000, 'easeInOutCubic');

                return false;
            });
        
        $(window).on("scroll", function(){
            
            $(".content-inner .section-parent").each(function(){
                var thumbSrc = $(this).find("a").attr("href"),
                    thumbFigure =   $(this).find(".thumb-wrap img").attr("src"),
                    secPos = $(this).offset().top;
                
                
                if($(window).scrollTop() > secPos){
                    $(".sidebar__inner a").attr("href", thumbSrc);
                    $(".sidebar__inner img").attr("src", thumbFigure);
                    
                }
                
            })
            
        })
        
        
		
	})// End ready function.

	$(window).on('load', function(){
        // Begin common slider
        if ( $('div.slider-wrap').length == 0 ) return false

        $('div.slider-wrap').flexslider({
            animation:"fade",
            slideshow: true,
            directionNav: false,
            controlNav:false,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })	

    	$('div.slider-wrap video').trigger('play');

    })
	

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})