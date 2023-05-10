console.log("Connecté")

var x = prompt("Entrez un nombre");

var y = prompt("Entrez un multiplicateur");


function produit(x, y){
    
     document.getElementById("doc").innerHTML=("Le cube de " + x + " est égal à " + (x*x*x) + "<br>" + "Le produit de " + x + " X " + y + " est égal à " + (x*y));
    
} 
produit(x, y)

 


function afficheImg(){
    document.getElementById("img").innerHTML; 
     
}
