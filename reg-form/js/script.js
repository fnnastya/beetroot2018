$(document).ready(function(){
	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
	var mail = $('#mail');
	var code = $('#code');
	var password = $('#password');
	var select = $('#select')
	var submit = $('#submit')
	var today = new Date()
	var yearToday = today.getFullYear();
	mail.blur(function(){
		if(mail.val() != ''){
			if(mail.val().search(pattern) == 0){
				$('.tooltip-mail').css('visibility','hidden');
				$('#submit').attr('disabled', false);
				mail.css('color','#333333');
				mail.removeClass('error').addClass('ok');
		}else{
			$('.tooltip-mail').css('visibility','visible');
			$('.tooltip-mail').text('Please include an @ in the email address');
			mail.css('color','red');
			$('#submit').attr('disabled', true);
			mail.addClass('error');
		}
		}else{
			$('.tooltip-mail').css('visibility','visible');
			$('.tooltip-mail').text('This field can not be empty');
			mail.addClass('error');
			$('#submit').attr('disabled', true);
		}
	});
	code.blur(function(){
		if(code.val() != ''){
			$('.tooltip-code').css('visibility','hidden');
			$('#submit').attr('disabled', false);
			code.removeClass('error').addClass('ok');
		}else{
			$('.tooltip-code').css('visibility','visible');
			$('.tooltip-code').text('This field can not be empty');
			code.addClass('error');
			$('#submit').attr('disabled', true);
		}
	});
	password.blur(function(){
		if(password.val() != ''){
			$('.tooltip-password').css('visibility','hidden');
			$('#submit').attr('disabled', false);
			password.removeClass('error').addClass('ok');
		}else{
			$('.tooltip-password').css('visibility','visible');
			$('.tooltip-password').text('This field can not be empty');
			password.addClass('error');
			$('#submit').attr('disabled', true);
		}
	});
	select.change(function(){
	var year = $("#select option:selected").text();
		if(yearToday - +year > 17) {
			$('.tooltip-select').css('visibility','hidden');
			$('#submit').attr('disabled', false);
			select.removeClass('error').addClass('ok');
		} else {
			$('.tooltip-select').css('visibility','visible');
			$('.tooltip-select').text('You must be at least 18 year old');
			select.addClass('error');
			$('#submit').attr('disabled', true);
	}
});

	$(function() {
		var year = $("#select option:selected").text();
		submit.click(function() {
		//   validate and process form here
		if ($('.form')[0].checkValidity()){
			console.log("Form is valid")
		} else {
			if (mail.val() == "") {
				$('.tooltip-mail').css('visibility','visible');
				$('.tooltip-mail').text('This field can not be empty');
			}
			if (password.val() == "") {
				$('.tooltip-password').css('visibility','visible');
				$('.tooltip-password').text('This field can not be empty');
			}
			if (code.val() == "") {
				$('.tooltip-code').css('visibility','visible');
				$('.tooltip-code').text('This field can not be empty');
			}
			if (yearToday - +year < 19) {
				$('.tooltip-select').css('visibility','visible');
				$('.tooltip-select').text('You must be at least 18 year old');
			}
		}
	});
	});
});

//    select change
	$(function(){
		$('._selectValue').text( $('select :selected').text() );
	});
	$('select').on('change', function(){
	});

//    tooltip-info
	$('.fa-question-circle').hover(function(){
	$('.tooltip-info').css('visibility','visible');
	$('.tooltip-info').text('We don`t use postal codes to cantact members directly');
	},
	function(){
	$('.tooltip-info').css('visibility','hidden');
	});