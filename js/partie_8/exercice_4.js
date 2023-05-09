var N, X;

X = prompt("Entrez un nombre");
X = parseInt(X);

N = prompt("Entrez les premiers multiples d'un nombre");
N = parseInt(N);

for(var i=1;i<=N;i++)
{
    document.write(i + "*"+ X + "=" + (X*i) + "<br>");
}