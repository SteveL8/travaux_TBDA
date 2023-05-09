var p, no;

no = 1;

p="Ben";
while (p!="")
{
    p = prompt("Saisissez le prénom N°" + no + "\n" +"ou Clic sur Annuler pour arrêter le saisie.");

    console.log("Nombre de prénom" + no + "et le prénom rentrez est " + p);

    no++;

}

console.log("Vous avez introduit " + (no - 2) + " prénom(s)"  );



