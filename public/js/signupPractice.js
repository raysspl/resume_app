$(document).ready(function(){

	$('.education_block_add').click(function() {
		var html = $('.education_block').first().clone().css({display:'none'});
		$(this).before(html);
		html.slideDown(600);
		return false;
	});

	$('#userDataForm').submit(function() {
		var userData = {};
		
		userData.name = $('#name').val();
		
		userData.schools = [];
		var education_blocks = $('.education_block');
		for (i=0; i < education_blocks.length; i++) {
			school = {};
			school.name = education_blocks[i].find('input.name').val();
			school.degree = education_blocks[i].find('input.degree').val();
			userData.schools.push(school);
		}
		console.log(education_blocks);

		console.log(userData);
		return false;
	});

});


/*
// Beginning of Machiko, Josh, Carolyn's codebase ------------->
$(document).ready(function() {

	// school_group_add
	$('.school_group_add').click(function() {
		var html = $('.school_group').first().clone();
		html.css('display', 'none');
		$(this).before(html);
		html.slideDown(400);
		return false;
	})
	

	// accomplishments_add
	$('.accomplishments_group_add').click(function() {
		var html = $('.accomplishments_group').first().clone();
		$(this).before(html);
		html.css('display', 'none');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// experiences-add
	$('.experiences_group_add').click(function() {
		var html = $('.experiences_group').first().clone();
		$(this).before(html);
		html.css('display', 'none');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// skill-add
	$('.skill_group_add').click(function() {
		var html = $('.skill_group').first().clone();
		$(this).before(html);
		html.css('display', 'none');
		$(this).before(html);
		html.slideDown(400);
		return false;
	});

	// use .each on .school_groups
	$('#userDataForm').submit(function() {
		var userData = {};

		userData.name_first				= ('.name_first').val();
		userData.name_last				= ('.name_last').val();
		userData.website				= ('.website').val();
		userData.linked_in				= ('.linked_in').val();
		userData.twitter				= ('.twitter').val();

		userData.email					= ('.email').val();
		userData.phone					= ('.phone').val();
		userData.street_address			= ('.street_address').val();
		userData.city					= ('.city').val();
		userData.zip_code				= ('.zip_code').val();
		userData.state					= ('.state').val();

		userData.schools = [];

		var school_groups = $('.school_group');

		school_groups.each(function(index, item) {
			userData.schools.push ({
				name 	: $(item).find('.schools_id').val(),
				major	: $(item).find('.schools_major').val(),
				minor 	: $(item).find('.schools_minor').val(),
			});
		});
			console.log(userData);
			return false;
	})
	// End of Machiko's codebase
	*/