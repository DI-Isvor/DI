var n;
var idx;
var status = [false, false, false];

function activeCheck(idx, n){
    status[idx] = n; 
}

function consulta(idx){
    return status[idx]; 
}
