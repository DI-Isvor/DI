var array = [];
/*array[] = ScormProcessGetValue("cmi.suspend_data");*/
var index = null;
var auxiliar = null;


function clickTest(index, auxiliar){
	if (auxiliar == true){
	array[index] = true;
	
	}
	if (auxiliar == false){
	array[index] = false;
	
	}
	/* ScormProcessSetValue("cmi.suspend_data", array[]); */
	
	
}

function retorno(index){
	alert(array[index]);
}
