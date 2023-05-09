var s=0;
var u="";
var m=parseFloat(u)/s;
 
 
while(u!="0"){
  u=prompt("Entrez votre nombre" + "\n" + "Entrez 0 pour terminer");
  s=s+parseFloat(u);
}
 
console.log("La somme maximal vaut  " + " " + (Math.max(u)) );
console.log("La somme minimal vaut  " + " " + (Math.min(u)) );