;$(document).ready(function(){

	// Parallax effect
	$(window).scroll(function(){

		var st = $(this).scrollTop();

		$('.wrapper > img').css({
			'transform' : 'translate(0%, ' + st/15 + '%'
		});

	});

	// Подключаем фэнсибокс
	$('.fancybox').fancybox();

	// Меняем цвет блока .author при наведении на него мышкой
	$('.blog .author').on('mouseenter', function(){
		$(this).css('background-color','#f0f0f0');
		$(this).find('div').css('background-color','#f0f0f0');
	});
	$('.blog .author').on('mouseleave', function(){
		$(this).css('background-color','#fff');
		$(this).find('div').css('background-color','#fff');
	});

	// Добавляем hover effect к фотографии автора
	$('.blog .author .user_img').on('mouseenter', function(){
		if($(this).find('ul').is(':hidden')){
			$(this).find('ul').fadeIn();
		}else{
			$(this).find('ul').fadeOut(); // Чтобы, после того, как много раз наподряд вошел и вышел из .user_img, картинка не продолжала мигать 
		}
	});
	$('.blog .author .user_img').on('mouseleave', function(){
		$(this).find('ul').fadeOut();
	});

	// Создаем переключатель для выпадающего меню в .categorys
	$('.blog .categorys div > ul > li > span').on('click', function(){
		if($(this).siblings().is(':hidden')){
			$(this).siblings().slideDown();
			$(this).toggleClass('changed');
		}else{
			$(this).siblings().slideUp();
			$(this).toggleClass('changed');
		}
	});

	// Создаем переключатель для выпадающего подменю в .categorys
	$('.blog .categorys div > ul > li > ul > li span').on('click', function(){
		if($(this).siblings().is(':hidden')){
			$(this).siblings().slideDown();
			$(this).toggleClass('changed');
		}else{
			$(this).siblings().slideUp();
			$(this).toggleClass('changed');
		}
	});

	// Отправка формы
	var trueEmail = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

	$('#send').on('click', function(){

		var trueName = /^[a-zA-Z ]+[a-zA-Z]$/;
		var name = $('#name').val();
		var email = $('#email').val();

		if (name.search(trueName) !== 0 || name == ''){
			$('.wrong_name').text('*required');
			$('.wrong_email').text('');
		} else if (email.search(trueEmail) !== 0){
			$('.wrong_name').text('');
			$('.wrong_email').text('*please enter a valid address');
		} else {
			$('.wrong_name').text('');
			$('.wrong_email').text('');
			alert('Message has been successfully sent');
		}

	});

	// Подписка
	$('#subscribe').on('click', function(){

		var emailSubscribe = $('#emailSubscribe').val();

		if (emailSubscribe.search(trueEmail) !== 0){
			$('.wrongEmailSubscribe').css('display', 'block');
		} else {
			$('.wrongEmailSubscribe').css('display', 'none');
			alert('You have successfully subscribed!');
		}

	});

	// Чтобы placeholder отображался во всех браузерах
	$('input, textarea').placeholder();

});

$(window).load(function(){ // Именно при скролле вниз эта анимация будет действовать

	// Добавляем анимацию готовому макету
	$('header').animated('fadeInUp', 'fadeOutUp');
	$('.works').animated('fadeInDown', 'fadeInDown');
	$('.about').animated('zoomIn', 'zoomOut');
	$('.post').animated('fadeInLeft', 'fadeInLeft');
	$('.contact').animated('fadeInRight', 'fadeInRight');
	$('.back').animated('fadeInLeft', 'fadeInLeft');
	$('footer').animated('flipInX', 'flipInX');

});