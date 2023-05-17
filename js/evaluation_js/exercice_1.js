console.log("Connecté")
var a, j, Ad, v;

 a = 1;
 j = 0;
 Ad = 0;
 v = 0;
 
 while(a >= 0 ){

    a = parseInt(prompt("Entrez les âges"));
     

    if(a < 20){
        j++;
    }

    else if(a >= 20 && a <= 40){
        Ad++;
    }
    else if(a > 40 && a < 100){
        v++;
    }
    else {
        v++;
        break;

    }
    
 }
 console.log("En tout il y a eu " + j + " âge(s) jeune entrée.");
 console.log("En tout il y a eu " + Ad + " âge(s) adulte rentrée.");
 console.log("En tout il y a eu  " + v + " âge(s) vieux rentrée.");
 console.log("l y a eu 1 âge centenaire rentrée");


