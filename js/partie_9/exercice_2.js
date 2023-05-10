console.log("test")

function strtok(str1, str2, n){
    var mot = str1.split(str2);
    
    
    return mot[n - 1];
}

var p = "Tout le monde peut le faire"
console.log(strtok(p," ",2));
console.log(strtok(p," ",6));
console.log(strtok(p," ",4));