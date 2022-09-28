// Desafío de programación #10: Calcula la suma de todos los números en un array de números

var array = [];
var suma = 0;

var contenedor = document.getElementById("contenedor-resultado");
// contenedor.append("HOLA");
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

function calcularSuma() {
    suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    resultado = `<p class="resultado">La suma de los números del array es igual a ${suma}.<p>`;
    contenedor.innerHTML = resultado;
}