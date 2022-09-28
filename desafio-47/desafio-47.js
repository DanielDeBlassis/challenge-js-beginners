// Desafío de programación #47. Copia profunda de una matriz irregular con números u otras matrices en una nueva matriz

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function copiarMatriz() {
    var matrizIngresada = document.getElementById("texto").value;

    if (matrizIngresada != "") {

        var matriz = JSON.parse(matrizIngresada);

        resultado = `<p class="resultado">Resultado: ${JSON.stringify(matriz)}</p>`;
        contenedor.innerHTML = resultado;

    } else {
        alert("Error! Por favor introduzca los valores.");
    }
}