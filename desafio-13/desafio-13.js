// Desafío de programación #13: Encuentra el valor máximo en un array de números

var array = [];
var suma = 0;

var contenedor = document.getElementById("contenedor-resultado");
var resultado = ``;

function agregarNumero() {
    var numeroIntroducido = document.getElementById("input-numero");

    if (numeroIntroducido.value != "") {
        var numero = Number.parseInt(numeroIntroducido.value);
        array.push(numero);
    } else {
        alert("Error! Intente de nuevo.");
    }
}

function findMax() {
    if (array.length > 0) {
        var numMax = Math.max(...array);
        resultado = `<p class="resultado">El número máximo es: ${numMax}<p>`;
        contenedor.innerHTML = resultado;
    } else {
        alert("Error! Agregue un número por favor!");
    }
}