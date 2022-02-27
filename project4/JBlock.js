





$("textarea").on("change keyup paste", function() {
	$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#css").val() + "</style></head><body>" + $("#html").val() + "</body></html");
	document.getElementById("output").contentWindow.eval($("#javascript").val());
})


function max(){
	$("#cssbtn").click( function() {
		$("#css").toggle( "blind", 500);
		
	});


	$("#javascriptbtn").click( function() {
		$("#javascript").toggle("blind", 500);	
	});
}


function min(){
	$("#htmlbtn").click( function() {
		$("#html").toggle("blind", 500, function() {
			if ($(this).css("display") == "block") {
				$("iframe").css("width", "50%");
			} else if ($("#css, #javascript").css("display") == "none"){
				$("iframe").css("width", "100%");
			}
		});
	});	

	$("#cssbtn").click( function() {
		$("#css").toggle( "blind", 500, function(){
			if ($(this).css("display") == "block") {
				$("iframe").css("width", "50%");
			} else if ($("#html, #javascript").css("display") == "none"){
				$("iframe").css("width", "100%");
			}
		});
	});	

	$("#javascriptbtn").click( function() {
		$("#javascript").toggle("blind", 500, function(){
			if ($(this).css("display") == "block") {
				$("iframe").css("width", "50%");
			} else if ($("textarea").css("display") == "none"){
				$("iframe").css("width", "100%");
			}
		});
	});
}

if (screen.width < 750) {
	min();
} else {
	max();
}