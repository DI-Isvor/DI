var n;
var pos;
var status = [];

function activeCheck(n, pos){
    status[pos] = n; 
}

function consulta(pos){
    return status[pos]; 
}
