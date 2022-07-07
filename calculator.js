function sum(){
	console.log('Hello Mirketa Welcome');												
}

function printAdd(){
	var fname = Number(document.getElementById('firstname').value);
	var lname = Number(document.getElementById('lastname').value);
	console.log('Addition : ' + Number(fname+lname));
}

function printSubtarct(){
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	console.log('Subtraction : ' + Number(fname-lname));
}

function printMultiply(){
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	console.log('Multiplication : ' + fname*lname);
}

function printDivision(){
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	console.log('Division : ' + fname/lname);
}