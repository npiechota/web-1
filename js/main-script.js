$(document).ready(function(){

	$(window).scroll(function() {
		$('.product-col').each(function() {

		var colOffset = $(this).offset().top + $(this).outerHeight();
		var winOffset = $(window).scrollTop() + $(window).height();

		if(winOffset > colOffset) {
			$(this).animate( {'opacity':'1'}, 500);
		}

		});

	});

	$('.menu-bar').click(function() {

		$('#nav-top').toggleClass('visible');
		$('#nav-top a, .menu-close').click(function() {
			$('#nav-top').removeClass('visible');
		});

	});

	$('.darkbox').click(function(e){
		e.preventDefault();
		$('.box-overlay, .box').animate({'opacity': '0.8'}, 300, 'linear');
		$('.box').animate({'opacity': '1'}, 300, 'linear');
		$('.box-overlay, .box').css('display', 'block');

		var img_href = $(this).attr('href');
		$('#box-img').attr('src', img_href);
		$('.close-btn, .box-overlay').click(function(){
			darkbox_close();
		});

	});

	$('#nav-about, #nav-more, #nav-gallery, #nav-contact').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 800);
	});


	function darkbox_close() {
		$('.box-overlay, .box').animate({'opacity': '0'}, 300, 'linear', function(){
			$('.box-overlay, .box').css('display', 'none');
		});
	}

});