console.log("test");

var taille = prompt("Entrez la taille du tableau : ");
var tableau = [];

for(var v = 0; v < taille;v++){
    tableau.push(prompt("Entrez la valeur " + (v + 1)));
}

console.log('Contenue du tableau ' + tableau);