console.log("Connecté")
var nombre = (Math.floor(Math.random()*100));
console.log(nombre);

document.querySelector("#label1").onclick = verif();

function verif(){
    var ni = document.getElementById("textBox1").Value;

    if(ni < nombre){
        alert("Trop petit");
    }
     if(ni > nombre){
      alert("Trop grand");
    }
    if(ni == nombre){
       alert("Bravo vous avez trouvé le nombre magique");
    }
}



/*
function random(min, max){
    return Math.random () * (max - min) + min;
}

document.querySelector('#button1').onclick = function(){
    
    return verif();

}

var utilisateur = document.querySelector('#button1') 
var random = function(){}

if (random < utilisateur)
{
    alert("Trop petit")

}
else if(random >utilisateur)
{
    alert("Trop grand");
}
    */

