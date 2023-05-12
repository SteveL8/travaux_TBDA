console.log("Connecté")

function TableMultiplication(n){
    for (let i = 1; i <= 10; i++) {
        console.log(i + "*"+ n + "=" + (n*i) + " <br>")
        document.write(i + "*"+ n + "=" + (n*i) + " <br>")
        
    }
}
TableMultiplication(12);
