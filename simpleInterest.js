function Calc(){
	console.log("Hello Calculator");
	var t1 = document.getElementById('text1').value;
	var t2 = document.getElementById('text2').value;
	var t3 = document.getElementById('text3').value;
	document.getElementById('text4').value = parseInt(t1)*parseInt(t2)*parseInt(t3)/100;
if(t1 == '' || t2 == '' || t3 == ''){
	document.getElementById('text4').value = 'Please enter all the values';
}
}
