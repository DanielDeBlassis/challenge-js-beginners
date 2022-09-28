// Desafío de programación #40. Implementar el algoritmo de clasificación de burbujas para un arreglo de números

var array = [];

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function agregarNumero() {
    var numeroIntroducido = document.getElementById("numero");

    if (numeroIntroducido.value != "") {
        var numero = Number.parseInt(numeroIntroducido.value);
        array.push(numero);
    } else {
        alert("Error! Intente de nuevo.");
    }
}

function ordenarArray() {

    if (array.length > 0) {

        var newArr = ordenAscendente(array);

        resultado = `<p class="resultado">Resultado: ${JSON.stringify(newArr)}<p>`;
        contenedor.innerHTML = resultado;
    } else {
        alert("Error! Ingrese texto.");
    }
}

function ordenAscendente(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}