function sortName(v){
	var input1 = document.getElementById("0").value;
	var input2 = document.getElementById("1").value;
	if(v==1){
		if(input1.length > input2.length){
			document.getElementById("0").value = input2;
			document.getElementById("1").value = input1;
		}	
	}
	if(v==2){
		if(input2.length > input1.length){
			document.getElementById("0").value = input2;
			document.getElementById("1").value = input1;
		}	
	}
	
}

