console.log("Connecté")

document.getElementById("form").addEventListener("submit"), function (f) {}
    f.preventDefault();

var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var sexe = document.getElementById("sexe").value;
var date = document.getElementById("datedenaissance").value;
var code = document.getElementById("codepostal").value;
var mail = document.getElementById("email").value;
var sujet = document.getElementById("sujet").value;
var accepter = document.getElementById("accepter").value;

if (nom == "") {
   alert("Votre nom est obligatoire (*) pour valider le formulaire veuillez rentrez votre nom.")
}
if (prenom == "") {
    alert("Votre prénom est obligatoire (*) pour valider le formulaire veuillez rentrez votre prénom.")
}
if (sexe == "") {
    alert("Votre sexe est obligatoire (*) pour valider le formulaire veuillez cliquer sur un bouton")
}
if (date == "") {
    alert("Votre date de naissance est obligatoire (*) pour valider le formulaire veuillez la rentrés.")
}
if (code ==""){
   alert("Votre Code Postal est obligatoire (*) pour valider le formulaire veuillez le rentré ")
}
if (mail ==""){
    alert("Votre e-mail est obligatoire (*) pour valider le formulaire veuillez rentrez votre e-mail.")
} 
if (sujet =="Veuillez sélectionner un sujet"){
    alert("La selection d'un sujet est obligatoire (*) pour valider le formulaire veuillez en selectionné un.")
}
if (accepter ==""){
    alert("Vous devez accepter le traitement du formulaire pour le finalisé.")
}

