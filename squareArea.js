function calc(v){
	var side = document.getElementById("text1").value;
	if(v==1){
		document.getElementById("text2").value = parseInt(side)*parseInt(side);
    }
	if(v==2){
		document.getElementById("text3").value = 4*parseInt(side);
	}
}
