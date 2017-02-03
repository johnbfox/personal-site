$(document).ready(function(){
	
	var headerHeight = $("#header").height();
	var mobileToggled = false;

	$('.test-html').html($(window).width());
	$('#main-image').css({height: $(window).height()});
	$(".port-hover").hide();
	$(".overlay").css("height", $("img.portfolio").height());
	$(".overlay").css("width", $("img.portfolio").width());
	$(".port-info").css("height", $("img.portfolio").height());
	$(".port-info").css("width", $("img.portfolio").width());
	$("p.description").css("margin-top", $("img.portfolio").height()/3);
	$("ul.mob-nav").hide();
	$(".message-feedback").hide();
	$(".spinner").hide();	

	//$(".message-feedback").css("height", $("#email-form").height());	
	$(".message-feedback").css("height", "" + ($("#email-form").height()-76) + "px");
	$("#email-form").css("height", "" + ($("#email-form").height()) + "px");		

	if($(window).width() <= 600){
		$("ul.nav").hide();
		setMobileStyles();
	}else{
		$("#mobile-menu").hide();
		$("ul.mob-nav").hide();
		//mobileToggled=false;
	}

	$(window).resize(function(){
		if($(window).width() <= 600){
			$("ul.nav").hide();
			$("#mobile-menu").show();
			setMobileStyles();
		}else{
			$("#mobile-menu").hide();
			$("ul.nav").show();
			$("ul.mob-nav").hide();
			mobileToggled=false;
			setDesktopStyles();
		}
		$('#main-image').css({height: $(window).height()});
		$(".overlay").css("height", $("img.portfolio").height());
		$(".overlay").css("width", $("img.portfolio").width());
		$(".port-info").css("height", $("img.portfolio").height());
		$(".port-info").css("width", $("img.portfolio").width());
		$("p.description").css("margin-top", $("img.portfolio").height()/3);				
	});

	$("#mobile-menu").click(function(){
		if(!mobileToggled){
			console.log("not toggled");
			$("ul.mob-nav").show();
			mobileToggled=true;
		}else{
			console.log("toggled");
			$("ul.mob-nav").hide();
			mobileToggled=false;
		}
	})

	$(".arrow").click(function(){
	    $('html, body').animate({
                        scrollTop: $("#info-1").offset().top - 60
                    }, 1000);
    });

    $(".header-name").click(function(){
	    $('html, body').animate({
                        scrollTop: 0}, 1000);
    });

	$("li.nav.info").click(function(){
	    $('html, body').animate({
                        scrollTop: $("#info-1").offset().top - 60
                    }, 1000);
    });

    $("li.nav.portfolio").click(function(){
	    $('html, body').animate({
                        scrollTop: $("#portfolio").offset().top-60
                    }, 1000);
    });

    $("li.nav.contact").click(function(){
	    $('html, body').animate({
                        scrollTop: $("#contact").offset().top-60
                    }, 1000);
    });

    $("li.mob-nav.info").click(function(){
	    $('html, body').animate({
                        scrollTop: $("#info-1").offset().top - 60
                    }, 1000);
    });

    $("li.mob-nav.portfolio").click(function(){
	    $('html, body').animate({
                        scrollTop: $("#portfolio").offset().top-60
                    }, 1000);
    });

    $("li.mob-nav.contact").click(function(){
	    $('html, body').animate({
                        scrollTop: $("#contact").offset().top-60
                    }, 1000);
    });



	

	var $bgobj = $('#main-image');

	var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
    	var coords = '50% '+ yPos + 'px';
        $bgobj.css({ backgroundPosition: coords });
	
	$(window).scroll(function(){
		var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
    	var coords = '50% '+ yPos + 'px';
        $bgobj.css({ backgroundPosition: coords });
	});


	var controller = $.superscrollorama();

	controller.addTween('#info-1', 
	    TweenMax.from($('.row.info.one'), .5, {css:{opacity:0}}));
	controller.addTween('#info-1', 
	    TweenMax.from($('.row.info.two'), .5, {css:{opacity:0}}));

	$(".portfolio-item").hover(function(){
		$(this).children(".port-hover").fadeIn()
	}, function(){
		$(this).children(".port-hover").hide();
	});

	$(window).scroll(function(){
                adjustScroll();
            });
	
	function setMobileStyles(){
		$(".header-description").css("margin-top", "100px");
		$("h1.main").css("font-size", "40px");
		$(".header-description").css("margin-top", "40px");
		$(".head-description").css("font-size", "30px");
		$("h2.info-header").css("font-size", "46px");
		$("h2.info-header").css("margin-top", "40px");
		$("p.info-description").css("font-size", "26px");
		$(".info").css("margin-bottom", "30px");
		$("li.info").css("margin-bottom", "0px");
		$("h2.hobbies").css("margin-bottom", "30px");
		$("img.hobby-icon").css("margin-top", "10px");
		$("p.download").css("font-size", "24px");
		$("h2.contact-header").css("font-size", "34px");
		$(".message-feedback").css("margin-bottom", "100px");
		$("span.contact").css("font-size", "22px");
		$("span.footer").css("font-size", "16px");
		//controller.removeTween("#info-1");
	}

	function setDesktopStyles(){
		$(".header-description").css("margin-top", "180px");
		$("h1.main").css("font-size", "62px");
		$(".header-description").css("margin-top", "180px");
		$(".head-description").css("font-size", "32px");
		$("h2.info-header").css("font-size", "58px");
		$("h2.info-header").css("margin-top", "150px");
		$("p.info-description").css("font-size", "33px");
		$(".info").css("margin-bottom", "150px");
		$("li.info").css("margin-bottom", "0px");
		$("h2.hobbies").css("margin-bottom", "30px");
		$("img.hobby-icon").css("margin-top", "50px");
		$("p.download").css("font-size", "28px");
		$("h2.contact-header").css("font-size", "50px");
		$(".message-feedback").css("margin-bottom", "0px");
		$("span.contact").css("font-size", "26px");
		$("span.footer").css("font-size", "20px");
	}

	    $("#email-form").submit(function(event){
	event.preventDefault();
    var $form = $(this);
    var serializedData = $form.serialize();
    console.log("submitted");
    request = $.ajax({
       url: "/sendEmail.php",
       type: "post",
       data: serializedData
    });
    $(".send").hide();
	$(".spinner").show();

    //event.preventDefault();
    request.done(function (response, textStatus, jqXHR){
       $("#email-form").fadeOut(function(){
             $('.message-feedback').fadeIn();
       });
	});
});

	$("p.send-another").click(function(){
		$('.message-feedback').fadeOut(function(){
			$('#email-form').fadeIn();
			$(".spinner").hide();
			$(".send").show();
		});
	});

	function adjustScroll(){
		var windowTop = $(window).scrollTop();
                console.log(windowTop);
                if(windowTop >= $("#info-1").offset().top-65&& windowTop < $("#portfolio").offset().top-65){
                    $(".nav.info").css("border-bottom", "2px solid #6ac5a9");
                    $(".nav.portfolio").css("border-bottom", "none");
                    $(".nav.contact").css("border-bottom", "none");
                }else if(windowTop >= $("#hobbies").offset().top-65&& windowTop < $("#contact").offset().top-65){
                    $(".nav.info").css("border-bottom", "none");
                    $(".nav.portfolio").css("border-bottom", "2px solid #6ac5a9");
                    $(".nav.contact").css("border-bottom", "none");
                }else if(windowTop >= $("#contact").offset().top-65){
                    $(".nav.info").css("border-bottom", "none");
                    $(".nav.portfolio").css("border-bottom", "none");
                    $(".nav.contact").css("border-bottom", "2px solid #6ac5a9");
                }else{
                    $(".nav.info").css("border-bottom", "none");
                    $(".nav.portfolio").css("border-bottom", "none");
                    $(".nav.contact").css("border-bottom", "none");
                }

                if($(window).scrollTop() + $(window).height() == $(document).height()) {
                    $(".nav.info").css("border-bottom", "none");
                    $(".nav.portfolio").css("border-bottom", "none");
                    $(".nav.contact").css("border-bottom", "2px solid #6ac5a9");
                }
	}
});