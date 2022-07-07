function calculator(){
	var p = document.getElementById("text1").value;
	var r = document.getElementById("text2").value;
	var n = document.getElementById("text3").value;
	var t = document.getElementById("text4").value;
	
	var result = 1+(r/n);
	document.getElementById("text5").value = p*(Math.pow(result,(n*t)));
}
