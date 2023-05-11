console.log("test");

var tableau = [];
var n = -1;
var s = 0;

while(n !=0){
    n = 
    parseInt(window.prompt("Entrez un nombre " + "\n" + " Entrez 0 pour terminer "));
      if(n!=0){
        tableau.push(n);
        s += n;
      }
}

var nv = tableau.length;
var m = s / nv;

console.log("Nombre de valeurs " + nv + "\n" + "Somme des valeurs " + s + "\n" + "Moyenne de valeurs " + m);