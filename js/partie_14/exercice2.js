console.log("Connecté")
var n = Math.random().toFixed(2) * 100;
n = Math.floor(n);

//console.log(n);

document.querySelector("#label1").onclick = verif();

function verif(){

    var ni = document.getElementById("textBox1").value;

    if (ni < n){
        alert("Trop petit");
    }
    else if (ni > n){
        alert("Trop grand");
    }
    else if(ni == n){
        alert("Bravo vous avez trouver le nombre magique ! ");
    }

}

