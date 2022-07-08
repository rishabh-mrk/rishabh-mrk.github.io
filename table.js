function generate(){
	var str="<table>";
	for(i=1;i<=5;i++){
	   str = str + '<tr><td>Apple' + i + '</td></tr>'; 
	}
	str = str + '</table>';
	document.getElementById('s1').innerHTML = str;
}

function gen2(){
	var str = '<table class="table table-dark"><tbody>';
	var i1 = parseInt(document.getElementById('t1').value);
	var i2 = parseInt(document.getElementById('t2').value);
	for(i=1;i<=i2;i++){
		str = str + '<tr><td>' + (i1) + '</td><td>' + 'x' + '</td><td>' + (i) + '</td><td>' + '=' + '</td><td>' + (i1*i) + '</td></tr>';
	}
	str = str + '</tbody></table>';
	document.getElementById('s1').innerHTML = str;
}