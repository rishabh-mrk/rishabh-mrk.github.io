function calc(v){
	var radius = document.getElementById("text1").value;
	if(v==1){
		document.getElementById("text2").value = 3.14*parseInt(radius)*parseInt(radius);
    }
	if(v==2){
		document.getElementById("text3").value = 2*3.14*parseInt(radius);
	}
}
