$(document).ready(function(){

	// toggle menu/navbar script //

	$('.bars-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.bars-btn i').toggleClass("active");
	});
});

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
