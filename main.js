// Smooth Scrolling //
	$("#navbar a, .btn").on("click", function(event) {
		if(this.hash !== '') {
			event.preventDefault();

			const hash = this.hash;

		$("html, body").animate(
			{
			scrollTop: $(hash).offset().top - 30
			},
			800
			);
		}
	});	

$(document).ready(function(){

	// toggle menu/navbar script //

	$('.bars-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.bars-btn i').toggleClass("active");
	});
});

