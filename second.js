function printName(){
	console.log('Hello');
}

function hello(){
	cosole.log('Good Morning');
}

function display(){
	var name = document.getElementById('firstname').value;
	console.log(name);
}

function clone(){
	var val = document.getElementById('firstname').value;
	document.getElementById('lastname').value = val;
	console.log(val);
}

function clearInput(){
	console.log('Hello');
	document.getElementById('firstname').value = "";
	document.getElementById('lastname').value = "";
}

function reverseSecondInput(){
	sname = document.getElementById('lastname').value;
	document.getElementById('firstname').value = sname;
}

function reverseAll(){
	var fname = document.getElementById('firstname').value;
	var sname = document.getElementById('lastname').value;
	document.getElementById('firstname').value = sname;
	document.getElementById('lastname').value = fname;
}

	