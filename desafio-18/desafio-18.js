// Desafìo de programación  #2: Imprimí los números impares del 1 al 100
//RESULTADO: 1 3 5 ... 99

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
var resultado = ``;

resultado += `<h1 class="nro-resultado">Números Primos del 1 al 100<h1>`;

for(let i = 1; i <= 100; i++){

    var divisores = 0;

    for(let j = 1; j <= i; j++){
        if(i%j === 0){
            divisores++;
        }
    }
    if(divisores === 2){
        resultado += `<p class="nro-resultado">${i}<p>`;
    }
}

contenedor.innerHTML = resultado;




