// Desafío de programación #29: Imprimir la distancia entre los primeros 100 números primos

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

var numero = 2;
var contador = 0;

while (contador < 100) {
    var divisores = 0;
    
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }

    if (divisores === 2) {
        contador++;
    }
    if (divisores > 2) {
        resultado += `<p class="nro-resultado">${numero}<p>`;
    }
    numero++;
}

contenedor.innerHTML = resultado;




