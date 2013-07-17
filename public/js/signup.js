$(document).ready(function() {
	// education_block_add
	$('.education_block_add').click(function() {
		var html = $('.school').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);
		html.fadeIn(600);
		html.slideDown(400);
		return false;
	});
	
	$('.skills_block_add').click(function() {
		var html = $('.skills').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);
		html.fadeIn(600);
		html.slideDown(400);
		return false;
	});

	$('.experience_block_add').click(function() {
		var html = $('.experience').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);
		html.fadeIn(600);
		html.slideDown(400);
		return false; 
	});

	$('#userDataForm').submit(function() {
		var userData = {};
		userData.name_first = $('#first_name').val();
		userData.name_last = $('#last_name').val();
		userData.street = $('#street').val();
		userData.city = $('#city').val();
		userData.state = $('#state').val();
		userData.email = $('#email').val();
		userData.school = $('#school').val();
		userData.degree = $('#degree').val();
		userData.skillz = $('#skillz').val();
		userData.experience = $('#experience').val();
		userData.certz = $('#certz').val();
		userData.addCommntz = $('#addCommntz').val();
		console.log(userData);
		
		$.ajax( {
			url : 'api/resumes',
			type : 'POST',
			data : JSON.stringify({resume : userData})
		});

		$.ajax( {
			url : 'api/resumes',
			type : 'DELETE',
			data : JSON.stringify({resume : userData})
		});

		return false; 
	});


}); 