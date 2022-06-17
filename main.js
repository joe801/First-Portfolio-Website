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

//editing dark and light theme

var icon = document.getElementById("moon");
var icon2 = document.getElementById("sun");

icon.onclick = function(){
	document.body.classList.add("dark-theme");
	document.body.classList.remove("body")
	if (document.body.classList.contains("dark-theme")) {
		icon.style.display = "none";
		icon2.style.display = "inline-block";
	}
}

icon2.onclick = function(){
	document.body.classList.add("body")
	document.body.classList.remove("dark-theme");
	if (document.body.classList.contains("body")) {
		icon.style.display = "inline-block";
		icon2.style.display = "none";
	}
}
