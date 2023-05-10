console.log("test");

var n1, n2, n3, n4, n5, tab;

n1 = prompt("Attribuez la première valeur à ajouté au tableau");

n2 = prompt("Attribuez la deuxième valeur à ajouté au tableau");

n3 = prompt("Attribuez la troisième valeur à ajouté au tableau");

n4 = prompt("Attribuez la quatrième valeur à ajouté au tableau");

n5 = prompt("Attribuez la cinquième valeur à ajouté au tableau");

tab = new Array();
tab[0] = [n1];
tab[1] = [n2];
tab[2] = [n3];
tab[3] = [n4];
tab[4] = [n5];

var nb = tab.length;
console.log("Le tableau contient " + nb + " éléments");

document.write(tab.join(""));


