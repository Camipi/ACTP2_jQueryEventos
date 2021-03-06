$(function(){

	$('.card').on('click', function(e){		
		e.preventDefault();
		$(this).toggleClass('card--open');
	});


	$('.card').on('click', 'a', function(event){
		event.preventDefault();
		event.stopPropagation();
		//Otra opcion en lugar de usar estos dos eventos es:
		//return false;
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


	$('.create__select').on('change', function(e){
	 	var image =	$(this).val();
	 	$('.create__image > img').attr('src', 'assets/images/squared/' + image);
	});

		
	$('.create__select').on('change', function(e){
	 	var profile = $(this).val();
	 	$('.create__profile > img').attr('src', 'assets/images/profiles/' + profile);
	});	

		




});