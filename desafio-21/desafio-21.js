// Desafío de programación #21: Rotar un array a la derecha una posición
// Ejemplo:
// [2,3,4,1] debería quedar como [1,2,3,4]
// [2,3] debería quedar como [3,2]

var array = [];

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

function rotarDerecha() {
    if (array.length > 0) {
        var newArr = array;
        var nroExtraido = newArr.pop();
        newArr.unshift(nroExtraido);
        resultado = `<p class="resultado">El array resultante es: ${JSON.stringify(newArr)}<p>`;
        contenedor.innerHTML = resultado;
    } else {
        alert("Error! Agregue un número por favor!");
    }
}