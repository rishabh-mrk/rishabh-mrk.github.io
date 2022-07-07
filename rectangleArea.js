function calc(v){
	var length = document.getElementById("text1").value;
	var breadth = document.getElementById("text2").value;
	if(v==1){
		document.getElementById("text3").value = parseInt(length)*parseInt(breadth);
    }
	if(v==2){
		document.getElementById("text4").value = 2*(parseInt(length)+parseInt(breadth));
	}
}
