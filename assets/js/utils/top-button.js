window.onscroll = function() {
	scrollFunction();
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("topButton").style.display = "block";
	} else {
		document.getElementById("topButton").style.display = "none";
	}
}