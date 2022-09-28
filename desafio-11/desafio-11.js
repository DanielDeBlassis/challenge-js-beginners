// Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

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

function calcularPromedio() {
    suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    var promedio = suma / array.length;
    resultado = `<p class="resultado">El promedio de los números del array es igual a ${promedio}.<p>`;
    contenedor.innerHTML = resultado;
}