changeRed = function() {
	var arrTags = document.getElementsByTagName("h1"); 
	var l = arrTags.length;
	
	for (var i = 0; i < l; i++) {
		arrTags[i].className = "color-red";
	}
}

changeBlue = function() {		
	var arrTags = document.getElementsByTagName("h1"); 
	var l = arrTags.length;
	
	for (var i = 0; i < l; i++) {
		document.getElementsByTagName("h1")[i].className = "color-blue";
	}
}

changeGreen = function() {
	var arrTags = document.getElementsByTagName("h1");
	var l = arrTags.length;
	
	for (var i = 0; i < l; i++) {
		document.getElementsByTagName("h1")[i].className = "color-green";
	}	
}

