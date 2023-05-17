console.log("Connecté");

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Mélik", "Nouara", "Salem", "Samuel", "Stéphane"];

var p =  prompt("Saisissez un prénom");

var i = tab.indexOf(p);

if(i!==-1){
    tab.splice(i,1);
    tab.push("");

    alert("Le prénom " + p + " à été supprimer");
}
else{
    alert("Le prénom " + p + " n'est pas compatible , aucun prénom n'a été supprimer");
}

console.log(tab);

