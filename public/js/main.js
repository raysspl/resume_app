$(document).ready(function() {
	$.ajax('/api/resumes', {
		complete : function(response) {
			var resume = response.responseJSON[0];
			console.log(resume.id);
			$('h1').append('data-id', resume.id).html(resume.name_first + ' ' + resume.name_last);
			$('p').append('<div>'+resume.contact_info.email+'</div>');
			$('p').append('<div>'+resume.contact_info.phone+'</div>');
			$('p').append('<div>'+resume.contact_info.street_address.street+'</div>');
			$('p').append('<div>'+resume.contact_info.street_address.city+' '+resume.contact_info.street_address.state+' '+resume.contact_info.street_address.zip_code+'</div>');
			$('#delete').click(function() {
				console.log("about to delete");
				console.log(resume.id);
			$.ajax({
				url : '/api/resumes/'+ resume.id,
				type : 'DELETE'
		});
				window.location = window.location;
				return false;
	});
		}
	});
	
});

$(document).ready(function() {

	$('.education_block_add').click(function() {
		var html = $('.education_block').first().clone();
		html.css('display', 'none');
		$(this).before(html);
		html.slideDown(600);
		return false;
	});

	$('#userDataForm').submit(function() {
		var userData = {};

		var fullName = $('#name').val();
		var name_array = fullName.split(' ');
		userData.name_first = name_array[0];
		userData.name_last = name_array[name_array.length - 1];

		userData.schools = [];
		var education_blocks = $('.education_block');

		education_blocks.each(function(index, item) {
			var startDate = $(item).find('.startDate').val();
			var formattedDate = startDate.slice(5, 7) + startDate.slice(2, 4);
			userData.schools.push({
				name : $(item).find('.name').val(),
				degree : $(item).find('.degree').val(),
				start_month_year : formattedDate
			});
		});

		return false;
		for (i = 0; i < education_blocks.length; i++) {
			school = {};
			school.name = education_blocks[i].find('input.name').val();
			school.degree = education_blocks[i].find('input.degree').val();
			userData.schools.push(school);
		}
	});

});

/*
$(document).ready(function() {
	var favoriteDrinks = [];

	$('.person').each(function(index, item) {
		var element = $(item);
		var text = element.find('p').html();
		favoriteDrinks.push(text);
	});	
	console.log(favoriteDrinks);
});
*/
