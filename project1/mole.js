
function maxwidth(){
		var counts = 0;
	function a(){
		counts++;
		document.getElementById("kills").innerHTML = counts;
	}


	document.getElementById("start-btn").onclick = function() {
		document.getElementById("emoji").innerHTML = "&#x1F608 &#x1F608 &#x1F608";
		document.getElementById("note").innerHTML = "<strong>" + "Note:" + "</strong>" + " refresh browser to start again";
		var i = document.getElementById('counter'),
			sId;

		function countdown() {
			var count = parseInt(i.textContent, 10);
			if (count == 0) {
				document.getElementById("emoji").innerHTML = "&#x1F44F &#x1F44F &#x1F44F";
				document.getElementById("mole").onclick = null;
				clearInterval(id);
					        
			} else {
				if (count > 1){
					document.getElementById("mole").onclick = function() {
					position();
					a();
				
					}
				}
			}
				    i.textContent = count - 1;
		}
			sId = setInterval(countdown, 1000);
	}

	function position() {
			var margintop = Math.floor(Math.random() * 250);
			var marginleft = Math.floor(Math.random() * 1200);
			var width = Math.floor(Math.random() * 100) + 50;
		document.getElementById("mole").style.marginTop = margintop + "px";
		document.getElementById("mole").style.marginLeft = marginleft + "px";
		document.getElementById("mole").style.width = width + "px";
		document.getElementById("mole").style.height = width + "px";
	}
} 

function minwidth(){
			var counts = 0;
	function a(){
		counts++;
		document.getElementById("kills").innerHTML = counts;
	}


	document.getElementById("start-btn").onclick = function() {
		document.getElementById("emoji").innerHTML = "&#x1F608 &#x1F608 &#x1F608";
		document.getElementById("note").innerHTML = "<strong>" + "Note:" + "</strong>" + " refresh browser to start again";
		var i = document.getElementById('counter'),
			sId;

		function countdown() {
			var count = parseInt(i.textContent, 10);
			if (count == 0) {
				document.getElementById("emoji").innerHTML = "&#x1F44F &#x1F44F &#x1F44F";
				document.getElementById("mole").onclick = null;
				clearInterval(id);
					        
			} else {
				if (count > 1){
					document.getElementById("mole").onclick = function() {
					position();
					a();
				
					}
				}
			}
				    i.textContent = count - 1;
		}
			sId = setInterval(countdown, 1000);
	}

	function position() {
			var margintop = Math.floor(Math.random() * 400);
			var marginleft = Math.floor(Math.random() * 280);
			var width = Math.floor(Math.random() * 75) + 30;
		document.getElementById("mole").style.marginTop = margintop + "px";
		document.getElementById("mole").style.marginLeft = marginleft + "px";
		document.getElementById("mole").style.width = width + "px";
		document.getElementById("mole").style.height = width + "px";
	}
} 

if (screen.width > 740) {
   maxwidth();
}
else {
   minwidth();
}