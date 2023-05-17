console.log("Connecté")

var societe = document.getElementById("societe").value;
var pac = document.getElementById("pac").value;
var code = document.getElementById("code").value;
var ville = document.getElementById("ville").value;
var mail = document.getElementById("mail").value;
var projet = document.getElementById("projet").value;
var choix = document.getElementById("choix").value;

function change(){
    var selectElmt = document.getElementById("choix");
    var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
    var textselectionne = selectElmt.options[selectElmt.selectedIndex].text;
    if(textselectionne=="Choisissez"){
        document.getElementById("projet").value=""
    }else{
    document.getElementById("projet").value=textselectionne;
    }
    }

    document.getElementById("form").addEventListener("submit"), function (f) {}
        f.preventDefault();

        if(societe == ""){
            alert("Entrez le nom de la société s.v.p !");
        }
        if(pac){
            alert("Entrez la personne à contacter s.v.p !");
        }
        if(code){
            alert("Entrez le Code Postal s.v.p ! ");
        }
        if(ville){
            alert("Entrez votre ville s.v.p !")
        }
        if(mail){
            alert("Entrez votre E-mail s.v.p ! ")
        }
        else{
            alert("Le formulaire a bien était remplie correctement et envoyé merci !")
        }


