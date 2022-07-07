function printSomething(){
	console.log("Hello Mirketa");
	var num = 2*(document.getElementById("text1").value);
	console.log(num);
}

function clearing(){
	document.getElementById("result").textContent = "Result is: " + (2*(document.getElementById("text1").value));
}