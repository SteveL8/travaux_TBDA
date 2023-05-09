var nombre1 = prompt("Entrez le premier nombre ");
var nombre1 = parseInt(nombre1);

var nombre2 = prompt("Entrez un deuxième nombre");
var nombre2 = parseInt(nombre2);

var operateur = prompt("Entrez un opérateur");

switch (operateur)
{
    case "+":
         document.write( nombre1+nombre2);
         break;

    case "-":
         document.write( nombre1-nombre2);
         break;

    case "*":
         document.write( nombre1*nombre2);

    case "/":
        if (nombre1/nombre2==0)
        {
            document.write("Erreur division par 0, Réessayer");
        }
         document.write( nombre1/nombre2);
         break
        
    default:
        document.write( "Opérateur inconnu réessayer" );


}





