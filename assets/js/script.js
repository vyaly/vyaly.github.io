$(document).ready(function() {

//   if($('.sidebar-container').hasClass('sidebar-active')){
//     $('body').removeClass('no-scroll');
//     $('#sidebar-button').removeClass('button-active');
//     $('.sidebar-container').removeClass('sidebar-active');
//     $('.page-wrapper').removeClass('wrapper-active');
//   }
//   else{
//     $('#sidebar-button').addClass('button-active');
//     $('.sidebar-container').addClass('sidebar-active');
//     $('.page-wrapper').addClass('wrapper-active');
//     setTimeout(function() {
//       $('body').addClass('no-scroll');
//     }, 300);
//   }
// });
	

	// NAV BAR //
	$("#about-side").click(function() {
		console.log("about me");
		$('html, body').animate({
			scrollTop: $('#about').offset().top 
		}, 1500);
	});

		$("#contact-side").click(function() {
		$('html, body').animate({
			scrollTop: $('#about').offset().top 
		}, 1500);
	});

		$("#work-side").click(function() {
		$('html, body').animate({
			scrollTop: $('#imdb').offset().top 
		}, 1500);
	});

		$("#home-side").click(function() {
		$('html, body').animate({
			scrollTop: $('#home').offset().top 
		}, 1500);
	});


//--------IMDB --------//

	
	$('#imdb').hover(function() {
		$('#i-caption').fadeIn(300);
	});

	$('#imdb').mouseleave(function() {
		$('#i-caption').hide();
	});

	$('#imdb').click(function(){
		window.open("https://www.hackster.io/vyaly/imdb-makeover-f56198");
	});

//----BIKEBUDDIES--------//

	$('.strip-caption').hide();

	$('#bikebuddies').hover(function() {
		$('#bikebuddies-caption').fadeIn(300);
	});

	$('#bikebuddies').click(function(){
		window.open("https://www.hackster.io/vyaly/bikebuddies-557bab");	
    });

	$('#bikebuddies').mouseleave(function() {
		$('#bikebuddies-caption').hide();
	});

//---Your Fault---//
	$('#yourfault').hover(function() {
		$('#f-caption').fadeIn(300);
	});

	$('#yourfault').mouseleave(function() {
		$('#f-caption').hide();
	});

	$('#yourfault').click(function(){
		window.open("https://www.hackster.io/vyaly/your-fault-e4b707");
	});

	//Strip Fading

	$('.overlay').click(function() {
		$('.overlay').hide();
		$('.modal-container').hide();
		$('body').css('overflow', 'visible');
	})

	$('.launch').hover(function() {
		$('.darken').addClass('blacken');
	})

	$('.darken').mouseleave(function() {
		$('.darken').removeClass('blacken');
	})

});