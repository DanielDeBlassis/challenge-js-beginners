// Desafío de programación #20: Rotar un array hacia la izquierda una posición
// Ejemplo:
// [9,1,2,3,4] debería quedar como [1,2,3,4,9]
// [5] debería quedar como [5]
// [4,3,2,1] debería quedar como [3,2,1,4]

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

function rotarIzquierda() {
    if (array.length > 0) {
        var newArr = array;
        var nroExtraido = newArr.shift();
        newArr.push(nroExtraido);
        resultado = `<p class="resultado">El array resultante es: ${JSON.stringify(newArr)}<p>`;
        contenedor.innerHTML = resultado;
    } else {
        alert("Error! Agregue un número por favor!");
    }
}