$(function(){

	$('.card').on('click', function(e){
		
		e.preventDefault();

		$('.card').toggleClass('card--open');
	});


	$('.card').on('click', 'a', function(event){
		
		event.preventDefault();
		event.stopPropagation();

	});
	
	
	$('.card__like').on('click', function(){

		$(this).toggleClass('card__like--red');
	});


	$('.card__hidden').on('click', function(event){

		event.stopPropagation();

	});


	$('.card__follow-btn').on('click', function(){

		$(this).toggleClass('card__follow-btn--following');
	});

});