var mot = prompt("Entrez un mot ou une suite de mots");

var nbv = 0;

for(var i = 0;i<mot.length;i++)
{
    var l = mot.substring(i,i+1);


if
(l == "a" || l == "e" || l == "i" || l == "o" || l == "u" || l == "y")

{
    nbv++;
}

}

document.write("Le mot ou la suite de mots " + mot + " contient " + nbv + " voyelles ");
console.log("Le mot ou la suite de mots " + mot + " contient " + nbv + " voyelles ")