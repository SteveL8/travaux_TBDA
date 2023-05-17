console.log("Connecté");

var PU, QTECOM, PAP, REM, PORT, TOT;

PU = prompt("Entrez le prix unitaire");

QTECOM = prompt("Entrez la quantité commander");

TOT = PU * QTECOM;

if(TOT >= 100 && TOT<= 200){
    REM = TOT * 0.05 
}
else if(TOT > 200 ){
    REM = TOT / 10;
}
else{
    REM = 0
}

PORT = 6

if(TOT - REM > 500){
    PORT = 0;
}
else{
    PORT;
}

PAP = TOT - REM + PORT;

console.log("Prix unitaire + quantité commandée = " + TOT + "\nRemise = -" + REM + "\nPort = " + PORT + " \nTout sa est égal a " + PAP);
